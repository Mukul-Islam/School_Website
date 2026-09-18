import { NavLink, useNavigate } from "react-router-dom";

import "./StudentPortalNavbar.css";

function StudentPortalNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="student-portal-navbar">
      <div className="student-portal-navbar-inner">

        {/* Logo / Branding */}
        <div
          className="student-portal-brand"
          onClick={() => navigate("/student-dashboard")}
        >
          <div className="student-portal-logo">
            ABC
          </div>

          <div className="student-portal-brand-text">
            <h2>ABC School</h2>
            <span>Student Portal</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="student-portal-nav">

          <NavLink
            to="/student-dashboard"
            className={({ isActive }) =>
              isActive ? "portal-nav-link active" : "portal-nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/student-profile"
            className={({ isActive }) =>
              isActive ? "portal-nav-link active" : "portal-nav-link"
            }
          >
            My Profile
          </NavLink>

          <NavLink
            to="/student-result"
            className={({ isActive }) =>
              isActive ? "portal-nav-link active" : "portal-nav-link"
            }
          >
            My Result
          </NavLink>

          <NavLink
            to="/student-payment"
            className={({ isActive }) =>
              isActive ? "portal-nav-link active" : "portal-nav-link"
            }
          >
            Payment
          </NavLink>

          <NavLink
            to="/student-attendance"
            className={({ isActive }) =>
              isActive ? "portal-nav-link active" : "portal-nav-link"
            }
          >
            Attendance
          </NavLink>

          <NavLink
            to="/student-id-card"
            className={({ isActive }) =>
              isActive ? "portal-nav-link active" : "portal-nav-link"
            }
          >
            ID Card
          </NavLink>

        </nav>

        {/* Logout */}
        <button
          className="student-portal-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </header>
  );
}

export default StudentPortalNavbar;