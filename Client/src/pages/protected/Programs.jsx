import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useProgramStore } from "../../store/ProgramStore";
import { ProgramForm } from "../../Forms/ProgramForm";
import { Modal } from "../../components/Modal";

const Programs = ({ closeModal }) => {
  const { programData, programs } = useProgramStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    programData();
  }, []);

  const handleCreateProgram = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-center md:justify-start mb-4">
          <button
            className="border-transparent py-2 px-4 shadow-md rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] text-sm sm:text-base whitespace-nowrap"
            onClick={handleCreateProgram}
          >
            CREATE NEW PROGRAM
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
            Programs Available
          </h1>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  #
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  PROGRAM NAME
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  STATUS
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  START DATE
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  CREATED BY
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {programs.map((elements, i) => (
                <tr className="border-b border-gray-300" key={i}>
                  <td className="py-2 sm:py-3 text-center">{i + 1}</td>
                  <td className="py-2 sm:py-3 text-center">
                    {elements.programName}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {elements.status}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {new Date(elements.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    DR. {elements.doctor.firstName}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    <div className="flex justify-center">
                      <button className="border-transparent py-1 px-3 shadow-md rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] text-xs sm:text-sm">
                        OPEN
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        openModal={showModal}
        closeModal={() => setShowModal(false)}
        title="Create New Program"
      >
        <ProgramForm closeModal={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export { Programs };
