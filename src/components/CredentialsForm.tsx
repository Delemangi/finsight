import { makeStyles, Text, Input, Button } from "@rneui/themed";
import { Link } from "expo-router";
import { GestureResponderEvent, View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    margin: "auto",
  },
}));

type Props = {
  mode: "login" | "register";
  email: string;
  onEmailChange: (email: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  disabled: boolean;
  onButtonClick: (event: GestureResponderEvent) => void;
};

const LoginField = ({
  mode,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  disabled,
  onButtonClick,
}: Props) => {
  const classes = useStyles();

  return (
    <View style={classes.container}>
      <View>
        <Text h2 style={classes.title}>
          {mode.toUpperCase()}
        </Text>
        <Input value={email} onChangeText={onEmailChange} />
        <Input
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry
        />
        <Button disabled={disabled} onPress={onButtonClick} radius={5}>
          {mode.toUpperCase()}
        </Button>
      </View>
      <View>
        <Link
          href={mode === "login" ? "/register" : "/login"}
          disabled={disabled}
        >
          {mode === "login" ? "Register" : "Login"}
        </Link>
      </View>
    </View>
  );
};

export default LoginField;
