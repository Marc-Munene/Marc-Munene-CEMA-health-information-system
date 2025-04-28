import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { RiMiniProgramFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

const Navbar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 w-full py-2 md:py-4">
        <nav className="py-2 md:py-4 flex flex-row items-center shadow-lg justify-between mx-4 sm:mx-6 lg:mx-8 xl:mx-auto max-w-6xl rounded-4xl backdrop-blur-3xl px-2 sm:px-4">
          {/* Navigation Links */}
          <div className="flex-grow flex justify-center">
            <ul className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 xl:space-x-8">
              <li>
                <NavLink
                  to={"/programs"}
                  className={({ isActive }) =>
                    `flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-blue-100 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`
                  }
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <RiMiniProgramFill className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <span className="hidden sm:inline">Programs</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/clients"}
                  className={({ isActive }) =>
                    `flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-blue-100 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`
                  }
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <IoIosPeople className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <span className="hidden sm:inline">Clients</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/enrollment"}
                  className={({ isActive }) =>
                    `flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-blue-100 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`
                  }
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FaBookOpenReader className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <span className="hidden sm:inline">Enrollments</span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="flex items-center text-red-500 gap-1 sm:gap-2 mr-1 sm:mr-2 cursor-pointer hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-red-100 hover:p-1 sm:hover:p-2 md:hover:p-3 hover:text-red-500 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] text-xs sm:text-sm md:text-base lg:text-xl"
          >
            <FiLogOut className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
