import { create } from 'zustand';

type NotificationStore = {
  states: Record<string, boolean>;
  setStates: (states: Record<string, boolean>) => void;
};

export const useNotificationStore = create<NotificationStore>((set) => ({
  states: {},
  setStates: (newStates) => set({ states: { ...newStates } }),
}));

export const useNotificationState = (key: string) => {
  const { states, setStates } = useNotificationStore();

  return {
    state: states[key] || false,
    setState: (value: boolean) => setStates({ ...states, [key]: value }),
  };
};
