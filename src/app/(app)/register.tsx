import { useRegisterUser } from "@auth/hooks";
import LoginField from "@components/LoginField";
import { Redirect } from "expo-router";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error, user } = useRegisterUser();

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
      mode="register"
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      disabled={isDisabled}
      onButtonClick={() => register(email, password)}
      isLoading={loading ?? false}
      error={error}
    />
  );
};

export default Register;
