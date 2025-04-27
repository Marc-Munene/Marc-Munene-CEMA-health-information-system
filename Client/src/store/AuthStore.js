import { create } from "zustand";

const useAuthStore = create((set) => ({
  doctor: null,
  isLoggedIn: false,
  setDoctor: (doctor) => {
    set({ doctor, isLoggedIn: true });
  },
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
        console.log(data);

        set({ doctor: data, isLoggedIn: true });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  logout: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    // Tod0 handle errors
    if (response.ok) {
    }
    set({ doctor: null, isLoggedIn: false });
  },
}));

export default useAuthStore;
