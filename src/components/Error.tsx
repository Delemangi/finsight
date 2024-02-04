import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";

type Props = {
  error: string;
};

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

const Error = ({ error }: Props) => {
  const classes = useStyles();

  return (
    <View style={classes.container}>
      <Text h3>The application has crashed.</Text>
      <Text style={classes.errorText}>{error}</Text>
    </View>
  );
};

export default Error;
