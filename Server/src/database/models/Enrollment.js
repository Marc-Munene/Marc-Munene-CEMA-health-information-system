import { Schema, model } from "mongoose";

const enrollmentSchema = new Schema(
  {
    clientId: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    programId: { type: Schema.Types.ObjectId, ref: "Program", required: true },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    dateEnrolled: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const Enrollment = new model("Enrollment", enrollmentSchema);
