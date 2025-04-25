import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50  py-2 md:py-4 mx-auto max-w-6xl ">
        <nav className="py-2 flex flex-row items-center justify-between mx-10 sm:mx-6 lg:mx-8 rounded-4xl backdrop-blur-3xl">
          {/*Navigatioon Links  */}
          <div className=" md:flex flex-grow justify-center">
            <ul className="flex space-x-4 lg:space-x-8 text-sm sm:text-base md:text-xl lg:text-2xl">
              <li>
                <NavLink to={"/programs"}> Programs</NavLink>
              </li>
              <li>
              <NavLink to={"/clients"}> Clients</NavLink>
              </li>
              <li>
              <NavLink to={"/enrollment"}> Enrollments</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
