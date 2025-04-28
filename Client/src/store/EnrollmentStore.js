import { create } from "zustand";

const useEnrollmentStore = create((set) => ({
  enrollments: [],

  enrollmentData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/enrollment`,
        {
          credentials: "include",
        }
      );
      //   console.log(response);

      // const json = await response.json();

      if (response.ok) {
        const { data } = await response.json();

        set({
          enrollments: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useEnrollmentStore };
