import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  const student = {
    name: "Muhammad Saim Khan",
    course: "Full Stack MERN",
    duration: 30,
    enrolled: true,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  };

  const currentDate = new Date();

  const getGreeting = () => {
    const hour = currentDate.getHours();

    if (hour < 12) return "🌞 Good Morning";
    if (hour < 18) return "☀️ Good Afternoon";
    return "🌙 Good Evening";
  };

return (
  <div className="container">

    <div className="card">
      <h1>{getGreeting()}</h1>
      <p>Welcome to your React Dashboard 🚀</p>
    </div>

    <div className="card">
      <h2>👨‍🎓 Student Information</h2>

      <div className="info">
        <strong>Name:</strong>
        <span>{student.name}</span>
      </div>

      <div className="info">
        <strong>Course:</strong>
        <span>{student.course}</span>
      </div>

      <div className="info">
        <strong>Duration:</strong>
        <span>{student.duration} Days</span>
      </div>

      <div className="info">
        <strong>Status:</strong>
        <span
          className={
            student.enrolled ? "status active" : "status inactive"
          }
        >
          {student.enrolled ? "Enrolled ✅" : "Not Enrolled ❌"}
        </span>
      </div>

      <div className="info">
        <strong>Date:</strong>
        <span>{currentDate.toLocaleDateString()}</span>
      </div>
    </div>

    <div className="card">
      <h2>💻 Skills You'll Learn</h2>

      <ul className="skill-list">
        {student.skills.map((skill, index) => (
          <li key={index}>
            <span>{index + 1}</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>

    {/* Inline Styling Example */}
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h2>Direct Inline Styling</h2>
      <p style={{ color: "yellow", fontSize: "18px" }}>
        React Inline CSS Example
      </p>
    </div>

  </div>
  
);

}

export default App;