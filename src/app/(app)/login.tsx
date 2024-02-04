import LoginField from "@components/LoginField";
import ErrorComponent from "@components/Error";
import LoadingSpinner from "@components/LoadingSpinner";
import { useLoginUser } from "@hooks/auth";
import { Redirect } from "expo-router";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, user } = useLoginUser();

  if (user) {
    return <Redirect href="/" />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorComponent error={error.message} />;
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
