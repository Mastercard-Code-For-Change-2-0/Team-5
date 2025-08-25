

const RegisterForm = ({ darkMode }) => {
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

export default RegisterForm;
