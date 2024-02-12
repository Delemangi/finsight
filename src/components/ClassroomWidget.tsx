import {WebView} from "react-native-webview"

const ClassroomWidget = () => {
  return <WebView 
    source={{ uri:  'https://map.finki.ukim.mk/?l=0#18/42.00465/21.40903'}}
    style = {{height: '100%'}}  /> 
}

export default ClassroomWidget