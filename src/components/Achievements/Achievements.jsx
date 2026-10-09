import { Link } from "react-router-dom";

import "./Achievements.css";

import achievements from "./AchievementData";


function Achievements() {

  return (
    <section className="achievement-section achievements-page">

      <div className="achievement-container">

        {/* Page Heading */}
        <div className="achievement-heading">

          <span className="achievement-subtitle">
            OUR SUCCESS
          </span>

          <h2>
            Student
            <span> Achievements</span>
          </h2>

          <p>
            Discover the achievements, talents and success stories
            of the students of ABC School. We are proud to celebrate
            every achievement and encourage our students to reach
            their full potential.
          </p>

        </div>


        {/* All Achievements */}
        <div className="achievement-grid">

          {achievements.map((achievement) => (

            <div
              className="achievement-card"
              key={achievement.id}
            >

              {/* Image */}
              <div className="achievement-image">

                <img
                  src={achievement.image}
                  alt={achievement.title}
                />

                <div className="achievement-icon">
                  <i className={achievement.icon}></i>
                </div>

              </div>


              {/* Content */}
              <div className="achievement-content">

                <span className="achievement-category">
                  {achievement.category}
                </span>

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

                <div className="achievement-meta">
                  <span>
                    {achievement.year}
                  </span>

                  <span>
                    ABC School
                  </span>
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Back Home */}
        <div className="achievement-button-wrapper">

          <Link
            to="/"
            className="achievement-button"
          >
            <i className="fa-solid fa-arrow-left"></i>

            Back to Home

          </Link>

        </div>

      </div>

    </section>
  );
}

export default Achievements;