import mongoose from "mongoose";

const SystemSchema = new mongoose.Schema({
  name: String,
  type: String,
  status: { type: String, default: "ONLINE" },
  responseTime: Number,
  lastChecked: Date
});

export default mongoose.model("System", SystemSchema);
