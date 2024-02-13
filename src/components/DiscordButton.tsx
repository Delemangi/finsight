import { Ionicons } from "@expo/vector-icons";
import { makeStyles } from "@rneui/themed";
import { Linking, TouchableOpacity, View, Text } from "react-native";

import ErrorScreen from "./ErrorScreen";

const url = "https://discord.gg/finki-studenti-810997107376914444";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "white",
    padding: 10,
  },
}));

const DiscordButton = () => {
  const styles = useStyles();

  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      return <ErrorScreen error={error} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Join the forum</Text>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons name="logo-discord" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default DiscordButton;
