import { create } from "zustand";

interface UserMenuStore {
  isOpen: boolean;
  toggle: () => void;
}

const useUserMenu = create<UserMenuStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useUserMenu;