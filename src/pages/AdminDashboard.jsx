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
    <div className="max-w-6xl mx-auto py-8 px-4 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-emerald-700 text-center">Admin Dashboard</h1>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events found</p>
      )}
    </div>
  );
}
