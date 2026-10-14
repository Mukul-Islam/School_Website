
import { useState } from "react";
import {
  FaUserGraduate,
  FaSearch,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaUsers,
  FaEnvelope,
  FaTimes,
  FaArrowRight,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";

import "./Alumni.css";

const alumniData = [
  {
    id: 1,
    name: "Rahim Ahmed",
    batch: "2018",
    profession: "Software Engineer",
    organization: "Technology Sector",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
    achievement:
      "Building a career in software development and technology.",
    bio:
      "An example alumni profile highlighting professional growth, lifelong learning, and connection with the school community.",
    skills: ["Software Development", "Problem Solving", "Technology"],
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    batch: "2019",
    profession: "Medical Student",
    organization: "Medical Education",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85",
    achievement:
      "Pursuing further education in the healthcare field.",
    bio:
      "An example alumni profile representing dedication to education and a future career focused on helping others.",
    skills: ["Healthcare", "Research", "Communication"],
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    batch: "2017",
    profession: "Business Professional",
    organization: "Business Sector",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85",
    achievement:
      "Developing professional and entrepreneurial skills.",
    bio:
      "An example profile demonstrating how former students can use their education to grow professionally.",
    skills: ["Business", "Leadership", "Management"],
  },
  {
    id: 4,
    name: "Ayesha Akter",
    batch: "2020",
    profession: "University Student",
    organization: "Higher Education",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
    achievement:
      "Continuing studies and developing new academic skills.",
    bio:
      "An example alumni profile celebrating continued education, personal development, and future aspirations.",
    skills: ["Academic Learning", "Teamwork", "Communication"],
  },
  {
    id: 5,
    name: "Tanvir Hasan",
    batch: "2016",
    profession: "Entrepreneur",
    organization: "Entrepreneurship",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    achievement:
      "Exploring business opportunities and entrepreneurship.",
    bio:
      "An example profile showing how alumni can pursue business ideas and contribute to their communities.",
    skills: ["Entrepreneurship", "Planning", "Leadership"],
  },
  {
    id: 6,
    name: "Maliha Rahman",
    batch: "2018",
    profession: "Teacher",
    organization: "Education Sector",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
    achievement:
      "Contributing to education and student development.",
    bio:
      "An example alumni profile celebrating a commitment to teaching, mentoring, and lifelong learning.",
    skills: ["Teaching", "Mentoring", "Communication"],
  },
];

const batches = [
  "All Batches",
  ...new Set(alumniData.map((alumnus) => alumnus.batch)),
];

function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeBatch, setActiveBatch] = useState("All Batches");
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const filteredAlumni = alumniData.filter((alumnus) => {
    const query = searchTerm.toLowerCase();

    const matchesSearch =
      alumnus.name.toLowerCase().includes(query) ||
      alumnus.profession.toLowerCase().includes(query) ||
      alumnus.batch.includes(query) ||
      alumnus.organization.toLowerCase().includes(query);

    const matchesBatch =
      activeBatch === "All Batches" || alumnus.batch === activeBatch;

    return matchesSearch && matchesBatch;
  });

  return (
    <section className="alumni-section">
      <div className="alumni-container">
        <div className="alumni-hero">
          <span className="alumni-eyebrow">ABC SCHOOL COMMUNITY</span>

          <h1 className="alumni-heading">
            Our Proud Alumni
          </h1>

          <p className="alumni-hero-description">
            Our alumni are an important part of the ABC School family.
            Discover their journeys, celebrate their achievements, and
            stay connected with our growing community.
          </p>

          <a href="/contact" className="alumni-hero-button">
            Connect With Us <FaArrowRight />
          </a>

          <div className="alumni-hero-decoration">
            <FaUserGraduate />
          </div>
        </div>

        <div className="alumni-highlights">
          <div className="alumni-highlight-card">
            <span className="alumni-highlight-icon">
              <FaUsers />
            </span>
            <div>
              <h3>Strong Community</h3>
              <p>Connected across generations</p>
            </div>
          </div>

          <div className="alumni-highlight-card">
            <span className="alumni-highlight-icon">
              <FaGraduationCap />
            </span>
            <div>
              <h3>Lifelong Learning</h3>
              <p>Growing beyond the classroom</p>
            </div>
          </div>

          <div className="alumni-highlight-card">
            <span className="alumni-highlight-icon">
              <FaHandshake />
            </span>
            <div>
              <h3>Giving Back</h3>
              <p>Supporting future students</p>
            </div>
          </div>
        </div>

        <div className="alumni-section-heading">
          <span className="alumni-subtitle">OUR FORMER STUDENTS</span>
          <h2>Meet Our Alumni</h2>
          <p>
            Search by name, profession, organization, or graduation batch.
          </p>
        </div>

        <div className="alumni-toolbar">
          <label className="alumni-search">
            <FaSearch />
            <input
              type="search"
              placeholder="Search alumni..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="alumni-batch-filters">
            {batches.map((batch) => (
              <button
                key={batch}
                type="button"
                className={`alumni-batch-filter ${
                  activeBatch === batch ? "active" : ""
                }`}
                onClick={() => setActiveBatch(batch)}
              >
                {batch}
              </button>
            ))}
          </div>
        </div>

        <p className="alumni-results-count">
          Showing <strong>{filteredAlumni.length}</strong>{" "}
          {filteredAlumni.length === 1 ? "alumnus" : "alumni"}
        </p>

        <div className="alumni-grid">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumnus) => (
              <article className="alumni-card" key={alumnus.id}>
                <div className="alumni-card-image-wrap">
                  <img
                    src={alumnus.image}
                    alt={`Sample portrait for ${alumnus.name}`}
                    className="alumni-card-image"
                    loading="lazy"
                  />

                  <span className="alumni-batch-badge">
                    Batch {alumnus.batch}
                  </span>
                </div>

                <div className="alumni-card-content">
                  <h3>{alumnus.name}</h3>

                  <p className="alumni-profession">
                    <FaBriefcase />
                    {alumnus.profession}
                  </p>

                  <p className="alumni-organization">
                    {alumnus.organization}
                  </p>

                  <div className="alumni-card-divider" />

                  <p className="alumni-achievement">
                    <FaTrophy />
                    <span>{alumnus.achievement}</span>
                  </p>

                  <button
                    type="button"
                    className="alumni-details-button"
                    onClick={() => setSelectedAlumni(alumnus)}
                  >
                    View Profile <FaArrowRight />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="alumni-empty">
              <FaSearch />
              <h3>No alumni found</h3>
              <p>Try another name, profession, or graduation batch.</p>
            </div>
          )}
        </div>

        <div className="alumni-community">
          <div className="alumni-community-icon">
            <FaHandshake />
          </div>

          <div className="alumni-community-content">
            <span className="alumni-subtitle">STAY CONNECTED</span>
            <h2>Once a Student, Always a Part of ABC School</h2>
            <p>
              Are you a former student? Get in touch with the school to
              share your journey, update your alumni information, or
              explore opportunities to support current students.
            </p>
          </div>

          <a href="/contact" className="alumni-contact-button">
            Contact School <FaArrowRight />
          </a>
        </div>
      </div>

      {selectedAlumni && (
        <div
          className="alumni-modal-overlay"
          onClick={() => setSelectedAlumni(null)}
        >
          <div
            className="alumni-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="alumni-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="alumni-modal-close"
              onClick={() => setSelectedAlumni(null)}
              aria-label="Close alumni profile"
            >
              <FaTimes />
            </button>

            <img
              src={selectedAlumni.image}
              alt={`Sample portrait for ${selectedAlumni.name}`}
              className="alumni-modal-image"
            />

            <span className="alumni-subtitle">
              ABC SCHOOL ALUMNI
            </span>

            <h2 id="alumni-modal-title">{selectedAlumni.name}</h2>

            <p className="alumni-modal-batch">
              <FaGraduationCap /> Graduation Batch: {selectedAlumni.batch}
            </p>

            <div className="alumni-modal-info">
              <div>
                <FaBriefcase />
                <span>
                  <strong>Profession</strong>
                  {selectedAlumni.profession}
                </span>
              </div>

              <div>
                <FaGlobe />
                <span>
                  <strong>Field</strong>
                  {selectedAlumni.organization}
                </span>
              </div>

              <div>
                <FaTrophy />
                <span>
                  <strong>Achievement</strong>
                  {selectedAlumni.achievement}
                </span>
              </div>
            </div>

            <h3>About</h3>
            <p className="alumni-modal-bio">{selectedAlumni.bio}</p>

            <h3>Skills & Interests</h3>
            <div className="alumni-skills">
              {selectedAlumni.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <a
              href="/contact"
              className="alumni-contact-button alumni-modal-contact"
            >
              <FaEnvelope /> Contact School
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Alumni;

