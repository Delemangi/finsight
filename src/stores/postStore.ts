import { create } from "zustand";

type PostStore = {
  types: string[];
  type: string | null;
  isLoading: boolean;
  setTypes: (types: string[]) => void;
  setType: (type: string | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  types: [],
  type: null,
  isLoading: false,
  setTypes: (types: string[]) => set({ types }),
  setType: (type: string | null) => set({ type }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
