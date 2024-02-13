import { config } from "@config/config";
import { makeStyles } from "@rneui/themed";
import WebView from "react-native-webview";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const Classrooms = () => {
  const styles = useStyles();

  return (
    <WebView source={{ uri: config.CLASSROOMS_URL }} style={styles.root} />
  );
};

export default Classrooms;
