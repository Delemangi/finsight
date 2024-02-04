import { User } from "firebase/auth";
import { create } from "zustand";

type UserStore = {
  user: User | null;
  setUser: (name: User | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));
