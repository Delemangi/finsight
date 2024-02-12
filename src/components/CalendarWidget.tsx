import { config } from "@config/config"
import {WebView} from "react-native-webview"

const CalendarWidget = () => {
  return <WebView 
    source={{ uri: config.CALENDAR_URL }}
    style = {{height: '100%'}}  /> 
}

export default CalendarWidget