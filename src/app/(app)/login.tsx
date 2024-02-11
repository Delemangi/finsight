import { useLoginUser } from "@auth/hooks";
import LoginField from "@components/LoginField";
import { Redirect } from "expo-router";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, user } = useLoginUser();

  if (user) {
    return <Redirect href="/" />;
  }

  const isDisabled =
    !email ||
    !password ||
    !/^[^@]+@[^@]+\.[^@]+$/g.test(email) ||
    password.length < 5;

  return (
    <LoginField
      mode="login"
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      disabled={isDisabled}
      onButtonClick={() => login(email, password)}
      isLoading={loading ?? false}
      error={error}
    />
  );
};

export default Login;
