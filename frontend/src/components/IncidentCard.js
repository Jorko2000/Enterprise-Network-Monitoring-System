import React from "react";

/**
 * IncidentCard
 * Displays a single incident with status, severity, and timestamps
 */
export default function IncidentCard({ incident }) {
  if (!incident) return null;

  const {
    title,
    description,
    severity,
    status,
    createdAt,
    updatedAt
  } = incident;

  const severityColor = {
    LOW: "#2ecc71",
    MEDIUM: "#f1c40f",
    HIGH: "#e67e22",
    CRITICAL: "#e74c3c"
  }[severity] || "#95a5a6";

  const statusColor = {
    OPEN: "#e74c3c",
    INVESTIGATING: "#f39c12",
    RESOLVED: "#2ecc71"
  }[status] || "#7f8c8d";

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{title}</h3>
        <span style={{ ...styles.status, backgroundColor: statusColor }}>
          {status}
        </span>
      </div>

      <p style={styles.description}>{description}</p>

      <div style={styles.meta}>
        <span style={{ ...styles.badge, backgroundColor: severityColor }}>
          Severity: {severity}
        </span>
        <span style={styles.time}>
          Created: {new Date(createdAt).toLocaleString()}
        </span>
        <span style={styles.time}>
          Updated: {new Date(updatedAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    borderLeft: "6px solid #3498db"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "600",
    color: "#2c3e50"
  },
  status: {
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
  },
  description: {
    margin: "12px 0",
    color: "#555",
    lineHeight: "1.5"
  },
  meta: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    fontSize: "12px",
    color: "#777"
  },
  badge: {
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "12px",
    fontWeight: "600"
  },
  time: {
    background: "#f4f6f8",
    padding: "4px 8px",
    borderRadius: "6px"
  }
};
