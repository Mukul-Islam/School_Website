
import "./Founder.css";

function Founder() {
  return (
    <section className="founder-section">
      <div className="founder-container">

        {/* Page Header */}
        <div className="founder-header">
          <span>THE FOUNDER</span>

          <h1>
            The Vision Behind <strong>ABC School</strong>
          </h1>

          <p>
            A story of vision, dedication and a lasting commitment to education.
          </p>
        </div>


        {/* Founder Profile */}
        <div className="founder-profile">

          {/* Image Side */}
          <div className="founder-image-wrapper">

            <div className="founder-image-frame">
              <img
                src="/founder.jpg"
                alt="Founder of ABC School"
              />
            </div>

            <div className="founder-image-caption">
              <span>FOUNDER</span>
              <h3>Founder of ABC School</h3>
            </div>

          </div>


          {/* Story Side */}
          <div className="founder-story">

            <span className="founder-label">
              A VISIONARY JOURNEY
            </span>

            <h2>
              Building a Foundation
              <br />
              for Future Generations
            </h2>

            <p>
              The journey of ABC School is closely connected with the vision
              of its founder—a vision rooted in the belief that education can
              transform individuals, families and society.
            </p>

            <p>
              With a deep commitment to learning and personal development,
              the founder envisioned a school where students would receive
              not only academic knowledge, but also the values and confidence
              needed to become responsible members of society.
            </p>

            <p>
              The aim was to create an environment where students could ask
              questions, explore their abilities, develop discipline and
              prepare themselves for the future. This vision gradually became
              the foundation upon which ABC School continued to grow.
            </p>

            <p>
              The founder's philosophy has always emphasized that true
              education extends beyond examination results. Knowledge,
              character, respect, responsibility and perseverance are equally
              important in shaping a successful individual.
            </p>

            <p>
              Today, the spirit of that vision continues through the teachers,
              students and members of the ABC School community. Every
              achievement and every new generation of students adds another
              chapter to the journey that began with a dream for better
              education.
            </p>

          </div>

        </div>


        {/* Founder Philosophy */}
        <div className="founder-philosophy">

          <div className="philosophy-icon">
            <i className="fa-solid fa-lightbulb"></i>
          </div>

          <div className="philosophy-content">

            <span>
              FOUNDER'S PHILOSOPHY
            </span>

            <h2>
              Education Should Shape Both
              <br />
              Knowledge and Character
            </h2>

            <p>
              The foundation of ABC School is built on the belief that
              education should help students become knowledgeable, confident,
              disciplined and compassionate individuals.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Founder;

