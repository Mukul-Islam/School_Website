
import { useState } from "react";
import {
  FaSearch,
  FaGraduationCap,
  FaUserGraduate,
  FaClipboardCheck,
  FaTimes,
  FaArrowRight,
  FaBookOpen,
  FaTrophy,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Results.css";

// Demo data only. Replace with data fetched securely from your backend.
const resultsData = [
  {
    id: 1,
    studentId: "STU001",
    name: "Rahim Ahmed",
    className: "10",
    section: "A",
    roll: "01",
    exam: "Half-Yearly Examination",
    year: "2026",
    gpa: "5.00",
    grade: "A+",
    totalMarks: 850,
    subjects: [
      { name: "Bangla", marks: 90, grade: "A+" },
      { name: "English", marks: 88, grade: "A+" },
      { name: "Mathematics", marks: 95, grade: "A+" },
      { name: "Science", marks: 92, grade: "A+" },
      { name: "ICT", marks: 85, grade: "A+" },
    ],
  },
  {
    id: 2,
    studentId: "STU002",
    name: "Nusrat Jahan",
    className: "10",
    section: "A",
    roll: "02",
    exam: "Half-Yearly Examination",
    year: "2026",
    gpa: "4.80",
    grade: "A",
    totalMarks: 810,
    subjects: [
      { name: "Bangla", marks: 85, grade: "A+" },
      { name: "English", marks: 82, grade: "A+" },
      { name: "Mathematics", marks: 90, grade: "A+" },
      { name: "Science", marks: 88, grade: "A+" },
      { name: "ICT", marks: 80, grade: "A+" },
    ],
  },
  {
    id: 3,
    studentId: "STU003",
    name: "Sakib Hasan",
    className: "9",
    section: "B",
    roll: "03",
    exam: "Annual Examination",
    year: "2026",
    gpa: "4.50",
    grade: "A",
    totalMarks: 780,
    subjects: [
      { name: "Bangla", marks: 82, grade: "A+" },
      { name: "English", marks: 78, grade: "A" },
      { name: "Mathematics", marks: 85, grade: "A+" },
      { name: "Science", marks: 80, grade: "A+" },
      { name: "ICT", marks: 75, grade: "A" },
    ],
  },
];

const getGradeClass = (grade) => {
  if (grade === "A+") return "results-grade-aplus";
  if (grade === "A") return "results-grade-a";
  return "results-grade-default";
};

function Results() {
  const [studentId, setStudentId] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedExam, setSelectedExam] = useState("All Exams");
  const [searchedId, setSearchedId] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);
  const [error, setError] = useState("");

  const filteredResults = resultsData.filter((result) => {
    const matchesId =
      !searchedId ||
      result.studentId.toLowerCase() === searchedId.toLowerCase();

    const matchesClass =
      selectedClass === "All Classes" ||
      result.className === selectedClass;

    const matchesExam =
      selectedExam === "All Exams" || result.exam === selectedExam;

    return matchesId && matchesClass && matchesExam;
  });

  const handleSearch = (e) => {
    e.preventDefault();

    const value = studentId.trim();

    if (!value) {
      setError("Please enter your Student ID.");
      setSearchedId("");
      setSelectedResult(null);
      return;
    }

    const found = resultsData.find(
      (result) =>
        result.studentId.toLowerCase() === value.toLowerCase() &&
        (selectedClass === "All Classes" ||
          result.className === selectedClass) &&
        (selectedExam === "All Exams" || result.exam === selectedExam)
    );

    setSearchedId(value);
    setSelectedResult(null);
    setError(
      found
        ? ""
        : "No result found. Please check your Student ID and selected filters."
    );
  };

  const handleReset = () => {
    setStudentId("");
    setSearchedId("");
    setSelectedClass("All Classes");
    setSelectedExam("All Exams");
    setSelectedResult(null);
    setError("");
  };

  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-hero">
          <span className="results-eyebrow">ABC SCHOOL ACADEMICS</span>
          <h1 className="results-heading">Examination Results</h1>
          <p>
            Check examination results and review academic performance
            using your Student ID.
          </p>
        </div>

        <div className="results-info-grid">
          <div className="results-info-card">
            <span className="results-info-icon">
              <FaUserGraduate />
            </span>
            <div>
              <h3>Student ID</h3>
              <p>Search using your school ID</p>
            </div>
          </div>

          <div className="results-info-card">
            <span className="results-info-icon">
              <FaClipboardCheck />
            </span>
            <div>
              <h3>Exam Results</h3>
              <p>View subject-wise performance</p>
            </div>
          </div>

          <div className="results-info-card">
            <span className="results-info-icon">
              <FaGraduationCap />
            </span>
            <div>
              <h3>Academic Progress</h3>
              <p>Review grades and GPA</p>
            </div>
          </div>
        </div>

        <div className="results-search-panel">
          <div className="results-panel-heading">
            <h2>Find Your Result</h2>
            <p>Enter your Student ID and select your examination.</p>
          </div>

          <form className="results-search-form" onSubmit={handleSearch}>
            <div className="results-form-field results-student-id-field">
              <label htmlFor="results-student-id">Student ID</label>
              <input
                id="results-student-id"
                type="text"
                placeholder="e.g. STU001"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>

            <div className="results-form-field">
              <label htmlFor="results-class">Class</label>
              <select
                id="results-class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option>All Classes</option>
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={String(index + 1)}>
                    Class {index + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="results-form-field">
              <label htmlFor="results-exam">Examination</label>
              <select
                id="results-exam"
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
              >
                <option>All Exams</option>
                <option>Half-Yearly Examination</option>
                <option>Annual Examination</option>
              </select>
            </div>

            <button type="submit" className="results-search-btn">
              <FaSearch /> Search Result
            </button>
          </form>

          {error && (
            <div className="results-error" role="alert">
              {error}
            </div>
          )}

          <p className="results-demo-note">
            Demo IDs: STU001, STU002, STU003. These sample records are
            for development only.
          </p>
        </div>

        {searchedId && !error && (
          <div className="results-list-section">
            <div className="results-list-heading">
              <h2>Result Information</h2>
              <span>
                {filteredResults.length}{" "}
                {filteredResults.length === 1 ? "result" : "results"}
              </span>
            </div>

            {filteredResults.length > 0 ? (
              <div className="results-table-wrapper">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Student Name</th>
                      <th>Class</th>
                      <th>Examination</th>
                      <th>GPA</th>
                      <th>Grade</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredResults.map((result) => (
                      <tr key={result.id}>
                        <td>{result.studentId}</td>
                        <td>{result.name}</td>
                        <td>{result.className}</td>
                        <td>{result.exam}</td>
                        <td>{result.gpa}</td>
                        <td>
                          <span
                            className={`results-grade ${getGradeClass(
                              result.grade
                            )}`}
                          >
                            {result.grade}
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="results-view-btn"
                            onClick={() => setSelectedResult(result)}
                            aria-label={`View result for ${result.name}`}
                          >
                            View <FaArrowRight />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="results-no-records">
                No result matches your selected filters.
              </p>
            )}
          </div>
        )}

        <div className="results-help">
          <FaBookOpen />
          <div>
            <h3>Need Help with Your Result?</h3>
            <p>
              If your result is unavailable or you notice incorrect
              information, contact the school office for assistance.
            </p>
          </div>
        </div>
      </div>

      {selectedResult && (
        <div
          className="results-modal-overlay"
          onClick={() => setSelectedResult(null)}
        >
          <div
            className="results-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="results-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="results-modal-close"
              onClick={() => setSelectedResult(null)}
              aria-label="Close result details"
            >
              <FaTimes />
            </button>

            <div className="results-modal-header">
              <div className="results-modal-logo">
                <FaGraduationCap />
              </div>
              <span>ABC SCHOOL</span>
              <h2 id="results-modal-title">Academic Result</h2>
              <p>{selectedResult.exam} • {selectedResult.year}</p>
            </div>

            <div className="results-student-details">
              <div>
                <span>Student Name</span>
                <strong>{selectedResult.name}</strong>
              </div>
              <div>
                <span>Student ID</span>
                <strong>{selectedResult.studentId}</strong>
              </div>
              <div>
                <span>Class / Section</span>
                <strong>
                  {selectedResult.className} / {selectedResult.section}
                </strong>
              </div>
              <div>
                <span>Roll Number</span>
                <strong>{selectedResult.roll}</strong>
              </div>
            </div>

            <div className="results-performance">
              <div>
                <span>GPA</span>
                <strong>{selectedResult.gpa}</strong>
              </div>
              <div>
                <span>Final Grade</span>
                <strong>{selectedResult.grade}</strong>
              </div>
              <div>
                <span>Total Marks</span>
                <strong>{selectedResult.totalMarks}</strong>
              </div>
            </div>

            <h3 className="results-subject-heading">Subject-wise Results</h3>

            <div className="results-subject-table-wrapper">
              <table className="results-subject-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedResult.subjects.map((subject) => (
                    <tr key={subject.name}>
                      <td>{subject.name}</td>
                      <td>{subject.marks}</td>
                      <td>
                        <span
                          className={`results-grade ${getGradeClass(
                            subject.grade
                          )}`}
                        >
                          {subject.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              className="results-print-btn"
              onClick={() => window.print()}
            >
              Print Result
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Results;

