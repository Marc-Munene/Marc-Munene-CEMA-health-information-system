import { create } from "zustand";

const useClientStore = create((set) => ({
  clients: [],

  clientData: async () => {
    try {
      const response = await fetch("http://localhost:8000/api/clients", {
        credentials: "include",
      });

      const { data } = await response.json();

      set({
        clients: data,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useClientStore };
