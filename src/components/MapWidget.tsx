import { useLocationStore } from "@stores/locationStore";
import {Text, View} from "react-native"
import {WebView} from "react-native-webview"

export default function MapWidget() {
  const latitude = useLocationStore((state) => state.latitude);
  const longitude = useLocationStore((state) => state.longitude);

  const prep_uri = 'www.google.com/maps/dir/'+latitude+','+longitude+'/Faculty+of+Computer+Science+%26+Engineering,+Rugjer+Boshkovikj,+Skopje/'+
                    '@44.8831698,13.6218345,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x13541443605aa4ab:0x33d56647e5b87264!2m2!1d21.4095479!2d42.0041182?entry=ttu'
  return <WebView 
    source={{ uri:  prep_uri}}
    style = {{height: '100%'}}  /> 

  }