import React from "react";
import "../AdminDashboard.css"; // reuse same CSS

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div>
        <h2 className="event-title">Title: {event.name}</h2>
        <p className="event-date">Start: {event.sdate}</p>
      </div>
      <button className="details-btn">Show Details</button>
    </div>
  );
}
