import { config } from "@config/config";
import { makeStyles } from "@rneui/themed";
import { useLocationStore } from "@stores/locationStore";
import { WebView } from "react-native-webview";

import LoadingSpinner from "./LoadingSpinner";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const MapWidget = () => {
  const styles = useStyles();
  const latitude = useLocationStore((state) => state.latitude);
  const longitude = useLocationStore((state) => state.longitude);

  if (latitude != null && longitude != null) {
    const uri =
      config.MAPS_ROOT_URL +
      latitude +
      "," +
      longitude +
      config.MAPS_ADDITIONAL_PATH;

    return <WebView source={{ uri }} style={styles.root} />;
  } else {
    return <LoadingSpinner />;
  }
};

export default MapWidget;
