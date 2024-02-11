import { useLoginUser } from "@auth/hooks";
import ErrorScreen from "@components/ErrorScreen";
import LoadingSpinner from "@components/LoadingSpinner";
import LoginField from "@components/LoginField";
import { Redirect } from "expo-router";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, user } = useLoginUser();

  if (user) {
    return <Redirect href="/camera" />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  return (
    <LoginField
      mode="login"
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      disabled={!email || !password}
      onButtonClick={() => login(email, password)}
    />
  );
};

export default Login;
