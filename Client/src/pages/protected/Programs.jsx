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
    setShowModal(true); // Open the modal when the button is clicked
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <button
              className="ml-3 border-transparent py-2 px-3 shadow-xl rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]"
              onClick={handleCreateProgram}
            >
              CREATE NEW PROGRAM
            </button>
          </div>
          <div className="flex justify-center mb-2">
            <h1 className="text-2xl font-semibold"> Programs Available</h1>
          </div>
          <div className="p-4">
            <table className="w-full text-left text-base overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-sm md:text-xl text-center">#</th>{" "}
                  {/* Add column for numbering */}
                  <th className="p-3 text-sm md:text-xl text-center">
                    PROGRAM NAME
                  </th>
                  <th className="p-3 text-sm md:text-xl text-center">STATUS</th>
                  <th className="p-3 text-sm md:text-xl text-center">
                    START DATE
                  </th>
                  <th className="p-3 text-sm md:text-xl text-center">
                    CREATED BY
                  </th>
                  <th className="p-3 text-sm md:text-xl text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((elements, i) => (
                  <tr className="border-b border-gray-300" key={i}>
                    <td className="py-3 text-center">{i + 1}</td>{" "}
                    <td className="py-3 text-center">{elements.programName}</td>
                    <td className="py-3 text-center">{elements.status}</td>
                    <td className="py-3 text-center">
                      {new Date(elements.startDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="py-3 text-center">
                      DR. {elements.doctor.firstName}
                    </td>
                    <td className="py-3 text-center">
                      <div className="flex justify-center">
                        <button className="border-transparent py-1 px-3 shadow-xl rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]">
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
