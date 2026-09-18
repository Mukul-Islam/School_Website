
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-image-wrapper">

          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
              alt="Students in classroom"
            />
          </div>

          <div className="about-experience">
            <strong>25+</strong>
            <span>Years of Excellence</span>
          </div>

          <div className="about-decoration"></div>

        </div>


        {/* RIGHT SIDE */}

        <div className="about-content">

          <span className="about-subtitle">
            ABOUT OUR SCHOOL
          </span>

          <h2>
            Inspiring Young Minds
            <span> For A Better Tomorrow</span>
          </h2>

          <p className="about-intro">
            ABC School is committed to providing
            quality education in a safe, caring and inspiring
            environment where every student can learn, grow
            and achieve her full potential.
          </p>

          <p className="about-description">
            We believe education is not only about academic
            success. Our focus is also on developing character,
            creativity, leadership and essential life skills
            that prepare our students for a bright future.
          </p>


          {/* FEATURES */}

          <div className="about-features">

            <div className="about-feature">

              <div className="feature-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>

              <div>
                <h3>Quality Education</h3>
                <p>
                  Building strong academic foundations
                  through effective learning.
                </p>
              </div>

            </div>


            <div className="about-feature">

              <div className="feature-icon">
                <i className="fa-solid fa-user-graduate"></i>
              </div>

              <div>
                <h3>Student Development</h3>
                <p>
                  Encouraging confidence, creativity
                  and leadership.
                </p>
              </div>

            </div>

          </div>


          {/* BUTTON */}

          <Link to="/about-school" className="about-button">
    Discover More
    <i className="fa-solid fa-arrow-right"></i>
</Link>

        </div>

      </div>

    </section>
  );
}

export default About;