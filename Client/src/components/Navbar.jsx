import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { RiMiniProgramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50  py-2 md:py-4 mx-auto max-w-6xl ">
        <nav className="py-4 flex flex-row items-center shadow-lg justify-between mx-10 sm:mx-6 lg:mx-8 rounded-4xl backdrop-blur-3xl">
          {/*Navigation Links  */}
          <div className=" md:flex flex-grow justify-center">
            <ul className="flex space-x-4 lg:space-x-8 text-sm sm:text-base md:text-xl lg:text-2xl">
              <li>
                <NavLink
                  to={"/"}
                  className="flex items-center justify-around py-3 hover:backdrop-blur-lg hover:rounded-4xl  hover:shadow-2xl hover:bg-gray-100 hover:px-3  transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
                >
                  <span className="flex items-center gap-2">
                    <MdHome size={30} />
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/programs"}
                  className="flex items-center justify-around py-3 hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-gray-100 hover:px-3  transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
                >
                  <span className="flex items-center gap-2">
                    <RiMiniProgramFill size={30} /> Programs
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/clients"}
                  className="flex items-center justify-around py-3 hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-gray-100 hover:px-3  transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
                >
                  <span className="flex items-center gap-2">
                    <IoIosPeople size={30} />
                    Clients
                  </span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/enrollment"}
                  className="flex items-center justify-around py-3 hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-gray-100 hover:px-3  transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
                >
                  <span className="flex items-center gap-2">
                    <FaBookOpenReader size={30} />
                    Enrollments
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
