import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
  title: String,
  system: { type: mongoose.Schema.Types.ObjectId, ref: "System" },
  severity: String,
  status: { type: String, default: "OPEN" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Incident", IncidentSchema);
