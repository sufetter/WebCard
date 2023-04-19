import {create} from "zustand";
import Sidebar from "../../components/sidebar";

export const useMainStore = create((set) => ({
  PageYOffset: 0,
  setPageYOffset: (PageYOffset: any) => {
    set(() => ({PageYOffset: PageYOffset}));
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
