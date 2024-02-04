import { queryClient } from "@query/queryClient";
import { ThemeProvider } from "@rneui/themed";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@themes/theme";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
