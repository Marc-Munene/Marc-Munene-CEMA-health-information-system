import { create } from "zustand";

const useProgramStore = create((set) => ({
  programs: [],

  programData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/programs`,
        {
          credentials: "include",
        }
      );
      //   console.log(response);

      // const json = await response.json();

      if (response.ok) {
        const { data } = await response.json();
        console.log(data);

        set({
          programs: data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
}));

export { useProgramStore };
