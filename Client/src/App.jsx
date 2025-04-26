import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col md:flex-row  mt-5 md:mt-0">
        <Navbar />
      </div>
    </div>
  );
};

export { App };
