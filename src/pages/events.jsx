import { useNavigate } from "react-router-dom";

const ngoEvents = [
  {
    id: 1,
    name: "Clean Water Drive",
    description: "Join us in providing clean water to rural communities.",
    date: "2025-09-10",
    location: "Village A, State X",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Tree Plantation",
    description: "Help us plant 1000 trees for a greener tomorrow.",
    date: "2025-09-15",
    location: "City Park, City Y",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Health Camp",
    description: "Free health checkups and medicines for the underprivileged.",
    date: "2025-09-20",
    location: "Community Center, Town Z",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Food Distribution",
    description: "Distribute food packets to the homeless.",
    date: "2025-09-22",
    location: "Downtown Area, City Y",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Blood Donation Camp",
    description: "Donate blood and save lives.",
    date: "2025-09-25",
    location: "Red Cross Hall, City X",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Women Empowerment Workshop",
    description: "Workshops for skill development and empowerment.",
    date: "2025-09-28",
    location: "NGO Office, City Z",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Literacy Program",
    description: "Teach basic literacy to adults in need.",
    date: "2025-10-01",
    location: "Community School, Village B",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Animal Welfare Drive",
    description: "Help us care for stray animals.",
    date: "2025-10-05",
    location: "Animal Shelter, City Y",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Clothes Donation",
    description: "Donate clothes for the needy before winter.",
    date: "2025-10-10",
    location: "Collection Center, City X",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Senior Citizen Support",
    description: "Support and care for senior citizens.",
    date: "2025-10-15",
    location: "Old Age Home, City Z",
    image:
      "https://images.unsplash.com/photo-1466979939565-131c4b39a51b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    name: "Hackathon",
    description:
      "Participate in our coding hackathon to solve real-world NGO challenges!",
    date: "2025-10-20",
    location: "Tech Hub, City Y",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
];

const Events = () => {
  const navigate = useNavigate();

  // group events into rows of 3
  const rows = [];
  for (let i = 0; i < ngoEvents.length; i += 3) {
    rows.push(ngoEvents.slice(i, i + 3));
  }

  const cardStyle = {
    border: "1.5px solid #e0e0e0",
    borderRadius: "16px",
    width: "300px",
    background: "#fff",
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "340px",
    fontFamily: "Inter, Arial, sans-serif",
    boxShadow: "0 4px 18px 0 rgba(0,0,0,0.08)",
    transition: "all 0.25s ease",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {rows.map((row, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            justifyContent: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {row.map((event) => (
            <div
              key={event.id}
              style={cardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)";
                e.currentTarget.style.transform =
                  "translateY(-6px) scale(1.03)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 18px 0 rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <img
                src={event.image}
                alt={event.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
              <h2
                style={{
                  marginBottom: "0.5rem",
                  color: "#222",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {event.name}
              </h2>
              <p
                style={{
                  margin: "0.5rem 0",
                  color: "#444",
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                {event.description}
              </p>
              <p
                style={{
                  margin: "0.4rem 0",
                  fontSize: "0.95em",
                  color: "#777",
                  textAlign: "center",
                }}
              >
                <b>Date:</b> {event.date}
              </p>
              <p
                style={{
                  margin: "0.4rem 0",
                  fontSize: "0.95em",
                  color: "#777",
                  textAlign: "center",
                }}
              >
                <b>Location:</b> {event.location}
              </p>
              <button
                style={{
                  marginTop: "1.2rem",
                  padding: "0.7em 1.5em",
                  background: "#2d6a4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "7px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: 15,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  letterSpacing: 0.5,
                  transition: "background 0.2s",
                }}
                onClick={() => navigate("/register")}
                onMouseOver={(e) => (e.currentTarget.style.background = "#225f44")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#2d6a4f")}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Events;
