import { Schema, model } from "mongoose";

const programSchema = new Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
    programName: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const Program = new model("Program", programSchema);
