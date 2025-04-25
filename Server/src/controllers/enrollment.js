import { Enrollment } from "../database/models/Enrollment.js";

//Ennrolling a client
export const addEnrollement = async (req, res) => {
  try {
    const { clientId, programId, status, dateEnrolled } = req.body;

    // Check if the client and program exist in the database
    const enrollmentData = {
      clientId,
      programId,
      dateEnrolled,
    };

    const newEnrollment = await Enrollment.create(enrollmentData);

    res.status(201).json({
      success: true,
      message: "Client enrolled successfully",
      data: newEnrollment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot enroll client",
    });
  }
};

//Getting all enrollments

export const getEnrollment = async (req, res) => {
  try {
    const enrolledClient = await Enrollment.find().populate("clientId programId");

    res.status(200).json({
      success: true,
      message: "Enrollment fetched successfully",
      data: enrolledClient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot get enrollment",
    });
  }
};
