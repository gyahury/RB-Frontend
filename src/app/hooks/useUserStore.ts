import { create } from "zustand";
import axiosInterceptors from "../utils/axiosInterceptors";

interface User {
  email: string;
  name: string;
  role: string;
}

interface UserStore {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  fetchUser: () => Promise<User>;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  fetchUser: async () => {
    try {
      const response = await axiosInterceptors.get(`/api/users/profile`);
      set({ user: response.data.data });
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch user: ", error);
      throw error;
    }
  },
}));

export default useUserStore;
