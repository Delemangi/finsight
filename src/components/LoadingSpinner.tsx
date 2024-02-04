import { makeStyles } from "@rneui/themed";
import { ActivityIndicator, StyleProp, View, ViewStyle } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme?.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
}));

type Props = {
  size?: number | "small" | "large";
  style?: StyleProp<ViewStyle>;
};

const LoadingSpinner = ({ size = "small", style }: Props) => {
  const classes = useStyles();

  return (
    <View style={[classes.container, style]}>
      <ActivityIndicator size={size} />
    </View>
  );
};

export default LoadingSpinner;
