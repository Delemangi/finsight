import { config } from "@config/config";
import { makeStyles } from "@rneui/themed";
import WebView from "react-native-webview";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const Calendar = () => {
  const styles = useStyles();

  return <WebView source={{ uri: config.CALENDAR_URL }} style={styles.root} />;
};

export default Calendar;
