import { useEffect, useState } from "react";

const EnrollmentForm = () => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [enrollDate, setEnrollDate] = useState("");

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("/api/programs");
        const data = await res.json();
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
      firstName: client.firstName,
      lastName: client.lastName,
      program: selectedProgram,
      dateOfEnrollment: enrollDate,
    };

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to enroll");
      }

      alert("Enrolled successfully");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Enrollment failed");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-base font-semibold">Enroll {client.firstName}</h2>
      <div>
        <label htmlFor="program">Program</label>
        <select
          value={selectedProgram}
          onChange={selectedprogram(e.target.value)}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select a program</option>
          {programs.map((prog) => (
            <option key={prog._id} value={prog.name}>
              {prog.name}
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
