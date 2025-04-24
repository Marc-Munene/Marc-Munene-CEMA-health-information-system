import { Schema, model } from "mongoose";

const programSchema = new Schema(
  {
    programName: { type: String, required: true },
    status: { type: String, required: true, enum: ["Active", "Inactive"] },
    createdBy: { type: String, required: true },
    doctorId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Program = new model("Program", programSchema);
