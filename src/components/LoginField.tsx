import { Button, Input, Text, makeStyles } from "@rneui/themed";
import { Link } from "expo-router";
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  View,
} from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    marginHorizontal: "auto",
    marginVertical: theme.spacing.xl,
  },
  button: {
    marginVertical: theme.spacing.xl,
  },
}));

type Props = {
  mode: "login" | "register";
  email: string;
  onEmailChange: (email: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  disabled: boolean;
  onButtonClick: () => void;
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

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <View style={classes.container}>
      <View>
        <Text h4 style={classes.title}>
          {mode.toUpperCase()}
        </Text>
        <Input
          value={email}
          onChangeText={onEmailChange}
          placeholder="Enter your email"
          onKeyPress={handleKeyPress}
          returnKeyType="next"
          keyboardType="email-address"
        />
        <Input
          value={password}
          onChangeText={onPasswordChange}
          placeholder="Enter your password"
          onKeyPress={handleKeyPress}
          returnKeyType="done"
          keyboardType="default"
          secureTextEntry
        />
        <Button
          disabled={disabled}
          onPress={onButtonClick}
          radius={5}
          style={classes.button}
        >
          {mode.toUpperCase()}
        </Button>
      </View>
      <View>
        <Link
          href={mode === "login" ? "/register" : "/login"}
          disabled={disabled}
        >
          {mode === "login" ? "No account? Register" : "Have an account? Login"}
        </Link>
      </View>
    </View>
  );
};

export default LoginField;
