import { isRouteAuthenticated } from "@auth/routes";
import { Text, makeStyles } from "@rneui/themed";
import { useUserStore } from "@stores/userStore";
import { Redirect, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import Login from "./login";
import * as Location from 'expo-location';
import { useEffect } from "react";
import { usePermissions } from "expo-permissions";
import { usePostStore } from "@stores/postStore";
import { useGetPosts } from "@api/hooks";

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
  const postsType = usePostStore((state) => state.type);
  const { data } = useGetPosts(postsType);

  async function getUserLocation() {
    try {
      const location = Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      console.log('Current location:', (await location).coords.latitude, (await location).coords.longitude);
      // Use location.coords.latitude and location.coords.longitude for the coordinates
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status === 'granted') {
      // Permission granted, get the user's location
      getUserLocation();
    } else {
      console.log('Location permission denied');
      // Handle the case where the user denied location permission
    }
  };


  useEffect(() => {
    requestLocationPermission()
  }, []);

  if (!user && isRouteAuthenticated(route)) {
    return <Redirect href="/auth/login" />;
  }
    
  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Finsight
      </Text>
      <Text style={styles.text}>
        Welcome to Finsight! You are currently logged in as{" "}
        <Text style={styles.user}>{user?.email}</Text>.
      </Text>
    </View>
  );
};

export default App;
