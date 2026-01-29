import Incident from "../models/Incident.js";

export const getIncidents = async (req, res) => {
  res.json(await Incident.find().populate("system"));
};
