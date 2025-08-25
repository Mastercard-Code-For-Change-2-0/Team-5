import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterEvent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    field: "",
    dob: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!/^\d{10}$/.test(form.phone.trim())) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    setError("");
    setSuccess(true);
  }

  function closePopup() {
    setSuccess(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      college: "",
      year: "",
      field: "",
      dob: "",
      address: "",
    });

    // After closing first popup → show second popup
    setShowPopup2(true);
  }

  function closeSecondPopup() {
    setShowPopup2(false);
  }

  function openApplicationForm() {
    // 👇 you can replace this with navigation to your NGO application form route
    window.open("/application-form", "_blank");
  }

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-700 ${
        success ? "bg-green-50" : "bg-pink-50"
      }`}
    >
      {/* Glow Effect */}
      <div
        className={`absolute w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
          success
            ? "bg-gradient-to-r from-pink-300/40 to-teal-300/40"
            : "bg-gradient-to-r from-pink-400/40 to-teal-400/40"
        }`}
      />

      {/* Card */}
      <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Register for Event
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="on">
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
            { id: "email", label: "Email", type: "email", placeholder: "youremail@gmail.com" },
            { id: "phone", label: "Phone", type: "tel", placeholder: "Enter your phone number" },
            { id: "college", label: "College", type: "text", placeholder: "Enter your college" },
            { id: "year", label: "Year", type: "text", placeholder: "Enter your year" },
            { id: "field", label: "Field of Study", type: "text", placeholder: "Enter your field of study" },
            { id: "dob", label: "Date of Birth", type: "date", placeholder: "" },
            { id: "address", label: "Address", type: "text", placeholder: "Enter your full address" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block font-semibold text-gray-700 mb-1">
                {label} <span className="text-pink-500">*</span>
              </label>
              <input
                id={id}
                name={id}
                type={type}
                required
                placeholder={placeholder}
                value={form[id]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition"
              />
            </div>
          ))}

          {error && (
            <p className="text-pink-600 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gray-900 text-white font-semibold text-lg shadow-md hover:bg-pink-500 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Success Popup (first) */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white border-2 border-teal-400 rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full">
              <h3 className="text-xl font-bold text-teal-500">
                🎉 Registration Successful!
              </h3>
              <p className="text-gray-600 mt-2">Thank you for registering.</p>
              <button
                onClick={closePopup}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-teal-400 text-white rounded-lg font-semibold shadow hover:opacity-90 transition"
              >
                OK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Second Popup (thanks + NGO form) */}
      {showPopup2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="popup2 bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
            <p className="text-lg font-semibold text-gray-800">
              🙏 Thanks for registration!
            </p>
            <p className="text-gray-600 mt-3">
              If you are willing to join our NGO, fill out the application form.
            </p>

            <div className="mt-6 space-x-4">
              <button
                onClick={openApplicationForm}
                className="px-5 py-2 bg-gradient-to-r from-pink-500 to-teal-400 text-white rounded-lg shadow font-semibold hover:opacity-90 transition"
              >
                Application Form
              </button>
              <button
                onClick={closeSecondPopup}
                className="px-5 py-2 bg-gray-200 rounded-lg shadow font-semibold text-gray-700 hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
