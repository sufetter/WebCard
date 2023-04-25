import {create} from "zustand";
import Sidebar from "../../components/sidebar";

export const useMainStore = create((set) => ({
  PageYOffset: 0,
  setPageYOffset: (state: any) => {
    set(() => ({PageYOffset: state}));
  },
  SidebarOpen: false,
  setSidebarOpen: () => {
    set((state: any) => ({SidebarOpen: !state.SidebarOpen}));
  },
  NavbarOpen: false,
  setNavbarOpen: () => {
    set((state: any) => ({NavbarOpen: !state.NavbarOpen}));
  },
}));
