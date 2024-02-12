import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
    secondary: "#f5f5f5",
    background: "#fff",
    error: "#ff0000",
    warning: "#ffae42",
    success: "#00a86b",
    white: "#fff",
    black: "#000",
  },
  darkColors: {
    primary: "#100f38",
    secondary: "#6f6f6f",
    background: "#070624",
    error: "#ff0000",
    warning: "#ffae42",
    success: "#00a86b",
    white: "#fff",
    black: "#000",
  },
  mode: "light",
});
