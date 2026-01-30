import "./config/env.js";
import { connectDB } from "./config/db.js";
import app from "./app.js";
import { monitorSystems } from "./services/monitoring.service.js";
import { Server } from "socket.io";
import http from "http";

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

setInterval(async () => {
  await monitorSystems();
}, 10000);

io.on("connection", socket => {
  console.log("Client connected: " + socket.id);
  socket.on("disconnect", () => console.log("Client disconnected: " + socket.id));
});

server.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);

export { io };
