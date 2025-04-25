import { Navbar } from "../../components/Navbar";

const Client = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-center">
            <input
              type="text"
              className="border rounded-full shadow-xl mb-5 py-3 px-6 w-[40%] placeholder:text-gray-700"
              placeholder="Search Client"
              autoFocus
            />
          </div>
          <div>
            <button className="ml-3 border-transparent py-2 px-3 shadow-xl rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]">
              REGISTER NEW CLIENT
            </button>
          </div>
          <div className="flex justify-center mb-2">
            <h1 className="text-2xl font-semibold"> Resgistered clients</h1>
          </div>
          <div className="p-4">
            <table className="w-full text-left text-base overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-sm md:text-xl text-center">
                    FIRST NAME
                  </th>
                  <th className="p-3 text-sm md:text-xl text-center">
                    LAST NAME
                  </th>

                  <th className="p-3 text-sm md:text-xl text-center">
                    PHONE NO.
                  </th>
                  <th className="p-3 text-sm md:text-xl text-center">DOB</th>
                  <th className="p-3 text-sm md:text-xl text-center">GENDER</th>
                  <th className="p-3 text-sm md:text-xl text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* hardcoded body */}
                <tr className="border-b border-gray-300">
                  <td className="py-3 text-center">CAROLYNE</td>
                  <td className="py-3 text-center">NGUGI</td>
                  <td className="py-3 text-center">0745851127</td>
                  <td className="py-3 text-center">2001-01-1-21</td>
                  <td className="py-3 text-center">FEMALE</td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <button className="border-transparent py-1 px-3 shadow-xl rounded-md cursor-pointer bg-green-300 hover:bg-green-500 hover:font-bold text-black transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] ">
                        ENROLL
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export { Client };
