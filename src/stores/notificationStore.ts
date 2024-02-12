// import { create } from 'zustand'

// type NotificationStore = {
//   states: Record<string, any>;
//   setter: (value: any) => void;
// };

// export const useNotificationStore = create<NotificationStore>((set) => ({
//   states: {},
//   setter: set
// }));

// export const useNotificationState = (key: string) => {
//   const { states, setter } = useNotificationStore();

//   return {
//     state: states[key],
//     setState: (value: boolean) => setter({ states: { ...states, [key]: value } }),
//   };
// };

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
