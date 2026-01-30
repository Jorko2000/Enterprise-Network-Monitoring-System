import { Router } from "express";
import { getIncidents } from "../controllers/incident.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", auth, getIncidents);
export default router;
