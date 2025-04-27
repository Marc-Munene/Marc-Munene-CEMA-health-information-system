import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useEnrollmentStore } from "../store/EnrollmentStore";

const EnrollmentForm = ({ client, onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [enrollDate, setEnrollDate] = useState("");
  const { enrollmentData } = useEnrollmentStore();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/programs`,
          {
            credentials: "include",
          }
        );

        const json = await res.json();
        console.log(json);
        const { data } = json;
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs", error);
      }
    };

    fetchPrograms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      clientId: client._id,
      programId: selectedProgram,
      dateEnrolled: enrollDate,
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/enrollment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to enroll");
      }

      toast.success("Enrolled successfully");
      enrollmentData();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Enrollment failed");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Program</label>
        <select
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select a program</option>
          {programs.map((prog) => (
            <option key={prog._id} value={prog._id}>
              {prog.programName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold">Date of Enrollment</label>
        <input
          type="date"
          className="w-full border rounded-md p-2"
          value={enrollDate}
          onChange={(e) => setEnrollDate(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export { EnrollmentForm };
