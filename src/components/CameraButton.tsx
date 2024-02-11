import { Entypo } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@rneui/themed";
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";

const useStyles = makeStyles((theme) => ({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: theme.colors.white,
    marginLeft: 10,
  },
}));

type Props = {
  title: string;
  onPress: () => void;
  icon: string;
};

export default function Button({ title, onPress, icon }: Props) {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon as any} size={28} color={theme.colors.white} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
