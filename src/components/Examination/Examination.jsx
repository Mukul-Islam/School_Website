
import { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaBookOpen,
  FaFileAlt,
  FaDownload,
  FaTimes,
  FaArrowRight,
  FaGraduationCap,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Examination.css";

const examinationData = [
  {
    id: 1,
    title: "First Term Examination",
    type: "Term Exam",
    classes: "Class 1 - 10",
    startDate: "2026-04-15",
    endDate: "2026-04-25",
    status: "Completed",
    description:
      "The first term examination evaluates students' academic progress during the first part of the academic year.",
    routine: "",
  },
  {
    id: 2,
    title: "Half-Yearly Examination",
    type: "Term Exam",
    classes: "Class 1 - 10",
    startDate: "2026-06-15",
    endDate: "2026-06-25",
    status: "Completed",
    description:
      "The half-yearly examination assesses subject knowledge and learning progress across the first half of the academic year.",
    routine: "",
  },
  {
    id: 3,
    title: "Second Term Examination",
    type: "Term Exam",
    classes: "Class 1 - 10",
    startDate: "2026-08-15",
    endDate: "2026-08-25",
    status: "Upcoming",
    description:
      "Students should prepare according to their subject syllabus and the official examination routine.",
    routine: "",
  },
  {
    id: 4,
    title: "Model Test Examination",
    type: "Model Test",
    classes: "Class 9 - 10",
    startDate: "2026-10-10",
    endDate: "2026-10-20",
    status: "Upcoming",
    description:
      "The model test helps students prepare for important examinations through practice under examination conditions.",
    routine: "",
  },
  {
    id: 5,
    title: "Annual Examination",
    type: "Annual Exam",
    classes: "Class 1 - 10",
    startDate: "2026-11-15",
    endDate: "2026-11-30",
    status: "Upcoming",
    description:
      "The annual examination evaluates students' overall academic performance and learning outcomes for the year.",
    routine: "",
  },
];

const classOptions = [
  "All Classes",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function Examination() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedExam, setSelectedExam] = useState(null);

  const filteredExams = examinationData.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.classes.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass =
      selectedClass === "All Classes" ||
      (exam.classes === "Class 1 - 10" &&
        Number(selectedClass.replace("Class ", "")) <= 10) ||
      (exam.classes === "Class 9 - 10" &&
        ["Class 9", "Class 10"].includes(selectedClass));

    const matchesStatus =
      selectedStatus === "All" || exam.status === selectedStatus;

    return matchesSearch && matchesClass && matchesStatus;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedClass("All Classes");
    setSelectedStatus("All");
  };

  return (
    <section className="examination-section">
      <div className="examination-container">
        <div className="examination-hero">
          <span className="examination-eyebrow">
            ABC SCHOOL ACADEMICS
          </span>

          <h1 className="examination-heading">
            Examination Information
          </h1>

          <p>
            Stay informed about examination schedules, academic
            assessments, and important examination announcements.
          </p>
        </div>

        <div className="examination-summary">
          <div className="examination-summary-card">
            <div className="examination-summary-icon">
              <FaCalendarAlt />
            </div>
            <div>
              <h3>{examinationData.length}</h3>
              <p>Listed Examinations</p>
            </div>
          </div>

          <div className="examination-summary-card">
            <div className="examination-summary-icon">
              <FaClipboardCheck />
            </div>
            <div>
              <h3>
                {
                  examinationData.filter(
                    (exam) => exam.status === "Upcoming"
                  ).length
                }
              </h3>
              <p>Upcoming Exams</p>
            </div>
          </div>

          <div className="examination-summary-card">
            <div className="examination-summary-icon">
              <FaGraduationCap />
            </div>
            <div>
              <h3>1 - 10</h3>
              <p>Classes Covered</p>
            </div>
          </div>
        </div>

        <div className="examination-notice">
          <FaFileAlt />
          <div>
            <h3>Important Examination Notice</h3>
            <p>
              Students should follow the official examination routine
              and instructions issued by the school authority. Dates
              shown on this page are sample data.
            </p>
          </div>
        </div>

        <div className="examination-toolbar">
          <div className="examination-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search examinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search examinations"
            />
          </div>

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            aria-label="Filter by class"
            className="examination-select"
          >
            {classOptions.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            aria-label="Filter by examination status"
            className="examination-select"
          >
            <option value="All">All Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="examination-results-heading">
          <h2>Examination Schedule</h2>
          <span>
            {filteredExams.length}{" "}
            {filteredExams.length === 1 ? "exam" : "exams"} found
          </span>
        </div>

        {filteredExams.length > 0 ? (
          <div className="examination-list">
            {filteredExams.map((exam) => (
              <article className="examination-card" key={exam.id}>
                <div className="examination-card-icon">
                  <FaBookOpen />
                </div>

                <div className="examination-card-main">
                  <div className="examination-card-top">
                    <span className="examination-type">
                      {exam.type}
                    </span>

                    <span
                      className={`examination-status ${
                        exam.status === "Upcoming"
                          ? "upcoming"
                          : "completed"
                      }`}
                    >
                      {exam.status}
                    </span>
                  </div>

                  <h3>{exam.title}</h3>

                  <div className="examination-meta">
                    <span>
                      <FaGraduationCap />
                      {exam.classes}
                    </span>

                    <span>
                      <FaCalendarAlt />
                      {formatDate(exam.startDate)} –{" "}
                      {formatDate(exam.endDate)}
                    </span>
                  </div>

                  <p>{exam.description}</p>
                </div>

                <button
                  type="button"
                  className="examination-details-btn"
                  onClick={() => setSelectedExam(exam)}
                >
                  Details <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="examination-empty">
            <FaSearch />
            <h3>No examinations found</h3>
            <p>Try changing your search or filter options.</p>
            <button type="button" onClick={resetFilters}>
              Clear Filters
            </button>
          </div>
        )}

        <div className="examination-guidelines">
          <h2>Examination Guidelines</h2>

          <div className="examination-guidelines-grid">
            <div>
              <span className="guideline-number">01</span>
              <h3>Be Prepared</h3>
              <p>Complete your syllabus and revise lessons regularly.</p>
            </div>

            <div>
              <span className="guideline-number">02</span>
              <h3>Arrive on Time</h3>
              <p>Reach the examination hall before the scheduled time.</p>
            </div>

            <div>
              <span className="guideline-number">03</span>
              <h3>Follow Instructions</h3>
              <p>Follow the rules and instructions provided by teachers.</p>
            </div>
          </div>
        </div>
      </div>

      {selectedExam && (
        <div
          className="examination-modal-overlay"
          onClick={() => setSelectedExam(null)}
        >
          <div
            className="examination-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="examination-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="examination-modal-close"
              onClick={() => setSelectedExam(null)}
              aria-label="Close examination details"
            >
              <FaTimes />
            </button>

            <div className="examination-modal-header">
              <FaBookOpen />
              <span>{selectedExam.type}</span>
            </div>

            <h2 id="examination-modal-title">{selectedExam.title}</h2>
            <p>{selectedExam.description}</p>

            <div className="examination-modal-info">
              <div>
                <FaGraduationCap />
                <span>
                  <strong>Classes</strong>
                  {selectedExam.classes}
                </span>
              </div>

              <div>
                <FaCalendarAlt />
                <span>
                  <strong>Start Date</strong>
                  {formatDate(selectedExam.startDate)}
                </span>
              </div>

              <div>
                <FaCalendarAlt />
                <span>
                  <strong>End Date</strong>
                  {formatDate(selectedExam.endDate)}
                </span>
              </div>

              <div>
                <FaClock />
                <span>
                  <strong>Status</strong>
                  {selectedExam.status}
                </span>
              </div>
            </div>

            <div className="examination-modal-note">
              <FaFileAlt />
              <p>
                For the confirmed routine, subject-wise dates, and
                instructions, please check the official notice issued
                by ABC School.
              </p>
            </div>

            <button
              type="button"
              className="examination-modal-done"
              onClick={() => setSelectedExam(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Examination;

