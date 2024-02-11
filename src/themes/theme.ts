import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
    error: "#ff0000",
  },
  darkColors: {
    primary: "#000",
    error: "#ff0000",
    background: "#070624",
    secondary: "##0d0c36",
  },
  components: {
    Card: {
      containerStyle: {
        backgroundColor: "#100f38",
      },
    },
  },
  mode: "dark",
});
