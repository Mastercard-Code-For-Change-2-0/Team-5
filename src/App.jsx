import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./components/AddEvent";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage/>
          }
        />
        <Route path="/register" element={<RegisterForm darkMode={darkMode} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
