/**const RegisterForm = ({ darkMode }) => {
  const bg = darkMode ? 'linear-gradient(135deg, #232526 0%, #414345 100%)' : 'linear-gradient(135deg, #e0ffe6 0%, #ffe0f0 100%)';
  const cardBg = darkMode ? '#232526' : '#fff';
  const cardBorder = darkMode ? '#444' : '#e0e0e0';
  const labelColor = darkMode ? '#fff' : '#222';
  const inputBg = darkMode ? '#333' : '#fafafa';
  const inputText = darkMode ? '#fff' : '#222';
  const inputBorder = darkMode ? '#555' : '#e0e0e0';
  const btnBg = darkMode ? '#fff' : '#222';
  const btnText = darkMode ? '#232526' : '#fff';

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      padding: 0,
      transition: 'background 0.3s',
    }}>
      <div style={{
        maxWidth: 420,
        width: '100%',
        padding: '48px 40px',
        border: `1.5px solid ${cardBorder}`,
        borderRadius: 20,
        background: cardBg,
        boxShadow: "0 6px 24px 0 rgba(0,0,0,0.08)",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        transition: 'background 0.3s, border 0.3s',
      }}>
        <h2 style={{ color: labelColor, marginBottom: 28, fontWeight: 700, letterSpacing: 1, textAlign: 'left', fontSize: 28, transition: 'color 0.3s' }}>Register for Event</h2>
        <form style={{ width: '100%' }} autoComplete="on">
          <div style={{ marginBottom: 20 } }>
            <label htmlFor="name" style={{ fontWeight: 600, color: labelColor, display: 'block', marginBottom: 6 }}>Name<span style={{color:'#e75480'}}>*</span></label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" style={{ width: '100%', padding: 14, borderRadius: 8, border: `1.5px solid ${inputBorder}`, background: inputBg, fontSize: 16, outlineColor: '#bbb', marginBottom: 2, color: inputText, transition: 'background 0.3s, color 0.3s, border 0.3s' }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="email" style={{ fontWeight: 600, color: labelColor, display: 'block', marginBottom: 6 }}>Email<span style={{color:'#e75480'}}>*</span></label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" style={{ width: '100%', padding: 14, borderRadius: 8, border: `1.5px solid ${inputBorder}`, background: inputBg, fontSize: 16, outlineColor: '#bbb', marginBottom: 2, color: inputText, transition: 'background 0.3s, color 0.3s, border 0.3s' }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="phone" style={{ fontWeight: 600, color: labelColor, display: 'block', marginBottom: 6 }}>Phone<span style={{color:'#e75480'}}>*</span></label>
            <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" style={{ width: '100%', padding: 14, borderRadius: 8, border: `1.5px solid ${inputBorder}`, background: inputBg, fontSize: 16, outlineColor: '#bbb', marginBottom: 2, color: inputText, transition: 'background 0.3s, color 0.3s, border 0.3s' }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="college" style={{ fontWeight: 600, color: labelColor, display: 'block', marginBottom: 6 }}>College<span style={{color:'#e75480'}}>*</span></label>
            <input type="text" id="college" name="college" required placeholder="Enter your college" style={{ width: '100%', padding: 14, borderRadius: 8, border: `1.5px solid ${inputBorder}`, background: inputBg, fontSize: 16, outlineColor: '#bbb', marginBottom: 2, color: inputText, transition: 'background 0.3s, color 0.3s, border 0.3s' }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="year" style={{ fontWeight: 600, color: labelColor, display: 'block', marginBottom: 6 }}>Year<span style={{color:'#e75480'}}>*</span></label>
            <input type="text" id="year" name="year" required placeholder="Enter your year" style={{ width: '100%', padding: 14, borderRadius: 8, border: `1.5px solid ${inputBorder}`, background: inputBg, fontSize: 16, outlineColor: '#bbb', marginBottom: 2, color: inputText, transition: 'background 0.3s, color 0.3s, border 0.3s' }} />
          </div>
          <div style={{ marginBottom: 32 }}>
            <label htmlFor="field" style={{ fontWeight: 600, color: labelColor, display: 'block', marginBottom: 6 }}>Field of Study<span style={{color:'#e75480'}}>*</span></label>
            <input type="text" id="field" name="field" required placeholder="Enter your field of study" style={{ width: '100%', padding: 14, borderRadius: 8, border: `1.5px solid ${inputBorder}`, background: inputBg, fontSize: 16, outlineColor: '#bbb', marginBottom: 2, color: inputText, transition: 'background 0.3s, color 0.3s, border 0.3s' }} />
          </div>
          <button type="submit" style={{ width: "100%", padding: 14, background: btnBg, color: btnText, border: "none", borderRadius: 8, fontWeight: "bold", fontSize: 18, boxShadow: '0 2px 8px #e0e0e0', letterSpacing: 1, marginTop: 8, cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;**/


