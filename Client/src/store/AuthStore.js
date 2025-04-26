import { create } from "zustand";

const useAuthStore = create((set) => ({
  doctor: null,
  isLoggedIn: false,
  login: async (formData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const { data } = await response.json();
        set({ doctor: data, isLoggedIn: true });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  logout: () => {
    set({ doctor: null, isLoggedIn: false });
  },
}));

export default useAuthStore;
