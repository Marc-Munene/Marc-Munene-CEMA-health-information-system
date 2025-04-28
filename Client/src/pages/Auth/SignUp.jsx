import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { HiArrowLongLeft } from "react-icons/hi2";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Sign Up Successful");
        navigate("/");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Sign Up Failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/signup.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-50  backdrop-blur-sm rounded-xl shadow-xl py-3 px-5 w-full max-w-md"
      >
        <div className="text-center mb-3">
          <h1 className="text-3xl font-semibold text-black">Sign Up</h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter first name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter last name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter phone number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter password"
            />
          </div>

          <div className="flex items-center  mr-6 mt-3">
            <NavLink
              to={"/"}
              className="text-md flex items-center text-blue-700 cursor-pointer"
            >
              <HiArrowLongLeft />
              Login
            </NavLink>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-3 text-lg rounded-md placeholder:text-black cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export { SignUp };
