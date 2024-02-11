import { useRegisterUser } from "@auth/hooks";
import ErrorScreen from "@components/ErrorScreen";
import LoadingSpinner from "@components/LoadingSpinner";
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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
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
