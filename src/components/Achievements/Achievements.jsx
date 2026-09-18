
import "./Achievements.css";

function Achievement() {
  const achievements = [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Academic Excellence",
      description:
        "Our students continue to achieve excellent results through dedication, hard work and quality education.",
    },
    {
      icon: "fa-solid fa-trophy",
      title: "Sports Achievement",
      description:
        "Students have demonstrated outstanding talent and sportsmanship in various competitions.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Creative Talent",
      description:
        "Our students actively participate and succeed in art, culture and other creative activities.",
    },
    {
      icon: "fa-solid fa-award",
      title: "Awards & Recognition",
      description:
        "We proudly celebrate students who receive awards, scholarships and recognition for their achievements.",
    },
  ];

  return (
    <section className="achievement-section" id="achievement">
      <div className="achievement-container">

        <div className="achievement-heading">
          <span className="achievement-subtitle">OUR SUCCESS</span>

          <h2>
            Celebrating Our Students'
            <span> Achievements</span>
          </h2>

          <p>
            We believe every achievement is a reflection of dedication,
            talent and hard work. At ABC School, we celebrate the success
            of every student.
          </p>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>

              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>

              <div className="achievement-content">
                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>

                <a href="#achievements">
                  Learn More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

            </div>
          ))}
        </div>

        <div className="achievement-button-wrapper">
          <a href="#achievements" className="achievement-button">
            View All Achievements
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Achievement;
