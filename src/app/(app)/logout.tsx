import { useLogoutUser } from "@auth/hooks";
import { Redirect } from "expo-router";

const Logout = () => {
  const { logout } = useLogoutUser();

  logout();

  return <Redirect href="/" />;
};

export default Logout;
