
import { useEffect, useState } from "react";
import "./StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([]);
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
        console.log("Students API response:", data);

        setStudents(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Student API error:", error);
        setError("Student data load করা যাচ্ছে না।");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="student-list-section">
        <div className="student-list-container">
          <p className="student-status">
            Loading students...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="student-list-section">
        <div className="student-list-container">
          <p className="student-error">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="student-list-section">
      <div className="student-list-container">

        <div className="student-list-header">
          <span>OUR STUDENTS</span>

          <h1>Student List</h1>

          <p>
            Explore the students of ABC School and their academic information.
          </p>
        </div>

        <div className="student-table-wrapper">
          <table className="student-table">

            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Class</th>
                <th>Section</th>
                <th>Session</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id}>

                  <td>
                    {student.studentId}
                  </td>

                  <td className="student-name">
                    {student.name}
                  </td>

                  <td>
                    {student.roll}
                  </td>

                  <td>
                    {student.class}
                  </td>

                  <td>
                    {student.section}
                  </td>

                  <td>
                    {student.session}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {students.length === 0 && (
          <p className="student-status">
            No students found.
          </p>
        )}

      </div>
    </section>
  );
}

export default StudentList;

