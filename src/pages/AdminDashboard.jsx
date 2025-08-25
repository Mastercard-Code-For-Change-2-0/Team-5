import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import "../AdminDashboard.css";

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      { id: 1, name: "Event One", sdate: "2024-07-01" },
      { id: 2, name: "Event Two", sdate: "2024-08-15" },
      { id: 3, name: "Event Three", sdate: "2024-09-10" },
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      {events.length > 0 ? (
        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="no-events">No events found</p>
      )}
    </div>
  );
}
