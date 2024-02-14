import { queryCache } from "@api/queryClient";
import { isRouteAuthenticated } from "@auth/routes";
import DiscordButton from "@components/DiscordButton";
import { Text, makeStyles } from "@rneui/themed";
import { useNotificationStore } from "@stores/notificationStore";
import { useUserStore } from "@stores/userStore";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Redirect, usePathname } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Alert,
  Linking,
  LogBox,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

import { Post } from "../../types/Post";

let notificationFlag = false;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

LogBox.ignoreAllLogs();

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      Alert.alert("Failed to get push token for push notification!");
      return;
    }

    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: "a3e4812e-00ec-4b17-b40a-7153670ef369",
      })
    ).data;
  } else if (!notificationFlag) {
    Alert.alert("Must use physical device for Push Notifications");
    notificationFlag = true;
  }

  return token;
}

async function schedulePushNotification(post: Post) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: post.title,
      body: post.description ?? "No description given.",
      data: { post },
    },
    trigger: { seconds: 5 },
  });
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.white,
    textTransform: "uppercase",
    marginVertical: 20,
  },
  text: {
    color: theme.colors.white,
  },
  contact: {
    marginTop: 50,
    color: theme.colors.white,
  },
  user: {
    color: theme.colors.white,
    fontWeight: "bold",
  },
  email: {
    color: theme.colors.white,
    fontWeight: "bold",
    margin: "auto",
    textDecorationLine: "underline",
    textAlign: "center",
  },
}));

queryCache.subscribe(({ query }) => {
  const user = useUserStore.getState().user;
  const notifications = useNotificationStore.getState().states;
  const allowedNotifications = Object.entries(notifications)
    .filter(([, value]) => value)
    .map(([key]) => key);

  if (
    user &&
    query.queryKey[0] === "posts" &&
    allowedNotifications.includes(query.queryKey[1]) &&
    query.state.data
  ) {
    const posts = query.state.data as Post[];

    posts.slice(0, 3).forEach((post) => {
      schedulePushNotification(post);
    });
  }
});

const App = () => {
  const styles = useStyles();
  const { user } = useUserStore();
  const route = usePathname();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current!,
      );
      Notifications.removeNotificationSubscription(responseListener.current!);
      Notifications.dismissAllNotificationsAsync();
    };
  }, []);

  if (!user && isRouteAuthenticated(route)) {
    return <Redirect href="/auth/login" />;
  }

  const handleContact = () => {
    Linking.openURL("mailto:support@finsight.com");
  };

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Finsight
      </Text>
      <Text style={styles.text}>
        Welcome to Finsight! You are currently logged in as{" "}
        <Text style={styles.user}>{user?.email}</Text>.
      </Text>

      <Text style={styles.contact}>
        For any issues and troubles please contact us at{" "}
        <TouchableOpacity onPress={handleContact} style={styles.contact}>
          <Text style={styles.email}>support@finsight.com</Text>
        </TouchableOpacity>
      </Text>

      <DiscordButton />
    </View>
  );
};

export default App;
