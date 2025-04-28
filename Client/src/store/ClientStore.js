import { create } from "zustand";

const useClientStore = create((set) => ({
  clients: [],

  clientData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/clients`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();

        set({
          clients: data,
        });
      }
      // console.log({ data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useClientStore };
