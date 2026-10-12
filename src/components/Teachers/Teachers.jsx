
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaTimes,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaPhoneAlt,
  FaBookOpen,
  FaAward,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFutbol,
  FaFlask,
  FaUserTie,
} from "react-icons/fa";

import "./Teachers.css";

// Demo data: Replace these details with your school's actual teachers.
const teachersData = [
  {
    id: 1,
    name: "Abdul Karim",
    designation: "Head Teacher",
    subject: "School Administration",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
    qualification: "M.A. in Education",
    institution: "University of Dhaka",
    graduation: "2005",
    experience: "20 Years",
    joiningYear: "2010",
    email: "headteacher@example.com",
    phone: "+880 1700-000001",
    languages: ["Bangla", "English"],
    skills: ["Academic Leadership", "School Management", "Teacher Mentoring"],
    bio: "An experienced education professional committed to academic excellence, student development, and a positive school environment.",
    education: [
      {
        degree: "M.A. in Education",
        institution: "University of Dhaka",
        year: "2005",
      },
      {
        degree: "B.A.",
        institution: "National University",
        year: "2003",
      },
    ],
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    designation: "Assistant Head Teacher",
    subject: "Academic Coordination",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
    qualification: "M.A. in English",
    institution: "University of Dhaka",
    graduation: "2010",
    experience: "15 Years",
    joiningYear: "2014",
    email: "nusrat@example.com",
    phone: "+880 1700-000002",
    languages: ["Bangla", "English"],
    skills: ["Academic Planning", "Student Guidance", "Class Supervision"],
    bio: "Dedicated to supporting teachers and students through effective academic planning, classroom supervision, and student guidance.",
    education: [
      {
        degree: "M.A. in English",
        institution: "University of Dhaka",
        year: "2010",
      },
      {
        degree: "B.A. in English",
        institution: "University of Dhaka",
        year: "2008",
      },
    ],
  },
  {
    id: 3,
    name: "Mohammad Hasan",
    designation: "Senior Subject Teacher",
    subject: "Mathematics",
    category: "Subject Teacher",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    qualification: "M.Sc. in Mathematics",
    institution: "University of Rajshahi",
    graduation: "2012",
    experience: "12 Years",
    joiningYear: "2016",
    email: "hasan@example.com",
    phone: "+880 1700-000003",
    languages: ["Bangla", "English"],
    skills: ["Mathematics", "Problem Solving", "Exam Preparation"],
    bio: "Helps students build strong mathematical foundations through practical examples, logical thinking, and interactive lessons.",
    education: [
      {
        degree: "M.Sc. in Mathematics",
        institution: "University of Rajshahi",
        year: "2012",
      },
      {
        degree: "B.Sc. in Mathematics",
        institution: "University of Rajshahi",
        year: "2010",
      },
    ],
  },
  {
    id: 4,
    name: "Farhana Akter",
    designation: "Assistant Teacher",
    subject: "English",
    category: "Subject Teacher",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
    qualification: "M.A. in English",
    institution: "Jahangirnagar University",
    graduation: "2016",
    experience: "8 Years",
    joiningYear: "2020",
    email: "farhana@example.com",
    phone: "+880 1700-000004",
    languages: ["Bangla", "English"],
    skills: ["English Grammar", "Creative Writing", "Communication"],
    bio: "Encourages students to develop confident communication, reading comprehension, creative writing, and practical English skills.",
    education: [
      {
        degree: "M.A. in English",
        institution: "Jahangirnagar University",
        year: "2016",
      },
      {
        degree: "B.A. in English",
        institution: "Jahangirnagar University",
        year: "2014",
      },
    ],
  },
  {
    id: 5,
    name: "Tanvir Ahmed",
    designation: "ICT Teacher",
    subject: "Information & Communication Technology",
    category: "ICT Teacher",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85",
    qualification: "B.Sc. in Computer Science",
    institution: "Daffodil International University",
    graduation: "2018",
    experience: "6 Years",
    joiningYear: "2022",
    email: "tanvir@example.com",
    phone: "+880 1700-000005",
    languages: ["Bangla", "English"],
    skills: ["Computer Basics", "Programming", "Digital Literacy"],
    bio: "Introduces students to digital literacy, computer fundamentals, safe technology use, and basic programming concepts.",
    education: [
      {
        degree: "B.Sc. in Computer Science",
        institution: "Daffodil International University",
        year: "2018",
      },
    ],
  },
  {
    id: 6,
    name: "Sabbir Hossain",
    designation: "Science Teacher",
    subject: "General Science",
    category: "Subject Teacher",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
    qualification: "M.Sc. in Physics",
    institution: "University of Chittagong",
    graduation: "2015",
    experience: "9 Years",
    joiningYear: "2019",
    email: "sabbir@example.com",
    phone: "+880 1700-000006",
    languages: ["Bangla", "English"],
    skills: ["Science Experiments", "Critical Thinking", "Research"],
    bio: "Makes science engaging through practical examples, scientific demonstrations, and activities that develop curiosity.",
    education: [
      {
        degree: "M.Sc. in Physics",
        institution: "University of Chittagong",
        year: "2015",
      },
      {
        degree: "B.Sc. in Physics",
        institution: "University of Chittagong",
        year: "2013",
      },
    ],
  },
  {
    id: 7,
    name: "Maliha Sultana",
    designation: "Bangla Teacher",
    subject: "Bangla Language & Literature",
    category: "Subject Teacher",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
    qualification: "M.A. in Bangla",
    institution: "National University",
    graduation: "2017",
    experience: "7 Years",
    joiningYear: "2021",
    email: "maliha@example.com",
    phone: "+880 1700-000007",
    languages: ["Bangla", "English"],
    skills: ["Bangla Grammar", "Literature", "Creative Writing"],
    bio: "Inspires students to appreciate Bangla language and literature while strengthening grammar, reading, and writing skills.",
    education: [
      {
        degree: "M.A. in Bangla",
        institution: "National University",
        year: "2017",
      },
      {
        degree: "B.A. in Bangla",
        institution: "National University",
        year: "2015",
      },
    ],
  },
  {
    id: 8,
    name: "Imran Hossain",
    designation: "Physical Education Teacher",
    subject: "Physical Education & Sports",
    category: "Sports Teacher",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
    qualification: "B.P.Ed.",
    institution: "National University",
    graduation: "2019",
    experience: "5 Years",
    joiningYear: "2023",
    email: "imran@example.com",
    phone: "+880 1700-000008",
    languages: ["Bangla", "English"],
    skills: ["Sports Training", "Physical Fitness", "Teamwork"],
    bio: "Promotes physical fitness, teamwork, discipline, and healthy habits through structured sports and physical activities.",
    education: [
      {
        degree: "B.P.Ed.",
        institution: "National University",
        year: "2019",
      },
    ],
  },
];

