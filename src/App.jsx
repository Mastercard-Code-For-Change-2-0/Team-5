import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/events";
import RegisterForm from "./pages/RegisterForm";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./components/AddEvent";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightBg = "linear-gradient(135deg, #e0ffe6 0%, #ffe0f0 100%)";
  const darkBg = "linear-gradient(135deg, #232526 0%, #414345 100%)";
  const lightText = "#2d6a4f";
  const darkText = "#fff";

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                width: "100vw",
                background: darkMode ? darkBg : lightBg,
                margin: 0,
                padding: 0,
                overflowX: "hidden",
                transition: "background 0.3s",
              }}
            >
              <button
                onClick={() => setDarkMode((d) => !d)}
                style={{
                  position: "fixed",
                  top: 74,
                  right: 36,
                  zIndex: 100,
                  background: darkMode ? "#fff" : "#232526",
                  color: darkMode ? "#232526" : "#fff",
                  border: "none",
                  borderRadius: "50%",
                  padding: "10px",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  boxShadow: "0 2px 8px #e0e0e0",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                }}
                aria-label="Toggle light/dark mode"
                title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <span role="img" aria-label="Light Mode">
                    ☀️
                  </span>
                ) : (
                  <span role="img" aria-label="Dark Mode">
                    🌙
                  </span>
                )}
              </button>
              <div
                style={{
                  maxWidth: 1400,
                  margin: "0 auto",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minHeight: "100vh",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    color: darkMode ? darkText : lightText,
                    margin: "2rem 0 1rem 0",
                    fontWeight: 700,
                    letterSpacing: 1,
                    fontSize: 40,
                    transition: "color 0.3s",
                  }}
                >
                  NGO Events
                </h1>
                <Events darkMode={darkMode} />
              </div>
            </div>
          }
        />
        <Route path="/register" element={<RegisterForm darkMode={darkMode} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/e" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