import React, { useState } from "react";

const styles = {
  root: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff6fa",
    margin: 0,
    fontFamily: "'Segoe UI', 'Roboto', Arial, sans-serif",
    transition: "background 0.6s",
    position: "relative",
  },
  rootSuccess: {
    background: "#e0ffe6",
    transition: "background 0.6s",
  },
  glowBg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "520px",
    height: "520px",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
    pointerEvents: "none",
    borderRadius: "50%",
    boxShadow: "0 0 80px 16px #ff5eae55, 0 0 120px 32px #3ad6c955",
    transition: "box-shadow 0.7s",
    opacity: 0.7,
  },
  glowBgSuccess: {
    boxShadow: "0 0 80px 16px #3ad6c955, 0 0 120px 32px #ff5eae55",
    opacity: 0.8,
    transition: "box-shadow 0.7s",
  },
  card: {
    maxWidth: "420px",
    width: "100%",
    padding: "48px 40px",
    border: "1.5px solid #e0e0e0",
    borderRadius: "20px",
    background: "#fff",
    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "background 0.3s, border 0.3s",
    position: "relative",
    zIndex: 1,
  },
  h2: {
    color: "#222",
    marginBottom: "28px",
    fontWeight: 700,
    letterSpacing: "1px",
    textAlign: "left",
    fontSize: "28px",
    transition: "color 0.3s",
  },
  field: {
    marginBottom: "20px",
    width: "100%",
  },
  label: {
    fontWeight: 600,
    color: "#222",
    display: "block",
    marginBottom: "6px",
  },
  labelSpan: {
    color: "#e75480",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1.5px solid #e0e0e0",
    background: "#fafafa",
    fontSize: "16px",
    outlineColor: "#bbb",
    marginBottom: "2px",
    color: "#222",
    transition: "background 0.3s, color 0.3s, border 0.3s",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "0 2px 8px #e0e0e0",
    letterSpacing: "1px",
    marginTop: "8px",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
  buttonHover: {
    background: "#ff5eae",
    color: "#fff",
  },
  errorMsg: {
    color: "#e75480",
    fontSize: "1em",
    marginBottom: "10px",
    textAlign: "center",
    display: "block",
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1)",
    background: "#fff",
    color: "#3ad6c9",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(58,214,201,0.18)",
    padding: "36px 32px",
    fontSize: "1.3em",
    fontWeight: 600,
    textAlign: "center",
    zIndex: 9999,
    border: "2px solid #3ad6c9",
    display: "block",
    minWidth: "220px",
    animation: "popIn 0.4s",
  },
  popupHidden: {
    display: "none",
  },
  popupBtn: {
    marginTop: "18px",
    padding: "10px 24px",
    background: "linear-gradient(135deg, #ff5eae 0%, #3ad6c9 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1em",
    cursor: "pointer",
    fontWeight: 500,
    boxShadow: "0 2px 8px rgba(255,94,174,0.10)",
    transition: "background 0.3s",
  },
};

export default function RegisterEvent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    field: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
    });
  }

  return (
    <div
      style={{
        ...styles.root,
        ...(success ? styles.rootSuccess : {}),
      }}
    >
      <div
        style={{
          ...styles.glowBg,
          ...(success ? styles.glowBgSuccess : {}),
        }}
      ></div>
      <div style={styles.card}>
        <h2 style={styles.h2}>Register for Event</h2>
        <form autoComplete="on" onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div style={styles.field}>
            <label htmlFor="name" style={styles.label}>
              Name<span style={styles.labelSpan}>*</span>
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>
              Email<span style={styles.labelSpan}>*</span>
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              required
              placeholder="youremail@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="phone" style={styles.label}>
              Phone<span style={styles.labelSpan}>*</span>
            </label>
            <input
              style={styles.input}
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              maxLength={10}
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="college" style={styles.label}>
              College<span style={styles.labelSpan}>*</span>
            </label>
            <input
              style={styles.input}
              type="text"
              id="college"
              name="college"
              required
              placeholder="Enter your college"
              value={form.college}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="year" style={styles.label}>
              Year<span style={styles.labelSpan}>*</span>
            </label>
            <input
              style={styles.input}
              type="text"
              id="year"
              name="year"
              required
              placeholder="Enter your year"
              value={form.year}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="field" style={styles.label}>
              Field of Study<span style={styles.labelSpan}>*</span>
            </label>
            <input
              style={styles.input}
              type="text"
              id="field"
              name="field"
              required
              placeholder="Enter your field of study"
              value={form.field}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div style={styles.errorMsg}>{error}</div>
          )}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
      <div style={success ? styles.popup : styles.popupHidden}>
        🎉 Registration Successful! <br />
        <br />
        <button style={styles.popupBtn} onClick={closePopup}>
          OK
        </button>
      </div>
    </div>
  );
}