const categories = [
  "All Teachers",
  "Leadership",
  "Subject Teacher",
  "ICT Teacher",
  "Sports Teacher",
];

function Teachers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Teachers");
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const filteredTeachers = teachersData.filter((teacher) => {
    const searchText = [
      teacher.name,
      teacher.designation,
      teacher.subject,
      teacher.qualification,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchText.includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All Teachers" ||
      teacher.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Close the modal with the Escape key and lock background scrolling.
  useEffect(() => {
    if (!selectedTeacher) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedTeacher(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTeacher]);

  return (
    <section className="teachers-section">
      <div className="teachers-container">
        {/* Page Header */}
        <header className="teachers-header">
          <span className="teachers-eyebrow">
            <FaChalkboardTeacher /> OUR TEACHERS
          </span>

          <h1>
            Meet Our <span>Teachers</span>
          </h1>

          <p>
            Meet the dedicated educators of ABC School who inspire students,
            share knowledge, and help every learner build a brighter future.
          </p>
        </header>

        {/* Search */}
        <div className="teachers-toolbar">
          <div className="teachers-search">
            <FaSearch aria-hidden="true" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by teacher name, subject or qualification..."
              aria-label="Search teachers"
            />

            {searchTerm && (
              <button
                type="button"
                className="teachers-clear-search"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="teachers-count">
            Showing <strong>{filteredTeachers.length}</strong> of{" "}
            <strong>{teachersData.length}</strong> teachers
          </div>
        </div>

        {/* Category Filter */}
        <div className="teachers-filters" aria-label="Filter teachers">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`teachers-filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Teacher Cards */}
        {filteredTeachers.length > 0 ? (
          <div className="teachers-grid">
            {filteredTeachers.map((teacher) => (
              <button
                type="button"
                className="teacher-card"
                key={teacher.id}
                onClick={() => setSelectedTeacher(teacher)}
                aria-label={`View profile of ${teacher.name}`}
              >
                <div className="teacher-image-wrap">
                  <img
                    src={teacher.image}
                    alt={`Portrait of ${teacher.name}`}
                    className="teacher-image"
                    loading="lazy"
                  />

                  <span className="teacher-category-badge">
                    {teacher.category}
                  </span>
                </div>

                <div className="teacher-card-content">
                  <h2>{teacher.name}</h2>

                  <p className="teacher-designation">
                    {teacher.designation}
                  </p>

                  <div className="teacher-subject">
                    <FaBookOpen />
                    <span>{teacher.subject}</span>
                  </div>

                  <div className="teacher-experience">
                    <FaBriefcase />
                    <span>{teacher.experience} of experience</span>
                  </div>

                  <span className="teacher-view-profile">
                    View Full Profile <span aria-hidden="true">→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="teachers-empty">
            <FaSearch />
            <h2>No teachers found</h2>
            <p>Try a different name, subject, or category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Teachers");
              }}
            >
              Show All Teachers
            </button>
          </div>
        )}
      </div>

      {/* Teacher Profile Modal */}
      {selectedTeacher && (
        <div
          className="teacher-modal-overlay"
          onClick={() => setSelectedTeacher(null)}
        >
          <section
            className="teacher-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="teacher-modal-name"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="teacher-modal-close"
              onClick={() => setSelectedTeacher(null)}
              aria-label="Close teacher profile"
              autoFocus
            >
              <FaTimes />
            </button>

            {/* Profile Hero */}
            <div className="teacher-modal-hero">
              <img
                src={selectedTeacher.image}
                alt={`Portrait of ${selectedTeacher.name}`}
                className="teacher-modal-image"
              />

              <div className="teacher-modal-identity">
                <span className="teacher-modal-label">
                  ABC SCHOOL · TEACHER PROFILE
                </span>

                <h2 id="teacher-modal-name">{selectedTeacher.name}</h2>

                <p>{selectedTeacher.designation}</p>

                <span className="teacher-modal-subject">
                  <FaBookOpen /> {selectedTeacher.subject}
                </span>
              </div>
            </div>

            <div className="teacher-modal-body">
              {/* Quick Information */}
              <div className="teacher-stats">
                <div className="teacher-stat">
                  <FaBriefcase />
                  <span>Experience</span>
                  <strong>{selectedTeacher.experience}</strong>
                </div>

                <div className="teacher-stat">
                  <FaGraduationCap />
                  <span>Qualification</span>
                  <strong>{selectedTeacher.qualification}</strong>
                </div>

                <div className="teacher-stat">
                  <FaAward />
                  <span>Joined School</span>
                  <strong>{selectedTeacher.joiningYear}</strong>
                </div>
              </div>

              {/* Biography */}
              <section className="teacher-detail-section">
                <h3>About the Teacher</h3>
                <p className="teacher-bio">{selectedTeacher.bio}</p>
              </section>

              {/* Education */}
              <section className="teacher-detail-section">
                <h3>
                  <FaGraduationCap /> Educational Background
                </h3>

                <div className="teacher-education-list">
                  {selectedTeacher.education.map((education, index) => (
                    <div className="teacher-education-item" key={index}>
                      <span className="teacher-education-dot" />

                      <div>
                        <h4>{education.degree}</h4>
                        <p>{education.institution}</p>
                        <span>Year: {education.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Professional Details */}
              <section className="teacher-detail-section">
                <h3>
                  <FaChalkboardTeacher /> Professional Information
                </h3>

                <div className="teacher-info-grid">
                  <div className="teacher-info-item">
                    <span>Primary Subject</span>
                    <strong>{selectedTeacher.subject}</strong>
                  </div>

                  <div className="teacher-info-item">
                    <span>Highest Qualification</span>
                    <strong>{selectedTeacher.qualification}</strong>
                  </div>

                  <div className="teacher-info-item">
                    <span>Institution</span>
                    <strong>{selectedTeacher.institution}</strong>
                  </div>

                  <div className="teacher-info-item">
                    <span>Graduation Year</span>
                    <strong>{selectedTeacher.graduation}</strong>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="teacher-detail-section">
                <h3>
                  <FaAward /> Skills & Expertise
                </h3>

                <div className="teacher-skills">
                  {selectedTeacher.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section className="teacher-detail-section">
                <h3>Languages</h3>

                <div className="teacher-skills teacher-languages">
                  {selectedTeacher.languages.map((language) => (
                    <span key={language}>{language}</span>
                  ))}
                </div>
              </section>

              {/* Contact */}
              <section className="teacher-detail-section teacher-contact-section">
                <h3>Contact Information</h3>

                <div className="teacher-contact-list">
                  <a href={`mailto:${selectedTeacher.email}`}>
                    <FaEnvelope />
                    <span>{selectedTeacher.email}</span>
                  </a>

                  <a
                    href={`tel:${selectedTeacher.phone.replace(/[^\d+]/g, "")}`}
                  >
                    <FaPhoneAlt />
                    <span>{selectedTeacher.phone}</span>
                  </a>
                </div>

                <p className="teacher-contact-note">
                  Please confirm official contact details with the school
                  before publishing this profile.
                </p>
              </section>
            </div>

            <div className="teacher-modal-footer">
              <span>ABC School · Inspiring Every Learner</span>

              <button
                type="button"
                onClick={() => setSelectedTeacher(null)}
              >
                Close Profile
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

export default Teachers;

