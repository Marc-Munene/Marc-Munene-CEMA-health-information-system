import jwt from "jsonwebtoken";

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

    // if the username exists, we now try and match the passwords
    const passwordMatch = await compare(password, doctor.password);
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    // the password is correct, now we generate  JWT token for the user
    const { _id } = doctor;
    const jwtinfo = {
      _id,
    };

    // sign the jwt using the secret key
    const token = jwt.sign(jwtinfo, process.env.JWT_SECRET, {
      expiresIn: 24 * 60 * 60,
    });

    // add the token in the cookie
    res.cookie(process.env.AUTH_COOKIE_NAME, token, {
      maxAge: 24 * 60 * 60 * 1000,
      //   can only be accessed by server requests

      httpOnly: true,
      // path = where the cookie is valid
      path: "/",
      // domain = what domain the cookie is valid on
      domain:
        process.env.NODE_ENV === "production"
          ? "marc-munene-cema-health-information-1zov.onrender.com"
          : undefined,
      // secure = only send cookie over https
      secure: process.env.NODE_ENV === "production",
      // sameSite = only send cookie if the request is coming from the same origin
      sameSite: "none", // "strict" | "lax" | "none" (secure must be true)
      // maxAge = how long the cookie is valid for in milliseconds
    });

    console.log("cookie set:", process.env.AUTH_COOKIE_NAME, token);

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

export const currentDoctor = (req, res) => {
  res.json({
    success: true,
    data: req.doctor,
  });
};

export const logOut = (req, res) => {
  res.clearCookie(process.env.AUTH_COOKIE_NAME).json({
    success: true,
  });
};
