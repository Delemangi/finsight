import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  errorText: {
    margin: "auto",
    color: theme.colors.error,
  },
}));

type Props = {
  error: string;
};

const ErrorScreen = ({ error }: Props) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text h3>The application has crashed.</Text>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default ErrorScreen;
