import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useEnrollmentStore } from "../../store/EnrollmentStore";

const Enrollment = () => {
  const { enrollmentData, enrollments } = useEnrollmentStore();

  useEffect(() => {
    enrollmentData();
  }, []);
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
                {enrollments.map((elements, i) => (
                  <tr className="border-b border-gray-300" key={i}>
                    <td className="py-3 text-center">
                      {elements.clientId.firstName}{" "}
                    </td>
                    <td className="py-3 text-center">
                      {elements.clientId.lastName}{" "}
                    </td>
                    <td className="py-3 text-center">
                      {elements.dateEnrolled}
                    </td>
                    <td className="py-3 text-center">{elements.status}</td>
                    <td className="py-3 text-center">
                      {elements.programId.programName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export { Enrollment };
