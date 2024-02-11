import { AntDesign } from "@expo/vector-icons";
import Providers from "@providers/Providers";
import { useUserStore } from "@stores/userStore";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";

const RootLayout = () => {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  return (
    <Providers>
      <Tabs
        screenOptions={{
          unmountOnBlur: true,
          tabBarStyle: {
            backgroundColor: "#000",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="(app)"
          options={{
            title: "Home",
            tabBarIcon: () => <AntDesign name="home" size={20} color="white" />,
          }}
        />
        <Tabs.Screen
          name="auth/login"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="auth/register"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="auth/logout"
          options={{
            title: "Logout",
            tabBarIcon: () => (
              <AntDesign name="logout" size={20} color="white" />
            ),
            href: user ? "/auth/logout" : null,
          }}
        />
        <Tabs.Screen
          name="posts/index"
          options={{
            title: "Posts",
            tabBarIcon: () => (
              <AntDesign name="paperclip" size={20} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="questions/index"
          options={{
            title: "FAQ",
            tabBarIcon: () => (
              <AntDesign name="question" size={20} color="white" />
            ),
          }}
        />
      </Tabs>
    </Providers>
  );
};

export default RootLayout;
