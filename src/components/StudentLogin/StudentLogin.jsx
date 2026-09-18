import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css";

function StudentLogin() {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!studentId || !password) {
      setError("Please enter your Student ID and Password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, password }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        setError(result.message || "Invalid Student ID or Password");
        setLoading(false);
        return;
      }

      localStorage.setItem("student", JSON.stringify(result.data));
      navigate("/student-dashboard");
    } catch (err) {
      console.error("Login request failed:", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="portal-gate-wrapper">
      <div className="portal-gate">
        <div className="portal-gate-identity">
          <div className="portal-gate-mark" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="56" height="56">
              <polygon
                points="50,4 90,27 90,73 50,96 10,73 10,27"
                fill="none"
                stroke="#d9a441"
                strokeWidth="2.5"
              />
              <polygon
                points="50,20 76,35 76,65 50,80 24,65 24,35"
                fill="none"
                stroke="#d9a441"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h1>ABC School</h1>
          <p>Student Portal</p>
          <div className="portal-gate-line"></div>
          <p className="portal-gate-caption">
            Your grades, attendance, and records —
            all in one place, kept just for you.
          </p>
        </div>

        <div className="portal-gate-form">
          <div className="portal-gate-form-inner">
            <span className="portal-gate-eyebrow">Sign in</span>
            <h2>Access your account</h2>

            <form onSubmit={handleLogin}>
              <label htmlFor="studentId">Student ID</label>
              <input
                type="text"
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="STU001"
                autoComplete="username"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />

              {error && (
                <p className="portal-gate-error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" disabled={loading}>
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;