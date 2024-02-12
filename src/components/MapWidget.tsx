import { useLocationStore } from "@stores/locationStore";
import {WebView} from "react-native-webview"
import LoadingSpinner from "./LoadingSpinner";
import { config } from "@config/config";

const MapWidget = () => {
  const latitude = useLocationStore((state) => state.latitude);
  const longitude = useLocationStore((state) => state.longitude);

  if(latitude != null && longitude != null)
  { 
    const prep_uri = config.MAPS_ROOT_URL + latitude + ',' + longitude + config.MAPS_ADDITIONAL_PATH
    return <WebView 
      source={{ uri:  prep_uri}}
      style = {{height: '100%'}}  /> 
  }
  else
  {
    return <LoadingSpinner/>
  }
}

  export default MapWidget;