import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useClientStore } from "../../store/ClientStore";
import { Modal } from "../../components/Modal";
import { EnrollmentForm } from "../../Forms/EnrollmentForm";
import { ClientRegistrationForm } from "../../Forms/ClientRegistrationForm";
import debounce from "debounce";

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
    // Whenever clients are updated, set filteredClients immediately
    setFilteredClients(clients);
  }, [clients]);

  // Debounced search function (using 'debounce' package) -
  const debouncedSearch = debounce((term) => {
    const filteredClients = clients.filter(
      (client) =>
        client.firstName.toLowerCase().includes(term.toLowerCase()) ||
        client.lastName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredClients(filteredClients);
  }, 500); //Delay of 500ms

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
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-4 sm:px-6 lg:px-8">
        {/* Search input and register button */}
        <div className="flex justify-center">
          <input
            type="text"
            className="border rounded-full shadow-xl mb-5 py-3 px-6 w-[40%] placeholder:text-gray-700"
            placeholder="Search Client"
            autoFocus
            value={SearchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <button
            className="ml-3 border-transparent py-2 px-3 shadow-xl rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]"
            onClick={handleRegisterClick}
          >
            REGISTER NEW CLIENT
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <h1 className="text-2xl font-semibold">Registered Clients</h1>
        </div>

        <div className="p-4">
          <table className="w-full text-left text-base overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-center">#</th>{" "}
                {/* Add column for numbering */}
                <th className="p-3 text-center">FIRST NAME</th>
                <th className="p-3 text-center">LAST NAME</th>
                <th className="p-3 text-center">PHONE NO.</th>
                <th className="p-3 text-center">DOB</th>
                <th className="p-3 text-center">GENDER</th>
                <th className="p-3 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, i) => (
                <tr className="border-b border-gray-300" key={i}>
                  <td className="py-3 text-center">{i + 1}</td>{" "}
                  {/* Display ascending number */}
                  <td className="py-3 text-center">{client.firstName}</td>
                  <td className="py-3 text-center">{client.lastName}</td>
                  <td className="py-3 text-center">{client.phoneNumber}</td>
                  <td className="py-3 text-center">
                    {new Date(client.DOB).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-3 text-center">{client.gender}</td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleEnrollClick(client)}
                        className="bg-green-300 hover:bg-green-500 text-black py-1 px-3 rounded-md shadow-md cursor-pointer"
                      >
                        ENROLL
                      </button>
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
