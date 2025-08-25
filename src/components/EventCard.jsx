import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl p-6 min-h-[200px] flex flex-col justify-between shadow-md hover:shadow-lg transition-transform duration-300 font-sans">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-emerald-800">Title: {event.name}</h2>
        <p className="text-sm text-gray-500">Start: {event.sdate}</p>
      </div>
      <button className="mt-4 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors">Show Details</button>
    </div>
  );
}
