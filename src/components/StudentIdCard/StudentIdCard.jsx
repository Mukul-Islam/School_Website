import "./StudentIdCard.css";

function StudentIdCard() {
  const student = {
    name: "Rahim Ahmed",
    studentId: "STU001",
    roll: "1",
    className: "10",
    section: "A",
    session: "2026",
    bloodGroup: "A+",
  };

  return (
    <div className="student-id-page">

      <div className="student-id-container">

        <div className="id-page-header">
          <span>STUDENT PORTAL</span>
          <h1>Student Identity Card</h1>
          <p>
            Your official digital student identity card.
          </p>
        </div>

        <div className="student-id-card">

          {/* Header */}
          <div className="id-card-header">

            <div className="id-school-logo">
              ABC
            </div>

            <div>
              <h2>ABC SCHOOL</h2>
              <p>Student Identity Card</p>
            </div>

          </div>

          {/* Body */}
          <div className="id-card-body">

            <div className="id-photo">
              <span>
                {student.name.charAt(0)}
              </span>
            </div>

            <div className="id-student-info">

              <h3>{student.name}</h3>

              <div className="id-info-row">
                <span>Student ID</span>
                <strong>{student.studentId}</strong>
              </div>

              <div className="id-info-row">
                <span>Class</span>
                <strong>{student.className}</strong>
              </div>

              <div className="id-info-row">
                <span>Section</span>
                <strong>{student.section}</strong>
              </div>

              <div className="id-info-row">
                <span>Roll</span>
                <strong>{student.roll}</strong>
              </div>

              <div className="id-info-row">
                <span>Session</span>
                <strong>{student.session}</strong>
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="id-card-footer">
            <div>
              <span>Blood Group</span>
              <strong>{student.bloodGroup}</strong>
            </div>

            <div>
              <span>Valid Session</span>
              <strong>{student.session}</strong>
            </div>
          </div>

        </div>

        <div className="id-card-note">
          This digital identity card belongs to the student
          mentioned above.
        </div>

      </div>

    </div>
  );
}

export default StudentIdCard;