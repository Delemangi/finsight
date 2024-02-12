import { create } from "zustand";

type LocationStore = {
    latitude: number | null,
    longitude: number | null,
    setLatitude: (latitude: number) => void;
    setLongitude: (longitude: number) => void;
  };
  
export const useLocationStore = create<LocationStore>((set) => ({
    latitude: null,
    longitude: null,
    setLatitude: (latitude: number) => set({ latitude }),
    setLongitude: (longitude: number) => set({ longitude })
  }));
  