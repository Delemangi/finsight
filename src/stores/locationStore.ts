import { create } from "zustand";

type LocationStore = {
    latitude: number,
    longitude: number,
    setLatitude: (latitude: number) => void;
    setLongitude: (longitude: number) => void;
  };
  
export const useLocationStore = create<LocationStore>((set) => ({
    latitude: 0,
    longitude: 0,
    setLatitude: (latitude: number) => set({ latitude }),
    setLongitude: (longitude: number) => set({ longitude })
  }));
  