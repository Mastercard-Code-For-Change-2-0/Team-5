import { useState } from "react";
import { Save } from "lucide-react";

function AddEvent({ onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Event name is required!");
      return;
    }
    if (onSave) {
      onSave(formData);
    }
    setFormData({ name: "", descriptionXX: "", startDate: "", endDate: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">➕ Add New Event</h1>
        <p className="text-gray-500 mb-6">
          Fill in the details below to create a new event.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Event Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              required
            />
          </div>

          {/*Start Date */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>

          {/*End Date */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">End Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>


          {/* Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              rows={4}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
            >
              <Save className="w-5 h-5" /> Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
