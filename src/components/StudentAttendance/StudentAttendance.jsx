import "./StudentAttendance.css";

function StudentAttendance() {
  const attendance = {
    totalClasses: 120,
    present: 108,
    absent: 8,
    late: 4,
  };

  const percentage = (
    (attendance.present / attendance.totalClasses) *
    100
  ).toFixed(1);

  return (
    <div className="student-attendance-page">

      <div className="student-attendance-container">

        <div className="attendance-header">
          <div>
            <span>STUDENT PORTAL</span>
            <h1>Attendance</h1>
            <p>
              Check your attendance record and statistics.
            </p>
          </div>
        </div>

        <div className="attendance-overview">

          <div className="attendance-main-card">
            <span>Attendance Percentage</span>

            <strong>{percentage}%</strong>

            <div className="attendance-progress">
              <div
                style={{
                  width: `${percentage}%`,
                }}
              ></div>
            </div>

            <p>
              Your current attendance performance
            </p>
          </div>

          <div className="attendance-stat-card">
            <span>Total Classes</span>
            <strong>{attendance.totalClasses}</strong>
          </div>

          <div className="attendance-stat-card">
            <span>Present</span>
            <strong>{attendance.present}</strong>
          </div>

          <div className="attendance-stat-card">
            <span>Absent</span>
            <strong>{attendance.absent}</strong>
          </div>

          <div className="attendance-stat-card">
            <span>Late</span>
            <strong>{attendance.late}</strong>
          </div>

        </div>

        <section className="attendance-record-card">

          <div className="attendance-card-title">
            <h2>Attendance Summary</h2>
          </div>

          <div className="attendance-summary-row">

            <div>
              <span>Present</span>
              <strong>{attendance.present}</strong>
            </div>

            <div>
              <span>Absent</span>
              <strong>{attendance.absent}</strong>
            </div>

            <div>
              <span>Late</span>
              <strong>{attendance.late}</strong>
            </div>

            <div>
              <span>Total</span>
              <strong>{attendance.totalClasses}</strong>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default StudentAttendance;