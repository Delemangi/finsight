import { useLogoutUser } from "@auth/hooks";
import LoadingSpinner from "@components/LoadingSpinner";
import { useUserStore } from "@stores/userStore";
import { Redirect } from "expo-router";
import { useEffect } from "react";

const Logout = () => {
  const { logout } = useLogoutUser();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    logout();
  }, []);

  if (!user) {
    return <Redirect href="/auth/login" />;
  }

  return <LoadingSpinner size="large" />;
};

export default Logout;
