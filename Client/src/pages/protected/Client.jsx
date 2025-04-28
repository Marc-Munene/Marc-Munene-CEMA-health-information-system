import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useClientStore } from "../../store/ClientStore";
import { Modal } from "../../components/Modal";
import { EnrollmentForm } from "../../Forms/EnrollmentForm";
import { ClientRegistrationForm } from "../../Forms/ClientRegistrationForm";
import debounce from "debounce";
import { Link } from "react-router-dom";

const Client = () => {
  const { clientData, clients } = useClientStore();
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState(clients);

  useEffect(() => {
    clientData();
  }, []);

  useEffect(() => {
    setFilteredClients(clients);
  }, [clients]);

  const debouncedSearch = debounce((term) => {
    const filteredClients = clients.filter(
      (client) =>
        client.firstName.toLowerCase().includes(term.toLowerCase()) ||
        client.lastName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredClients(filteredClients);
  }, 500);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleEnrollClick = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Search input and register button */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="w-full flex justify-center">
            <input
              type="text"
              className="border rounded-full shadow-md sm:shadow-xl py-2 px-6 w-72 sm:w-100 placeholder:text-gray-700 text-sm sm:text-base"
              placeholder="Search Client"
              autoFocus
              value={SearchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              className="border-transparent py-2 px-4 shadow-md sm:shadow-xl rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] text-sm sm:text-base whitespace-nowrap"
              onClick={handleRegisterClick}
            >
              REGISTER NEW CLIENT
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
            Registered Clients
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
                  FIRST NAME
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  LAST NAME
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  PHONE NO.
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  DOB
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  GENDER
                </th>
                <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, i) => (
                <tr className="border-b border-gray-300" key={i}>
                  <td className="py-2 sm:py-3 text-center">{i + 1}</td>
                  <td className="py-2 sm:py-3 text-center">
                    {client.firstName}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {client.lastName}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {client.phoneNumber}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {new Date(client.DOB).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-2 sm:py-3 text-center">{client.gender}</td>
                  <td className="py-2 sm:py-3 text-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      <button
                        onClick={() => handleEnrollClick(client)}
                        className="bg-green-300 hover:bg-green-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm"
                      >
                        ENROLL
                      </button>
                      <Link
                        to={`/clients/${client._id}`}
                        className="bg-blue-300 hover:bg-blue-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm"
                      >
                        PROFILE
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for enrollment form */}
      <Modal
        openModal={showModal}
        closeModal={() => setShowModal(false)}
        title={`Enroll ${selectedClient?.firstName} ${selectedClient?.lastName}`}
      >
        <EnrollmentForm
          client={selectedClient}
          onClose={() => setShowModal(false)}
        />
      </Modal>

      {/* Modal for Registering a New Client */}
      <Modal
        openModal={showRegisterModal}
        closeModal={() => setShowRegisterModal(false)}
        title="Register New Client"
      >
        <ClientRegistrationForm onClose={() => setShowRegisterModal(false)} />
      </Modal>
    </>
  );
};

export { Client };
