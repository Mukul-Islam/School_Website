
import { useState } from "react";
import {
  FaTrophy,
  FaGraduationCap,
  FaMedal,
  FaFutbol,
  FaFlask,
  FaPalette,
  FaAward,
  FaSearch,
  FaTimes,
  FaCalendarAlt,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";

import "./StudentAchievements.css";

// Demo achievements — replace with actual school records.
const achievementsData = [
  {
    id: 1,
    studentName: "Rahim Ahmed",
    className: "Class 10",
    year: "2026",
    category: "Academic",
    title: "Outstanding Academic Performance",
    award: "Academic Excellence Award",
    position: "1st Position",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    description:
      "Recognized for excellent academic performance, dedication to learning, and consistent achievement across school subjects.",
    details:
      "This recognition celebrates commitment to studies, regular preparation, and a positive attitude toward learning. The award information is sample content and should be replaced with verified school records.",
  },
  {
    id: 2,
    studentName: "Nusrat Jahan",
    className: "Class 9",
    year: "2026",
    category: "Academic",
    title: "Merit Scholarship",
    award: "Merit Scholarship",
    position: "Scholarship Recipient",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85",
    description:
      "Recognized for strong academic results, consistent effort, and dedication to educational goals.",
    details:
      "Scholarship recipients are recognized according to the school's published selection criteria. Add the actual scholarship name and verified student details here.",
  },
  {
    id: 3,
    studentName: "Sabbir Hossain",
    className: "Class 8",
    year: "2026",
    category: "Sports",
    title: "Inter-School Football Competition",
    award: "Football Championship",
    position: "Champion",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85",
    description:
      "Celebrating teamwork, sportsmanship, discipline, and outstanding performance on the football field.",
    details:
      "The recognition highlights participation, teamwork, and sporting spirit. Replace this sample with the actual tournament name, date, team details, and final position.",
  },
  {
    id: 4,
    studentName: "Maliha Sultana",
    className: "Class 7",
    year: "2025",
    category: "Science",
    title: "Science Project Exhibition",
    award: "Best Science Project",
    position: "1st Prize",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    description:
      "Recognized for creativity, scientific curiosity, problem-solving, and an innovative project presentation.",
    details:
      "This achievement celebrates students who apply scientific knowledge to practical ideas. Add the real project title and competition details before publishing.",
  },
  {
    id: 5,
    studentName: "Farhana Akter",
    className: "Class 8",
    year: "2025",
    category: "Cultural",
    title: "Cultural Program Excellence",
    award: "Cultural Achievement Award",
    position: "Special Recognition",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
    description:
      "Recognized for artistic expression, creativity, confidence, and participation in cultural activities.",
    details:
      "This category can include music, dance, recitation, drama, drawing, and other cultural activities. Replace the sample description with the actual event and result.",
  },
  {
    id: 6,
    studentName: "Tanvir Ahmed",
    className: "Class 9",
    year: "2025",
    category: "Technology",
    title: "Young Innovators Showcase",
    award: "Innovation Award",
    position: "Outstanding Project",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    description:
      "Celebrating digital skills, creative thinking, and the use of technology to solve everyday problems.",
    details:
      "Recognizes technology-based projects, coding activities, and creative digital solutions. Add the actual project and event information when available.",
  },
];

const categories = [
  "All Achievements",
  "Academic",
  "Sports",
  "Science",
  "Cultural",
  "Technology",
];

const categoryIcons = {
  Academic: <FaGraduationCap />,
  Sports: <FaFutbol />,
  Science: <FaFlask />,
  Cultural: <FaPalette />,
  Technology: <FaStar />,
};

function StudentAchievements() {
  const [activeCategory, setActiveCategory] = useState("All Achievements");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const filteredAchievements = achievementsData.filter((achievement) => {
    const searchText = [
      achievement.studentName,
      achievement.title,
      achievement.award,
      achievement.className,
      achievement.category,
      achievement.year,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchText.includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All Achievements" ||
      achievement.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const closeModal = () => setSelectedAchievement(null);

  return (
    <section className="student-achievements-section">
      <div className="student-achievements-container">
        {/* Header */}
        <header className="student-achievements-header">
          <span className="student-achievements-eyebrow">
            <FaTrophy /> CELEBRATING SUCCESS
          </span>

          <h1 className="student-achievements-heading">
            Student <span>Achievements</span>
          </h1>

          <p className="student-achievements-intro">
            Celebrating the hard work, talent, creativity, and dedication of
            our students in academics, sports, science, culture, and beyond.
          </p>
        </header>

        {/* Achievement Summary */}
        <div className="student-achievements-summary">
          <div className="student-achievements-summary-icon">
            <FaAward />
          </div>

          <div>
            <h2>Every Achievement Matters</h2>
            <p>
              We encourage every student to explore their talents, work toward
              their goals, and take pride in their progress.
            </p>
          </div>

          <div className="student-achievements-total">
            <strong>{filteredAchievements.length}</strong>
            <span>
              {filteredAchievements.length === 1
                ? "Achievement"
                : "Achievements"}
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="student-achievements-toolbar">
          <div className="student-achievements-search">
            <FaSearch />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search student, award, class or year..."
              aria-label="Search student achievements"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div
          className="student-achievements-filters"
          aria-label="Filter achievements"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`student-achievements-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievement Cards */}
        {filteredAchievements.length > 0 ? (
          <div className="student-achievements-grid">
            {filteredAchievements.map((achievement) => (
              <button
                type="button"
                key={achievement.id}
                className="student-achievement-card"
                onClick={() => setSelectedAchievement(achievement)}
                aria-label={`View ${achievement.title}`}
              >
                <div className="student-achievement-image-wrap">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="student-achievement-image"
                    loading="lazy"
                  />

                  <span className="student-achievement-category">
                    {categoryIcons[achievement.category] || <FaTrophy />}
                    {achievement.category}
                  </span>

                  <span className="student-achievement-year">
                    <FaCalendarAlt /> {achievement.year}
                  </span>
                </div>

                <div className="student-achievement-content">
                  <span className="student-achievement-award">
                    <FaMedal /> {achievement.award}
                  </span>

                  <h2>{achievement.title}</h2>

                  <div className="student-achievement-student">
                    <span className="student-achievement-avatar">
                      <FaUserGraduate />
                    </span>

                    <div>
                      <strong>{achievement.studentName}</strong>
                      <span>{achievement.className}</span>
                    </div>
                  </div>

                  <div className="student-achievement-position">
                    <FaTrophy />
                    <span>{achievement.position}</span>
                  </div>

                  <p className="student-achievement-description">
                    {achievement.description}
                  </p>

                  <span className="student-achievement-view">
                    View Achievement <span aria-hidden="true">→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="student-achievements-empty">
            <FaSearch />
            <h2>No achievements found</h2>
            <p>Try another search term or category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Achievements");
              }}
            >
              Show All Achievements
            </button>
          </div>
        )}

        {/* Encouragement Banner */}
        <div className="student-achievements-banner">
          <div className="student-achievements-banner-icon">
            <FaStar />
          </div>

          <div>
            <h2>Every Student Has the Potential to Shine</h2>
            <p>
              At ABC School, we value effort, curiosity, good character, and
              every step toward success.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div
          className="student-achievement-modal-overlay"
          onClick={closeModal}
        >
          <section
            className="student-achievement-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="student-achievement-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="student-achievement-modal-close"
              onClick={closeModal}
              aria-label="Close achievement details"
              autoFocus
            >
              <FaTimes />
            </button>

            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="student-achievement-modal-image"
            />

            <div className="student-achievement-modal-body">
              <span className="student-achievement-modal-category">
                {categoryIcons[selectedAchievement.category] || <FaTrophy />}
                {selectedAchievement.category} Achievement
              </span>

              <h2 id="student-achievement-modal-title">
                {selectedAchievement.title}
              </h2>

              <p className="student-achievement-modal-award">
                <FaMedal /> {selectedAchievement.award}
              </p>

              <div className="student-achievement-modal-info">
                <div>
                  <span>Student Name</span>
                  <strong>{selectedAchievement.studentName}</strong>
                </div>

                <div>
                  <span>Class</span>
                  <strong>{selectedAchievement.className}</strong>
                </div>

                <div>
                  <span>Year</span>
                  <strong>{selectedAchievement.year}</strong>
                </div>

                <div>
                  <span>Position / Recognition</span>
                  <strong>{selectedAchievement.position}</strong>
                </div>
              </div>

              <section className="student-achievement-modal-description">
                <h3>About This Achievement</h3>
                <p>{selectedAchievement.description}</p>
                <p>{selectedAchievement.details}</p>
              </section>
            </div>

            <div className="student-achievement-modal-footer">
              <span>ABC School · Celebrating Student Success</span>

              <button type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

export default StudentAchievements;

