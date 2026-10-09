import { Link } from "react-router-dom";

import "./Achievements.css";

import achievements from "./AchievementData";


function Achievement() {

  const featuredAchievements = achievements.slice(0, 4);

  return (
    <section
      className="achievement-section"
      id="achievement"
    >

      <div className="achievement-container">

        {/* Heading */}
        <div className="achievement-heading">

          <span className="achievement-subtitle">
            OUR SUCCESS
          </span>

          <h2>
            Celebrating Our Students'
            <span> Achievements</span>
          </h2>

          <p>
            We believe every achievement is a reflection of
            dedication, talent and hard work. At ABC School,
            we celebrate the success of every student.
          </p>

        </div>


        {/* Achievement Cards */}
        <div className="achievement-grid">

          {featuredAchievements.map((achievement) => (

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
                  {achievement.shortDescription}
                </p>

                <Link
                  to={`/achievements/${achievement.id}`}
                  className="achievement-learn-more"
                >
                  Learn More

                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* View All */}
        <div className="achievement-button-wrapper">

          <Link
            to="/achievements"
            className="achievement-button"
          >
            View All Achievements

            <i className="fa-solid fa-arrow-right"></i>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Achievement;