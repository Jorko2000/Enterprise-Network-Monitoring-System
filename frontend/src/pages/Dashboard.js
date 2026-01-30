import { useEffect, useState } from "react";
import { api } from "../api/api";
import { io } from "socket.io-client";

export default function Dashboard() {
  const [incidents, setIncidents] = useState([]);
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    api.get("/incidents", { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then(res => setIncidents(res.data));

    api.get("/systems", { headers: { Authorization: `Bearer ${localStorage.token}` } })
      .then(res => setSystems(res.data));

    const socket = io(import.meta.env.VITE_API_URL.replace("/api",""));
    socket.on("system-updates", data => setSystems(data));
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h1>Incident Dashboard</h1>
      <h2>Systems</h2>
      {systems.map(s => <div key={s.id}>{s.name}: {s.status} ({s.responseTime}ms)</div>)}
      <h2>Incidents</h2>
      {incidents.map(i => <div key={i._id}>{i.title} - {i.status}</div>)}
    </div>
  );
}
