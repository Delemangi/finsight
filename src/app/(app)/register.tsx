import LoginField from "@components/LoginField";
import ErrorComponent from "@components/Error";
import LoadingSpinner from "@components/LoadingSpinner";
import { useRegisterUser } from "@hooks/auth";
import { Redirect } from "expo-router";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error, user } = useRegisterUser();

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
      mode="register"
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      disabled={!email || !password}
      onButtonClick={() => register(email, password)}
    />
  );
};

export default Register;
