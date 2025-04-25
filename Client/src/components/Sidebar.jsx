import { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { RiMiniProgramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        ☰
      </button>
      {/* Navigation Sidebar - Hidden on mobile unless toggled */}
      <nav
        className={`aside bg-white fixed md:static inset-y-0 left-0 z-40 w-64 md:w-1/5 transform ${
          showMobileMenu
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out shadow-lg md:shadow-none`}
      >
        {/* logo link */}
        <NavLink to={"/"} className="p-4" onClick={closeMobileMenu}>
          <img
            src="/white-logo.png"
            alt="Classify Logo"
            className="w-3/4 mx-auto md:w-full animate-pulse"
          />
        </NavLink>

        {/* clients link */}
        <NavLink
          to={"/"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">Classes</span>
          <IoIosPeople size={30} />
        </NavLink>

        {/* Programs link */}
        <NavLink
          to={"/programs"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">Bookings</span>
          <RiMiniProgramFill  size={30} />
        </NavLink>

        {/* Enrollment link */}
        <NavLink
          to={"/booked"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">Booked</span>
          <FaBookOpenReader  size={30} />
        </NavLink>


        {/* logout */}
        <NavLink
          className="flex items-center justify-around py-3 mt-5 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06]  text-red-500"
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl ">Logout</span>
          <CgLogOut size={30} />
        </NavLink>
      </nav>
    </>
  );
};

export { Sidebar };
