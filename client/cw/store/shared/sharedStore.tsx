import {create} from "zustand";

export const useMainStore = create((set) => ({
  PageYOffset: 0,
  setPageYOffset: (state: any) => {
    console.log(state);
    set(() => ({PageYOffset: state}));
  },
}));
