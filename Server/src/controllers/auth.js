//Doctors signUp

import { compare, hash } from "bcrypt";
import { Doctor } from "../database/models/Doctor.js";

//signUp function
export const signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, password } = req.body;

    const harshedPassword = await hash(password, 10);

    req.body.password = harshedPassword;

    const newDoctor = await Doctor.create(req.body);

    res.status(201).json({
      success: true,
      message: "SignUp successful",
      data: newDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot sign up",
    });
  }
};

//login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    const passwordMatch = await compare(password, doctor.password);
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: doctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot login",
    });
  }
};
