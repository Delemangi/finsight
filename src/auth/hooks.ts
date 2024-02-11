import { queryClient } from "@api/queryClient";
import { firebaseApp } from "@auth/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePostStore } from "@stores/postStore";
import { useUserStore } from "@stores/userStore";
import {
  createUserWithEmailAndPassword,
  getReactNativePersistence,
  inMemoryPersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useCallback, useState } from "react";

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence
    ? getReactNativePersistence(AsyncStorage)
    : inMemoryPersistence,
});

export const useLoginUser = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const login = useCallback(
    (email: string, password: string) => {
      setLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    [auth],
  );

  return { login, user, loading, error };
};

export const useRegisterUser = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const register = useCallback(
    (email: string, password: string) => {
      setLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    [auth],
  );

  return { register, user, loading, error };
};

export const useLogoutUser = () => {
  const { setUser } = useUserStore();
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const setType = usePostStore((state) => state.setType);

  const logout = useCallback(() => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        setUser(null);
        setType(null);
        setLoading(false);
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === "posts",
        });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [auth, queryClient]);

  return { logout, loading, error };
};
