import { useState } from "react";

import useAuthStore from "../../store/AuthStore";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuthStore((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting ....");

    const formData = {
      email,
      password,
    };

    const loginSuccess = await login(formData);

    if (loginSuccess) {
      toast.success("Login Successful");
      navigate("/programs");
    } else {
      toast.error("Invalid credentials.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-base ">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="p-2 border rounded-md focus:border-blue-800 outline-none"
            placeholder="Enter username"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-2 border rounded-md focus:border-blue-800 outline-none"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-2 text-base rounded-md"
        >
          Log in
        </button>
      </form>
    </>
  );
};

export { Login };
