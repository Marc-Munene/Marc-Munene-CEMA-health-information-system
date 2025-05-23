import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    DOB: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female"] },
    phoneNumber: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
  },

  {
    timestamps: true,
  }
);

export const Client = new model("Client", clientSchema);
