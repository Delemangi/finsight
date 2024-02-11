import {
  Button,
  Divider,
  Input,
  Text,
  makeStyles,
  useTheme,
} from "@rneui/themed";
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
    width: "100%",
  },
  title: {
    marginHorizontal: "auto",
    marginVertical: theme.spacing.xl,
    color: theme.colors.white,
  },
  button: {
    marginTop: theme.spacing.lg,
    borderRadius: 2.5,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "60%",
    backgroundColor: theme.colors.background,
    paddingTop: theme.spacing.lg,
  },
  input: {
    color: theme.colors.white,
  },
  link: {
    color: theme.colors.white,
    marginVertical: theme.spacing.lg,
  },
  spacing: {
    marginVertical: theme.spacing.md,
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
  isLoading: boolean;
  error?: Error | null;
};

const LoginField = ({
  mode,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  disabled,
  onButtonClick,
  isLoading,
  error,
}: Props) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <View style={[styles.container, styles.center]}>
      <Text h4 style={[styles.title, styles.center]}>
        {mode.toUpperCase()}
      </Text>
      <Divider
        color={theme.colors.secondary}
        width={0.5}
        style={{
          width: "75%",
          marginBottom: 20,
        }}
      />
      <View style={[styles.inputContainer, styles.center]}>
        <Input
          value={email}
          onChangeText={onEmailChange}
          placeholder="Enter your email"
          onKeyPress={handleKeyPress}
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <View style={styles.spacing} />
        <Input
          value={password}
          onChangeText={onPasswordChange}
          placeholder="Enter your password"
          onKeyPress={handleKeyPress}
          returnKeyType="done"
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry
          style={styles.input}
          renderErrorMessage={Boolean(error)}
          errorMessage={error ? "Your credentials are incorrect" : ""}
        />
      </View>
      <View style={styles.spacing} />
      <Button
        onPress={onButtonClick}
        disabled={disabled}
        radius={5}
        style={styles.button}
        loading={isLoading}
        color="success"
        disabledStyle={{
          backgroundColor: theme.colors.primary,
        }}
      >
        {mode.toUpperCase()}
      </Button>
      <View>
        <Link
          href={mode === "login" ? "/register" : "/login"}
          style={styles.link}
        >
          {mode === "login"
            ? "No account? Register!"
            : "Have an account? Login!"}
        </Link>
      </View>
    </View>
  );
};

export default LoginField;
