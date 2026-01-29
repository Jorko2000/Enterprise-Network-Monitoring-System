import System from "../models/System.js";

export const getSystems = async (req, res) => {
  res.json(await System.find());
};
