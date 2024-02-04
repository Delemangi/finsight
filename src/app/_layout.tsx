import Providers from "@providers/Providers";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";

const RootLayout = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  return (
    <Providers>
      <Slot />
    </Providers>
  );
};

export default RootLayout;
