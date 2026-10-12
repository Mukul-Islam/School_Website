
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaUserShield,
  FaCalculator,
  FaUserGraduate,
  FaClipboardList,
  FaPhoneAlt,
  
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

import "./Administration.css";

const administrationMembers = [
  {
    id: 1,
    role: "Head Teacher",
    title: "School Leadership",
    icon: <FaUserTie />,
    description:
      "Leads the academic and administrative activities of the school and ensures a positive learning environment.",
    responsibilities: [
      "Academic supervision",
      "Teacher coordination",
      "School development",
    ],
    link: "/head-teacher",
  },
  {
    id: 2,
    role: "Assistant Head Teacher",
    title: "Academic Support",
    icon: <FaUserGraduate />,
    description:
      "Supports the Head Teacher in daily academic activities, class supervision, and maintaining discipline.",
    responsibilities: [
      "Class monitoring",
      "Academic coordination",
      "Student discipline",
    ],
  },
  {
    id: 3,
    role: "Office Administrator",
    title: "Office Management",
    icon: <FaClipboardList />,
    description:
      "Manages office operations, official documents, records, and communication with students and guardians.",
    responsibilities: [
      "Office documentation",
      "Record management",
      "Official communication",
    ],
  },
  {
    id: 4,
    role: "Accounts Officer",
    title: "Finance & Accounts",
    icon: <FaCalculator />,
    description:
      "Maintains financial records, monitors fee transactions, and supports transparent financial management.",
    responsibilities: [
      "Fee records",
      "Financial documentation",
      "Payment tracking",
    ],
  },
  {
    id: 5,
    role: "Admission Officer",
    title: "Admission & Support",
    icon: <FaUserShield />,
    description:
      "Assists students and guardians with admission procedures, required documents, and enrollment information.",
    responsibilities: [
      "Admission processing",
      "Document verification",
      "Guardian support",
    ],
  },
];

function Administration() {
  return (
    <section className="administration-section">
      <div className="administration-container">
        {/* Page Header */}
        <div className="administration-header">
          <span className="administration-eyebrow">
            <FaUsers /> OUR SCHOOL TEAM
          </span>

          <h1 className="administration-heading">
            School <span>Administration</span>
          </h1>

          <p className="administration-intro">
            Meet the administrative team of ABC School. Our administration
            works together to support academic excellence, maintain discipline,
            and provide a welcoming environment for students and guardians.
          </p>
        </div>

        {/* Administration Cards */}
        <div className="administration-grid">
          {administrationMembers.map((member) => (
            <article className="administration-card" key={member.id}>
              <div className="administration-card-top">
                <div className="administration-icon">
                  {member.icon}
                </div>

                <span className="administration-number">
                  {String(member.id).padStart(2, "0")}
                </span>
              </div>

              <span className="administration-role-label">
                {member.title}
              </span>

              <h2 className="administration-member-role">
                {member.role}
              </h2>

              <p className="administration-description">
                {member.description}
              </p>

              <div className="administration-responsibilities">
                <h3>Key Responsibilities</h3>

                <ul>
                  {member.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {member.link && (
                <Link
                  to={member.link}
                  className="administration-card-link"
                >
                  View Profile <FaArrowRight />
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* Contact Section */}
        <div className="administration-contact">
          <div className="administration-contact-icon">
            <FaPhoneAlt />
          </div>

          <div className="administration-contact-content">
            <h2>Need Administrative Assistance?</h2>
            <p>
              Contact ABC School for admission information, official documents,
              or other administrative inquiries.
            </p>
          </div>

          <Link to="/contact" className="administration-contact-button">
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Administration;

