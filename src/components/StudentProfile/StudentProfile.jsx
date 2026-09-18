import { useEffect, useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Student Profile API Response:", data);

        const studentList = data.data || [];

        setStudents(studentList);

        if (studentList.length > 0) {
          setSelectedStudentId(studentList[0].studentId);
          setStudent(studentList[0]);
        } else {
          setError("Database-এ কোনো student পাওয়া যায়নি।");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Student Profile Error:", error);
        setError("Student information load করা যাচ্ছে না।");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedStudentId || students.length === 0) {
      return;
    }

    const selectedStudent = students.find(
      (item) => item.studentId === selectedStudentId
    );

    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudentId, students]);

  if (loading) {
    return (
      <section className="student-profile-page">
        <div className="student-profile-container">
          <div className="profile-loading">
            Loading student information...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="student-profile-page">
        <div className="student-profile-container">
          <div className="profile-error">
            {error}
          </div>
        </div>
      </section>
    );
  }

  if (!student) {
    return (
      <section className="student-profile-page">
        <div className="student-profile-container">
          <div className="profile-empty">
            No student information found.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="student-profile-page">
      <div className="student-profile-container">

        <div className="student-profile-header">

          <div>
            <span className="student-profile-label">
              STUDENT PORTAL
            </span>

            <h1>My Profile</h1>

            <p>
              View student personal and academic information.
            </p>
          </div>

          <div className="student-selector">

            <label htmlFor="studentSelect">
              Select Student
            </label>

            <select
              id="studentSelect"
              value={selectedStudentId}
              onChange={(event) =>
                setSelectedStudentId(event.target.value)
              }
            >
              {students.map((item) => (
                <option
                  key={item.studentId}
                  value={item.studentId}
                >
                  {item.name} — {item.studentId}
                </option>
              ))}
            </select>

          </div>

        </div>

        <div className="profile-main-card">

          <div className="profile-photo-area">

            {student.photo ? (
              <img
                src={student.photo}
                alt={student.name}
                className="profile-photo"
              />
            ) : (
              <div className="profile-photo-placeholder">
                <span>👤</span>
              </div>
            )}

          </div>

          <div className="profile-main-info">

            <span className="profile-small-label">
              STUDENT
            </span>

            <h2>
              {student.name || "Not Available"}
            </h2>

            <p className="profile-student-id">
              Student ID:
              <strong>
                {student.studentId || "Not Available"}
              </strong>
            </p>

            <div className="profile-status">
              <span className="status-dot"></span>
              {student.status || "Active"}
            </div>

          </div>

          <div className="profile-academic-summary">

            <div className="summary-item">
              <span>Class</span>

              <strong>
                {student.class || "—"}
              </strong>
            </div>

            <div className="summary-item">
              <span>Section</span>

              <strong>
                {student.section || "—"}
              </strong>
            </div>

            <div className="summary-item">
              <span>Roll</span>

              <strong>
                {student.roll ?? "—"}
              </strong>
            </div>

            <div className="summary-item">
              <span>Session</span>

              <strong>
                {student.session || "—"}
              </strong>
            </div>

          </div>

        </div>

        <div className="profile-section-card">

          <div className="profile-section-heading">

            <div className="section-icon">
              👤
            </div>

            <div>
              <h2>
                Personal Information
              </h2>

              <p>
                Student's basic personal information
              </p>
            </div>

          </div>

          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>Full Name</span>

              <strong>
                {student.name || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Date of Birth</span>

              <strong>
                {student.dateOfBirth || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Gender</span>

              <strong>
                {student.gender || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Nationality</span>

              <strong>
                {student.nationality || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Religion</span>

              <strong>
                {student.religion || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Blood Group</span>

              <strong>
                {student.bloodGroup || "Not Available"}
              </strong>
            </div>

          </div>

        </div>

        <div className="profile-section-card">

          <div className="profile-section-heading">

            <div className="section-icon">
              🎓
            </div>

            <div>
              <h2>
                Academic Information
              </h2>

              <p>
                Student's current academic information
              </p>
            </div>

          </div>

          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>Student ID</span>

              <strong>
                {student.studentId || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Roll Number</span>

              <strong>
                {student.roll ?? "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Class</span>

              <strong>
                {student.class || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Section</span>

              <strong>
                {student.section || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Session</span>

              <strong>
                {student.session || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Shift</span>

              <strong>
                {student.shift || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Admission Date</span>

              <strong>
                {student.admissionDate || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Student Status</span>

              <strong className="active-text">
                {student.status || "Active"}
              </strong>
            </div>

          </div>

        </div>

        <div className="profile-section-card">

          <div className="profile-section-heading">

            <div className="section-icon">
              👨‍👩‍👦
            </div>

            <div>
              <h2>
                Guardian Information
              </h2>

              <p>
                Parent and guardian information
              </p>
            </div>

          </div>

          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>Father's Name</span>

              <strong>
                {student.fatherName || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Mother's Name</span>

              <strong>
                {student.motherName || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Guardian Name</span>

              <strong>
                {student.guardianName || "Not Available"}
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Guardian Phone</span>

              <strong>
                {student.guardianPhone || "Not Available"}
              </strong>
            </div>

          </div>

        </div>

        <div className="profile-section-card">

          <div className="profile-section-heading">

            <div className="section-icon">
              📍
            </div>

            <div>
              <h2>
                Address Information
              </h2>

              <p>
                Present and permanent address
              </p>
            </div>

          </div>

          <div className="profile-address-grid">

            <div className="profile-address-item">
              <span>Present Address</span>

              <strong>
                {student.presentAddress || "Not Available"}
              </strong>
            </div>

            <div className="profile-address-item">
              <span>Permanent Address</span>

              <strong>
                {student.permanentAddress || "Not Available"}
              </strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StudentProfile;