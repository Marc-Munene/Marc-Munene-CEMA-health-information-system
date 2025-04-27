import jwt from "jsonwebtoken";

import { Doctor } from "../database/models/Doctor.js";

export const doctorAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME];

    // console.log("req.cookies", req.cookies);

    // console.log("token", token);

    if (!token) throw new Error("token not found!");

    // beyond this point means the token has been set in the cookie

    // step one: verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = payload;

    const doctor = await Doctor.findById(_id);

    if (!doctor) throw new Error("Invalid token");

    req.doctor = doctor;

    next();
  } catch (error) {
    console.log(error);

    res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }
};
