
import {
  FaBullseye,
  FaEye,
  FaBookOpen,
  FaGraduationCap,
  FaHeart,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

import "./MissionVision.css";

function MissionVision() {
  const coreValues = [
    {
      icon: <FaBookOpen />,
      title: "Quality Education",
      description:
        "Providing quality education that builds strong academic foundations and lifelong learning habits.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Discipline & Integrity",
      description:
        "Encouraging honesty, discipline, responsibility and respect in every aspect of school life.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creativity & Innovation",
      description:
        "Inspiring students to think critically, explore new ideas and develop their unique talents.",
    },
    {
      icon: <FaHeart />,
      title: "Care & Respect",
      description:
        "Creating a caring and inclusive environment where every student feels valued and supported.",
    },
    {
      icon: <FaHandshake />,
      title: "Teamwork",
      description:
        "Building cooperation, leadership and positive relationships among students, teachers and families.",
    },
    {
      icon: <FaStar />,
      title: "Excellence",
      description:
        "Motivating every learner to achieve their potential and continuously improve.",
    },
  ];

  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        {/* Page Header */}
        <div className="mission-vision-header">
          <span className="mission-vision-eyebrow">
            WHO WE ARE
          </span>

          <h1 className="mission-vision-heading">
            Our Mission & <strong>Vision</strong>
          </h1>

          <p className="mission-vision-intro">
            At ABC School, we believe that education is the foundation
            of a better future. Our mission and vision guide us in
            nurturing knowledgeable, confident and responsible
            individuals.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="mission-vision-grid">
          <article className="mission-vision-card mission-card">
            <div className="mission-vision-icon">
              <FaBullseye />
            </div>

            <span className="mission-vision-label">
              OUR MISSION
            </span>

            <h2>Empowering Every Learner</h2>

            <p>
              Our mission is to provide quality education in a safe,
              supportive and inspiring environment where every student
              can discover their potential and develop a love for
              learning.
            </p>

            <p>
              We strive to nurture academic excellence, moral values,
              creativity, discipline and critical thinking so that
              our students become confident, compassionate and
              responsible citizens.
            </p>

            <div className="mission-vision-card-footer">
              <FaGraduationCap />
              <span>Learning Today, Leading Tomorrow</span>
            </div>
          </article>

          <article className="mission-vision-card vision-card">
            <div className="mission-vision-icon">
              <FaEye />
            </div>

            <span className="mission-vision-label">
              OUR VISION
            </span>

            <h2>Building a Brighter Future</h2>

            <p>
              Our vision is to become a trusted center of learning
              recognized for educational excellence, strong character
              development and a commitment to the growth of every
              student.
            </p>

            <p>
              We aspire to prepare future generations with the
              knowledge, skills, confidence and values they need
              to face challenges, embrace opportunities and make
              a positive contribution to society.
            </p>

            <div className="mission-vision-card-footer">
              <FaUsers />
              <span>Inspiring Minds, Shaping Futures</span>
            </div>
          </article>
        </div>

        {/* Core Values */}
        <div className="mission-vision-values">
          <div className="mission-vision-values-header">
            <span className="mission-vision-eyebrow">
              WHAT GUIDES US
            </span>

            <h2>Our Core Values</h2>

            <p>
              The principles that shape our teaching, learning and
              school community.
            </p>
          </div>

          <div className="mission-vision-values-grid">
            {coreValues.map((value, index) => (
              <article
                className="mission-vision-value-card"
                key={value.title}
              >
                <div className="mission-vision-value-icon">
                  {value.icon}
                </div>

                <div className="mission-vision-value-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mission-vision-commitment">
          <div className="mission-vision-commitment-icon">
            <FaHeart />
          </div>

          <div className="mission-vision-commitment-content">
            <span>OUR COMMITMENT</span>

            <h2>Every Student Matters</h2>

            <p>
              At ABC School, we are committed to helping every student
              learn, grow and succeed. Through dedicated teaching,
              supportive guidance and a positive learning environment,
              we aim to help each child build a strong foundation for
              a meaningful and successful life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;

