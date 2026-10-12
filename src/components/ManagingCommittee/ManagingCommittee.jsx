
import {
  FaUsers,
  FaUserTie,
  FaGraduationCap,
  FaHandshake,
  FaLandmark,
  FaBookOpen,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

import "./ManagingCommittee.css";

const committeeMembers = [
  {
    id: 1,
    name: "Committee Chairman",
    position: "Chairman",
    initial: "C",
    description:
      "Provides leadership and guides the committee in making important decisions for the school.",
  },
  {
    id: 2,
    name: "Vice Chairman",
    position: "Vice Chairman",
    initial: "V",
    description:
      "Supports the chairman and assists in coordinating committee activities and development plans.",
  },
  {
    id: 3,
    name: "Committee Secretary",
    position: "Member Secretary",
    initial: "S",
    description:
      "Coordinates meetings, maintains committee records and supports administrative communication.",
  },
  {
    id: 4,
    name: "Education Representative",
    position: "Education Member",
    initial: "E",
    description:
      "Contributes to academic planning, educational quality and student development initiatives.",
  },
  {
    id: 5,
    name: "Parent Representative",
    position: "Parent Member",
    initial: "P",
    description:
      "Represents parent concerns and encourages positive cooperation between families and the school.",
  },
  {
    id: 6,
    name: "Committee Member",
    position: "General Member",
    initial: "M",
    description:
      "Participates in school development discussions and supports the implementation of approved plans.",
  },
];

const responsibilities = [
  {
    icon: <FaGraduationCap />,
    title: "Academic Development",
    description:
      "Support improvements in teaching quality, learning facilities and educational outcomes.",
  },
  {
    icon: <FaLandmark />,
    title: "School Development",
    description:
      "Help plan infrastructure improvements and create a better learning environment.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transparency & Accountability",
    description:
      "Promote responsible decision-making, proper oversight and accountability.",
  },
  {
    icon: <FaHandshake />,
    title: "Community Cooperation",
    description:
      "Strengthen collaboration among teachers, parents, school leadership and the community.",
  },
];

function ManagingCommittee() {
  return (
    <section className="managing-committee-section">
      <div className="managing-committee-container">

        {/* Page Header */}
        <div className="managing-committee-header">
          <div className="managing-committee-header-icon">
            <FaUsers />
          </div>

          <span className="managing-committee-eyebrow">
            LEADERSHIP & GOVERNANCE
          </span>

          <h1 className="managing-committee-heading">
            Managing <strong>Committee</strong>
          </h1>

          <p className="managing-committee-intro">
            The Managing Committee supports the development of ABC
            School through responsible leadership, effective planning
            and a commitment to quality education.
          </p>
        </div>

        {/* Committee Members */}
        <div className="committee-members-section">
          <div className="committee-section-heading">
            <span>OUR LEADERSHIP TEAM</span>
            <h2>Meet the Managing Committee</h2>
            <p>
              The people responsible for guiding school development
              and supporting its educational mission.
            </p>
          </div>

          <div className="committee-members-grid">
            {committeeMembers.map((member) => (
              <article
                className="committee-member-card"
                key={member.id}
              >
                <div className="committee-member-avatar">
                  <span>{member.initial}</span>
                  <div className="committee-member-avatar-icon">
                    <FaUserTie />
                  </div>
                </div>

                <div className="committee-member-info">
                  <span className="committee-member-position">
                    {member.position}
                  </span>

                  <h3>{member.name}</h3>

                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="committee-placeholder-note">
            Note: The names and roles above are placeholders.
            Replace them with the actual committee members'
            information before publishing this page.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="committee-responsibilities">
          <div className="committee-section-heading">
            <span>WHAT WE DO</span>
            <h2>Our Responsibilities</h2>
            <p>
              Working together to support the school's long-term
              development and educational goals.
            </p>
          </div>

          <div className="committee-responsibilities-grid">
            {responsibilities.map((item) => (
              <article
                className="committee-responsibility-card"
                key={item.title}
              >
                <div className="committee-responsibility-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="committee-commitment">
          <div className="committee-commitment-icon">
            <FaBookOpen />
          </div>

          <div className="committee-commitment-content">
            <span>OUR SHARED COMMITMENT</span>

            <h2>Working Together for a Better Future</h2>

            <p>
              We believe that effective school governance,
              collaboration and responsible leadership can help
              create better educational opportunities for every
              student at ABC School.
            </p>
          </div>

          <FaChartLine className="committee-commitment-decoration" />
        </div>

      </div>
    </section>
  );
}

export default ManagingCommittee;

