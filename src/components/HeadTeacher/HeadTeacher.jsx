import "./HeadTeacher.css";

function HeadTeacher() {
  return (
    <section className="head-teacher-section">
      <div className="head-teacher-container">
        <div className="head-teacher-header">
          <span>SCHOOL LEADERSHIP</span>

          <h1>
            Meet Our <strong>Head Teacher</strong>
          </h1>

          <p>
            Leading with vision, responsibility and a commitment to quality
            education.
          </p>
        </div>

        <div className="head-teacher-profile">
          <div className="head-teacher-image-area">
            <div className="head-teacher-image">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85"
                alt="Head Teacher of ABC School"
              />
            </div>

            <div className="head-teacher-name">
              <span>HEAD TEACHER</span>
              <h3>Head Teacher</h3>
              <p>ABC School</p>
            </div>
          </div>

          <div className="head-teacher-message">
            <span className="head-teacher-label">
              MESSAGE FROM THE HEAD TEACHER
            </span>

            <h2>
              Education is the
              <br />
              foundation of a better future.
            </h2>

            <p>
              Welcome to ABC School. We believe that education is one of the
              most powerful ways to shape the future of a child and contribute
              positively to society.
            </p>

            <p>
              Our responsibility is not limited to helping students achieve good
              academic results. We strive to create an environment where every
              student can develop confidence, discipline, creativity and a
              strong sense of responsibility.
            </p>

            <p>
              Our teachers work with dedication to understand the individual
              needs of students and encourage them to discover their own
              abilities. We believe that when students receive proper guidance
              and support, they can achieve much more than they imagine.
            </p>

            <p>
              I sincerely hope that ABC School will continue to be a place where
              students learn with curiosity, grow with confidence and move
              forward with strong values.
            </p>

            <div className="head-teacher-signature">
              <span>With best wishes,</span>
              <strong>Head Teacher</strong>
              <small>ABC School</small>
            </div>
          </div>
        </div>

        <div className="leadership-section">
          <div className="leadership-heading">
            <span>OUR LEADERSHIP APPROACH</span>

            <h2>Leading Students Towards Excellence</h2>

            <p>
              Our school leadership focuses on creating a positive, disciplined
              and supportive environment for every student.
            </p>
          </div>

          <div className="leadership-grid">
            <div className="leadership-item">
              <div className="leadership-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>

              <h3>Academic Excellence</h3>

              <p>
                Encouraging students to develop strong academic foundations and
                a lifelong interest in learning.
              </p>
            </div>

            <div className="leadership-item">
              <div className="leadership-icon">
                <i className="fa-solid fa-heart"></i>
              </div>

              <h3>Student Wellbeing</h3>

              <p>
                Creating a caring environment where students feel supported,
                respected and confident.
              </p>
            </div>

            <div className="leadership-item">
              <div className="leadership-icon">
                <i className="fa-solid fa-compass"></i>
              </div>

              <h3>Future Leadership</h3>

              <p>
                Helping students develop responsibility, confidence and the
                leadership qualities needed for the future.
              </p>
            </div>
          </div>
        </div>

        <div className="head-teacher-closing">
          <div className="closing-icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>

          <div>
            <p>
              Every student has the potential to learn, grow and make a
              meaningful difference in the world.
            </p>

            <span>— ABC School</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadTeacher;
