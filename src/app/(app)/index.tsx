import { useUserStore } from "@stores/userStore";
import { usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Login from "./login";

const App = () => {
  const { user } = useUserStore();
  const route = usePathname();

  if (!user && route !== "/login" && route !== "/register") {
    return <Login />;
  }

  return (
    <View>
      <StatusBar style="auto" />
      Hello {user?.email}
    </View>
  );
};

export default App;
