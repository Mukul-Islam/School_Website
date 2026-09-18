import { useState } from "react";
import "./StudentResult.css";

function StudentResult() {
  const [selectedExam, setSelectedExam] = useState("Annual Examination");

  const resultData = {
    "Annual Examination": {
      year: "2026",
      total: "500",
      obtained: "412",
      gpa: "4.75",
      status: "Passed",
      subjects: [
        { name: "Bangla", fullMarks: 100, marks: 86, grade: "A+" },
        { name: "English", fullMarks: 100, marks: 82, grade: "A+" },
        { name: "Mathematics", fullMarks: 100, marks: 88, grade: "A+" },
        { name: "Science", fullMarks: 100, marks: 78, grade: "A" },
        { name: "ICT", fullMarks: 100, marks: 78, grade: "A" },
      ],
    },

    "Half Yearly Examination": {
      year: "2026",
      total: "500",
      obtained: "385",
      gpa: "4.50",
      status: "Passed",
      subjects: [
        { name: "Bangla", fullMarks: 100, marks: 80, grade: "A+" },
        { name: "English", fullMarks: 100, marks: 76, grade: "A" },
        { name: "Mathematics", fullMarks: 100, marks: 82, grade: "A+" },
        { name: "Science", fullMarks: 100, marks: 74, grade: "A" },
        { name: "ICT", fullMarks: 100, marks: 73, grade: "A" },
      ],
    },

    "Class Test": {
      year: "2026",
      total: "500",
      obtained: "401",
      gpa: "4.70",
      status: "Passed",
      subjects: [
        { name: "Bangla", fullMarks: 100, marks: 84, grade: "A+" },
        { name: "English", fullMarks: 100, marks: 81, grade: "A+" },
        { name: "Mathematics", fullMarks: 100, marks: 86, grade: "A+" },
        { name: "Science", fullMarks: 100, marks: 76, grade: "A" },
        { name: "ICT", fullMarks: 100, marks: 74, grade: "A" },
      ],
    },
  };

  const result = resultData[selectedExam];

  return (
    <section className="student-result-page">
      <div className="student-result-container">

        {/* Page Header */}
        <div className="result-page-header">
          <div>
            <span className="result-page-label">
              STUDENT PORTAL
            </span>

            <h1>My Result</h1>

            <p>
              View your examination results, marks, grades and academic performance.
            </p>
          </div>

          <div className="result-exam-selector">
            <label htmlFor="examSelect">
              Select Examination
            </label>

            <select
              id="examSelect"
              value={selectedExam}
              onChange={(event) => setSelectedExam(event.target.value)}
            >
              {Object.keys(resultData).map((exam) => (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Student Information */}
        <div className="result-student-card">
          <div className="result-student-profile">
            <div className="result-student-avatar">
              R
            </div>

            <div>
              <span>STUDENT</span>
              <h2>Rahim Ahmed</h2>
              <p>Student ID: STU001</p>
            </div>
          </div>

          <div className="result-student-details">
            <div>
              <span>Class</span>
              <strong>10</strong>
            </div>

            <div>
              <span>Section</span>
              <strong>A</strong>
            </div>

            <div>
              <span>Roll</span>
              <strong>1</strong>
            </div>

            <div>
              <span>Session</span>
              <strong>2026</strong>
            </div>
          </div>
        </div>

        {/* Examination Title */}
        <div className="result-exam-heading">
          <div>
            <span className="section-label">
              EXAMINATION RESULT
            </span>

            <h2>{selectedExam}</h2>
          </div>

          <span className="result-year">
            {result.year}
          </span>
        </div>

        {/* Result Summary */}
        <div className="result-summary-grid">

          <div className="result-summary-card">
            <div className="summary-icon">
              %
            </div>

            <div>
              <span>Obtained Marks</span>
              <strong>
                {result.obtained}
                <small> / {result.total}</small>
              </strong>
            </div>
          </div>

          <div className="result-summary-card">
            <div className="summary-icon">
              ★
            </div>

            <div>
              <span>GPA</span>
              <strong>{result.gpa}</strong>
            </div>
          </div>

          <div className="result-summary-card">
            <div className="summary-icon">
              ✓
            </div>

            <div>
              <span>Result Status</span>
              <strong className="passed-text">
                {result.status}
              </strong>
            </div>
          </div>

          <div className="result-summary-card">
            <div className="summary-icon">
              #
            </div>

            <div>
              <span>Subjects</span>
              <strong>{result.subjects.length}</strong>
            </div>
          </div>

        </div>

        {/* Subject Results */}
        <div className="result-section-card">

          <div className="result-section-header">
            <div>
              <span className="section-label">
                MARKSHEET
              </span>

              <h2>Subject-wise Result</h2>

              <p>
                Detailed marks and grades for each subject.
              </p>
            </div>
          </div>

          <div className="result-table-wrapper">
            <table className="result-table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Subject</th>
                  <th>Full Marks</th>
                  <th>Obtained Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>
                {result.subjects.map((subject, index) => (
                  <tr key={subject.name}>
                    <td>{index + 1}</td>

                    <td className="result-subject-name">
                      {subject.name}
                    </td>

                    <td>{subject.fullMarks}</td>

                    <td className="obtained-mark">
                      {subject.marks}
                    </td>

                    <td>
                      <span className="grade-badge">
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}

                <tr className="result-total-row">
                  <td></td>

                  <td>Total</td>

                  <td>{result.total}</td>

                  <td>{result.obtained}</td>

                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Grade Information */}
        <div className="result-section-card">

          <div className="result-section-header">
            <div>
              <span className="section-label">
                GRADING SYSTEM
              </span>

              <h2>Grade Information</h2>
            </div>
          </div>

          <div className="grade-grid">

            <div className="grade-item">
              <strong>A+</strong>
              <span>80–100</span>
            </div>

            <div className="grade-item">
              <strong>A</strong>
              <span>70–79</span>
            </div>

            <div className="grade-item">
              <strong>A-</strong>
              <span>60–69</span>
            </div>

            <div className="grade-item">
              <strong>B</strong>
              <span>50–59</span>
            </div>

            <div className="grade-item">
              <strong>C</strong>
              <span>40–49</span>
            </div>

            <div className="grade-item">
              <strong>F</strong>
              <span>Below 40</span>
            </div>

          </div>

        </div>

        {/* Result History */}
        <div className="result-section-card">

          <div className="result-section-header">
            <div>
              <span className="section-label">
                ACADEMIC RECORD
              </span>

              <h2>Result History</h2>

              <p>
                Previous examination records will appear here.
              </p>
            </div>
          </div>

          <div className="result-history-list">

            <button
              className={`history-item ${
                selectedExam === "Annual Examination"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedExam("Annual Examination")
              }
            >
              <div>
                <strong>Annual Examination</strong>
                <span>2026</span>
              </div>

              <div className="history-result">
                <strong>GPA 4.75</strong>
                <span className="history-passed">
                  Passed
                </span>
              </div>
            </button>

            <button
              className={`history-item ${
                selectedExam === "Half Yearly Examination"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedExam("Half Yearly Examination")
              }
            >
              <div>
                <strong>Half Yearly Examination</strong>
                <span>2026</span>
              </div>

              <div className="history-result">
                <strong>GPA 4.50</strong>
                <span className="history-passed">
                  Passed
                </span>
              </div>
            </button>

            <button
              className={`history-item ${
                selectedExam === "Class Test"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedExam("Class Test")
              }
            >
              <div>
                <strong>Class Test</strong>
                <span>2026</span>
              </div>

              <div className="history-result">
                <strong>GPA 4.70</strong>
                <span className="history-passed">
                  Passed
                </span>
              </div>
            </button>

          </div>

        </div>

        {/* Bottom Note */}
        <div className="result-note">
          <div className="result-note-icon">
            !
          </div>

          <div>
            <h3>Academic Result</h3>

            <p>
              This result is displayed for academic reference.
              Official marksheets and certificates will be issued
              by ABC School according to school policy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default StudentResult;