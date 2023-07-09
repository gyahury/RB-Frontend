import { create } from "zustand";

interface User {
  email: string;
  name: string;
  role: string;
  // 불러올 정보 이후 추가
}

interface UserStore {
    user: User | null;
    setUser: (user: User | null) => void;
  }

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));

export default useUserStore;