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
      <div className="max-w-6xl mx-auto py-3 rounded-lg px-2 sm:px-4 md:px-6 lg:px-8">
        <div>
          {/* Heading */}
          <div className="flex justify-center mb-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
              ENROLLMENTS
            </h1>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto p-2 sm:p-4">
            <table className="min-w-full text-left text-base">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                    #
                  </th>
                  <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                    FIRST NAME
                  </th>
                  <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                    LAST NAME
                  </th>
                  <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                    START DATE
                  </th>
                  <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                    STATUS
                  </th>
                  <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                    PROGRAM
                  </th>
                </tr>
              </thead>
              <tbody>
                {enrollments.map((elements, i) => (
                  <tr className="border-b border-gray-300" key={i}>
                    <td className="py-2 sm:py-3 text-center">{i + 1}</td>
                    <td className="py-2 sm:py-3 text-center">
                      {elements.clientId.firstName}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      {elements.clientId.lastName}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      {new Date(elements.dateEnrolled).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      {elements.status}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
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
