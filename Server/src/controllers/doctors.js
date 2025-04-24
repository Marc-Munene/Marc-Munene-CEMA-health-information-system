import { Doctor } from "../database/models/Doctor.js";

// getting all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({
      success: true,
      message: "Doctors fetched successfully",
      data: doctors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch doctors",
    });
  }
};

//getting a single doctor
export const getOneDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // If doctor is found, return the doctor data
    res.status(200).json({
      success: true,
      message: "Doctor fetched successfully",
      data: doctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch doctor",
    });
  }
};

//adding a doctor

 //this function is used to add a doctor to the database

//edit a doctos
export const editDoctor = async (req, res) => {
  try {
    const doctorId = req.query.id;

    const doctor = await Doctor.findOneAndUpdate({ _id: doctorId }, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Doctor edited successfully",
      data: doctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot edit doctor",
    });
  }
};

//deleting a doctor
export const deleteDoctor = async (req, res) => {
  try {
    const doctorId = req.query.id;

    const doctor = await Doctor.deleteOne({ _id: doctorId });

    if (doctor.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot delete doctor",
    });
  }
};
