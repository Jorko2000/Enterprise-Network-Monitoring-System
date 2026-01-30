import { Router } from "express";
import { getSystems } from "../controllers/system.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", auth, getSystems);
export default router;
