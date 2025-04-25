import { Navbar } from "../../components/Navbar";

const Enrollment = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-center mb-2">
            <h1 className="text-2xl font-semibold"> ENROLLMENTS</h1>
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
                    START DATE
                  </th>
                  <th className="p-3 text-sm md:text-xl text-center">STATUS</th>
                  <th className="p-3 text-sm md:text-xl text-center">
                    PROGRAM
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* hardcoded body */}
                <tr className="border-b border-gray-300">
                  <td className="py-3 text-center">CAROLYNE</td>
                  <td className="py-3 text-center">NGUGI</td>
                  <td className="py-3 text-center">4-25-2025</td>
                  <td className="py-3 text-center">ACTIVE</td>
                  <td className="py-3 text-center">HIV</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export { Enrollment };
