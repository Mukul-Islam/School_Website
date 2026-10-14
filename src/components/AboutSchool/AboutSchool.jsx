
import {
  FaSchool,
  FaBookOpen,
  FaUserGraduate,
  FaPeopleGroup,
} from "react-icons/fa6";

import "./AboutSchool.css";

function AboutSchool() {
  return (
    <section className="about-school-section">
      <div className="about-school-container">
        {/* Page Header */}
        <div className="about-school-header">
          <span>ABOUT OUR SCHOOL</span>

          <h1>
            About <strong>ABC School</strong>
          </h1>

          <p>
            A place where knowledge, character and excellence come together.
          </p>
        </div>

        {/* Introduction */}
        <div className="about-school-introduction">
          <div className="about-school-content">
            <span className="about-school-label">WHO WE ARE</span>

            <h2>Welcome to ABC School</h2>

            <p>
              ABC School is committed to providing quality education in a
              supportive, disciplined and inspiring environment. Our goal is
              to help students develop strong academic foundations along
              with good character, confidence and a sense of responsibility.
            </p>

            <p>
              We believe that education is not only about achieving good
              results. It is also about developing creativity, leadership,
              discipline and the ability to face the challenges of the
              future.
            </p>

            <p>
              Through dedicated teachers, modern learning approaches and
              various educational activities, ABC School strives to create
              an environment where every student can learn, grow and achieve
              their full potential.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="about-school-highlight">
            <div className="highlight-icon">
              <FaSchool aria-hidden="true" />
            </div>

            <h3>Building the Future</h3>

            <p>
              We focus on academic excellence, moral values and the overall
              development of our students.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="about-school-approach">
          <div className="approach-heading">
            <span>OUR APPROACH</span>

            <h2>Education Beyond the Classroom</h2>

            <p>
              We believe every student has unique potential. Our approach is
              designed to encourage students to learn, explore and grow.
            </p>
          </div>

          <div className="approach-grid">
            {/* Quality Education */}
            <div className="approach-card">
              <div className="approach-icon">
                <FaBookOpen aria-hidden="true" />
              </div>

              <h3>Quality Education</h3>

              <p>
                Providing students with a strong academic foundation and
                effective learning opportunities.
              </p>
            </div>

            {/* Student Development */}
            <div className="approach-card">
              <div className="approach-icon">
                <FaUserGraduate aria-hidden="true" />
              </div>

              <h3>Student Development</h3>

              <p>
                Encouraging confidence, creativity, discipline and leadership
                among students.
              </p>
            </div>

            {/* Supportive Environment */}
            <div className="approach-card">
              <div className="approach-icon">
                <FaPeopleGroup aria-hidden="true" />
              </div>

              <h3>Supportive Environment</h3>

              <p>
                Creating a safe and friendly environment where students can
                learn and grow with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="about-school-commitment">
          <div className="commitment-heading">
            <span>OUR COMMITMENT</span>

            <h2>Preparing Students for a Better Future</h2>
          </div>

          <p>
            ABC School is dedicated to maintaining a learning environment
            where students are encouraged to dream, work hard and become
            responsible members of society.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSchool;