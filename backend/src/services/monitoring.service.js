import System from "../models/System.js";
import Incident from "../models/Incident.js";
import { io } from "../server.js";

export const monitorSystems = async () => {
  const systems = await System.find();
  const updates = [];

  for (const system of systems) {
    system.responseTime = Math.floor(Math.random() * 500);
    system.status = system.responseTime > 300 ? "OFFLINE" : "ONLINE";
    system.lastChecked = new Date();
    await system.save();

    updates.push({ id: system._id, name: system.name, status: system.status, responseTime: system.responseTime });

    if (system.status === "OFFLINE") {
      await Incident.create({
        title: `${system.name} is down`,
        system: system._id,
        severity: "HIGH"
      });
    }
  }

  io.emit("system-updates", updates);
  return updates;
};
