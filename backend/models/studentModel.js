import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
    },
    photo: String,
    attendance: [{
      present: Boolean,
      date: {
        type: Date,
        default:Date.now,
      },
    }],
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
