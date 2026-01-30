import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import systemRoutes from "./routes/system.routes.js";
import incidentRoutes from "./routes/incident.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/systems", systemRoutes);
app.use("/api/incidents", incidentRoutes);

export default app;
