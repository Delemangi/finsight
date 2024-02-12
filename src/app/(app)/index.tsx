import { isRouteAuthenticated } from "@auth/routes";
import { Text, makeStyles } from "@rneui/themed";
import { useUserStore } from "@stores/userStore";
import { Redirect, usePathname } from "expo-router";
import { useEffect } from "react";
import { Button, View } from "react-native";
import * as Notifications from 'expo-notifications';


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
  },
  text: {
    color: theme.colors.white,
  },
  user: {
    color: theme.colors.white,
    fontWeight: "bold",
  },
}));


const App = () => {
  const styles = useStyles();
  const { user } = useUserStore();
  const route = usePathname();

  if (!user && isRouteAuthenticated(route)) {
    return <Redirect href="/auth/login" />;
  }
  
  useEffect(() => {
    // Set up notifications
    Notifications.requestPermissionsAsync();
     // Schedule a local notification
     const trigger = new Date().getTime() + 5000; // in 5 seconds
     Notifications.scheduleNotificationAsync({
       content: {
         title: 'Local Notification',
         body: 'This is a local notification!',
       },
       trigger,
     });
     console.log(trigger);
  }, []);


  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Finsight
      </Text>
      <Text style={styles.text}>
        Welcome to Finsight! You are currently logged in as{" "}
        <Text style={styles.user}>{user?.email}</Text>.
      </Text>
      <Text style={styles.text}>
        You can now start exploring the app and see what's new.
      </Text>
    </View>
  );
};

export default App;
