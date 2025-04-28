import { useState } from "react";
import { toast } from "sonner";
import { useClientStore } from "../store/ClientStore";

const ClientRegistrationForm = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const { clientData } = useClientStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        firstName,
        lastName,
        phoneNumber: phone,
        DOB: dateOfBirth,
        gender,
        email: email || undefined,
      };

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/clients`,
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

      toast.success("Client registered successfully");
      if (onClose) onClose();

      clientData();
    } catch (error) {
      // console.error(error);
      toast.error("Registration failed");
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold">First Name:</label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Last Name:</label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Phone NO:</label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Email:</label>
        <input
          className="w-full border rounded-md p-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold">DOB:</label>
        <input
          className="w-full border rounded-md p-2"
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </div>
      <div>
        <select
          className="border p-2 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
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

export { ClientRegistrationForm };
