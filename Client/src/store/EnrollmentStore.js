import { create } from "zustand";

const useEnrollmentStore = create((set) => ({
  enrollments: [],

  enrollmentData: async () => {
    try {
      const response = await fetch("http://localhost:8000/api/enrollment", {
        credentials: "include",
      });
      //   console.log(response);

      // const json = await response.json();

      const { data } = await response.json();

      set({
        enrollments: data,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useEnrollmentStore };
