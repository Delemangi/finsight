import { Linking, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const DiscordButton = () => {
    const HandlePress = async () => {
        //replace with actual discord link
        const url = 'https://www.google.com';  
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                console.error('Cannot open URL:', url);
            }
        } catch (error) {
            console.error('Error opening URL:', error);
        }
    };

    return (
        <View 
            style= {{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
            }}>

            <Text 
                style = 
                    {{color: "white", 
                      padding: 10}}>
                Join the forum</Text>

            <TouchableOpacity onPress={HandlePress}>
            <Ionicons name="logo-discord" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default DiscordButton;