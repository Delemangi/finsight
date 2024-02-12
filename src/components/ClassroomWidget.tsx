import { config } from "@config/config"
import {WebView} from "react-native-webview"

const ClassroomWidget = () => {
  return <WebView 
    source={{ uri:  config.CLASSROOMS_URL}}
    style = {{height: '100%'}}  /> 
}

export default ClassroomWidget