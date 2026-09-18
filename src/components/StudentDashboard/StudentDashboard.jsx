import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

function StudentDashboard() {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // localStorage থেকে logged-in student-এর data নেওয়া হচ্ছে
    const savedStudent = localStorage.getItem("student");

    if (!savedStudent) {
      // Login করা না থাকলে login page-এ পাঠিয়ে দাও
      navigate("/student-login");
      return;
    }

    try {
      const parsedStudent = JSON.parse(savedStudent);
      setStudent(parsedStudent);
      setLoading(false);
    } catch (err) {
      console.error("Failed to parse student data:", err);
      setError("Student data are not loaded properly.");
      setLoading(false);
    }
  }, [navigate]);

  

  if (loading) {
    return (
      <section className="student-dashboard">
        <div className="dashboard-container">
          <div className="dashboard-message">
            <h2>Loading...</h2>
            <p>Student information load হচ্ছে...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !student) {
    return (
      <section className="student-dashboard">
        <div className="dashboard-container">
          <div className="dashboard-message dashboard-error">
            <h2>Unable to Load Student Data</h2>
            <p>{error || "Student data পাওয়া যায়নি।"}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="student-dashboard">

      <div className="dashboard-header">
        <div className="dashboard-header-inner">
          <div>
            <span className="dashboard-small-title">
              ABC SCHOOL
            </span>

            <h1>Student Dashboard</h1>

            <p>
              Welcome to your student portal
            </p>
          </div>

          {/* <button
            className="dashboard-logout-button"
            onClick={handleLogout}
          >
            Logout
          </button> */}
        </div>
      </div>

      <div className="dashboard-container">

        <div className="dashboard-welcome">
          <div className="welcome-content">
            <span className="welcome-label">
              WELCOME BACK
            </span>

            <h2>
              {student.name}
            </h2>

            <p>
              Student ID: {student.studentId}
            </p>
          </div>

          <div className="student-status-badge">
            Active Student
          </div>
        </div>

        <div className="student-summary-card">

          <div className="student-summary-profile">

            <div className="profile-photo-placeholder">
              {student.name
                ? student.name.charAt(0).toUpperCase()
                : "S"}
            </div>

            <div>
              <span className="section-label">
                STUDENT PROFILE
              </span>

              <h2>
                {student.name}
              </h2>

              <p>
                Student ID: {student.studentId}
              </p>
            </div>

          </div>

          <div className="student-summary-details">

            <div>
              <span>Roll</span>
              <strong>
                {student.roll ?? "—"}
              </strong>
            </div>

            <div>
              <span>Class</span>
              <strong>
                {student.class || "—"}
              </strong>
            </div>

            <div>
              <span>Section</span>
              <strong>
                {student.section || "—"}
              </strong>
            </div>

            <div>
              <span>Session</span>
              <strong>
                {student.session || "—"}
              </strong>
            </div>

          </div>
        </div>

        <div className="portal-menu">

          <Link
            to="/student-profile"
            className="portal-card"
          >
            <div className="portal-icon">
              👤
            </div>

            <div className="portal-card-content">
              <h3>My Profile</h3>

              <p>
                View your personal and academic information.
              </p>
            </div>

            <span className="portal-arrow">
              →
            </span>
          </Link>

          <Link
            to="/student-result"
            className="portal-card"
          >
            <div className="portal-icon">
              📄
            </div>

            <div className="portal-card-content">
              <h3>My Result</h3>

              <p>
                View examination results, marks and grades.
              </p>
            </div>

            <span className="portal-arrow">
              →
            </span>
          </Link>

          <Link
            to="/student-payment"
            className="portal-card"
          >
            <div className="portal-icon">
              ৳
            </div>

            <div className="portal-card-content">
              <h3>Payment & Fees</h3>

              <p>
                View your payment history and outstanding fees.
              </p>
            </div>

            <span className="portal-arrow">
              →
            </span>
          </Link>

          <Link
            to="/student-attendance"
            className="portal-card"
          >
            <div className="portal-icon">
              %
            </div>

            <div className="portal-card-content">
              <h3>Attendance</h3>

              <p>
                Check your attendance record and statistics.
              </p>
            </div>

            <span className="portal-arrow">
              →
            </span>
          </Link>

          <Link
            to="/student-id-card"
            className="portal-card portal-card-wide"
          >
            <div className="portal-icon">
              ID
            </div>

            <div className="portal-card-content">
              <h3>Student Identity Card</h3>

              <p>
                View your student identity card.
              </p>
            </div>

            <span className="portal-arrow">
              →
            </span>
          </Link>

        </div>

        <div className="dashboard-card">

          <div className="dashboard-section-header">
            <div>
              <span className="section-label">
                QUICK INFORMATION
              </span>

              <h2>
                Academic Information
              </h2>
            </div>
          </div>

          <div className="quick-info-grid">

            <div className="quick-info-item">
              <span>Student ID</span>

              <strong>
                {student.studentId || "—"}
              </strong>
            </div>

            <div className="quick-info-item">
              <span>Class</span>

              <strong>
                {student.class || "—"}
              </strong>
            </div>

            <div className="quick-info-item">
              <span>Section</span>

              <strong>
                {student.section || "—"}
              </strong>
            </div>

            <div className="quick-info-item">
              <span>Roll</span>

              <strong>
                {student.roll ?? "—"}
              </strong>
            </div>

            <div className="quick-info-item">
              <span>Academic Session</span>

              <strong>
                {student.session || "—"}
              </strong>
            </div>

          </div>
        </div>

        <div className="dashboard-notice">

          <div className="notice-icon">
            !
          </div>

          <div>
            <h3>
              Student Portal
            </h3>

            <p>
              Your results, payment records and attendance
              information will appear in their respective
              sections.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default StudentDashboard;