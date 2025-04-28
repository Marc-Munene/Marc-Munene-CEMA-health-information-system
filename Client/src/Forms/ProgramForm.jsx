import { useState } from "react";
import { toast } from "sonner";
import useAuthStore from "../store/AuthStore";
import { useProgramStore } from "../store/ProgramStore";

const ProgramForm = ({ closeModal }) => {
  const [programName, setProgrameName] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const { doctor } = useAuthStore();
  const { programData } = useProgramStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        programName,
        status,
        description,
        startDate,
        doctorId: doctor._id,
      };

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/programs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register client");
      }

      toast.success("Program registered successfully");

      programData();
      closeModal();
    } catch (error) {
      // console.log(error);
      toast.error("Programmed Registration Failed!");
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold">Program Name:</label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          value={programName}
          onChange={(e) => setProgrameName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Description:</label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <select
          className="border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold">Start Date:</label>
        <input
          className="w-full border rounded-md p-2"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      {/* <div>
        <label className="block font-semibold">Created By:</label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
        />
      </div> */}

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export { ProgramForm };
