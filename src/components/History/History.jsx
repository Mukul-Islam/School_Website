import "./History.css";

function History() {
  return (
    <section className="history-section">
      <div className="history-container">

        {/* Page Header */}
        <div className="history-header">
          <div className="history-header-line"></div>

          <span>THE STORY OF OUR SCHOOL</span>

          <h1>
            A Journey Built on
            <strong> Education & Values</strong>
          </h1>

          <p>
            The story of ABC School is a story of vision, dedication,
            learning and the generations of students who have been part
            of its journey.
          </p>
        </div>


        {/* Story Introduction */}
        <div className="history-story-intro">

          <div className="story-intro-label">
            <span>01</span>
            <p>OUR STORY</p>
          </div>

          <div className="story-intro-content">
            <h2>
              Where the Journey Began
            </h2>

            <p>
              Every institution has a beginning. ABC School began with a
              vision to create a place where education would go beyond
              classrooms and textbooks. The idea was to build an environment
              where young minds could learn, develop character and discover
              their own potential.
            </p>

            <p>
              From the very beginning, the school has believed that a good
              education should prepare students not only for examinations,
              but also for life. Knowledge, discipline, respect and
              responsibility became important parts of the school's
              educational philosophy.
            </p>
          </div>

        </div>


        {/* Timeline Story */}
        <div className="history-story">

          <div className="history-story-line"></div>


          {/* Chapter 01 */}
          <article className="history-chapter">

            <div className="chapter-marker">
              <span>01</span>
            </div>

            <div className="chapter-content">

              <div className="chapter-label">
                THE BEGINNING
              </div>

              <h2>
                A Vision Takes Shape
              </h2>

              <p>
                The early journey of ABC School was shaped by a simple
                belief: every child deserves an opportunity to receive
                quality education in a supportive environment.
              </p>

              <p>
                With this vision, the school began building an educational
                community where teachers and students could work together,
                learn together and grow together.
              </p>

            </div>

          </article>


          {/* Chapter 02 */}
          <article className="history-chapter">

            <div className="chapter-marker">
              <span>02</span>
            </div>

            <div className="chapter-content">

              <div className="chapter-label">
                GROWING TOGETHER
              </div>

              <h2>
                From a School to a Community
              </h2>

              <p>
                As the years passed, ABC School gradually became more than
                a place for academic learning. Students, teachers, parents
                and the wider community became an important part of its
                continuing story.
              </p>

              <p>
                Academic activities were complemented by cultural programs,
                creative activities, discipline and opportunities for
                students to develop confidence and leadership.
              </p>

            </div>

          </article>


          {/* Chapter 03 */}
          <article className="history-chapter">

            <div className="chapter-marker">
              <span>03</span>
            </div>

            <div className="chapter-content">

              <div className="chapter-label">
                A NEW CHAPTER
              </div>

              <h2>
                Adapting to a Changing World
              </h2>

              <p>
                Education continues to change, and ABC School has continued
                to evolve with it. New learning approaches, technology and
                changing educational needs have opened new possibilities
                for students.
              </p>

              <p>
                While embracing change, the school remains committed to
                preserving the values that have always been at the heart
                of its educational journey.
              </p>

            </div>

          </article>


          {/* Chapter 04 */}
          <article className="history-chapter">

            <div className="chapter-marker">
              <span>04</span>
            </div>

            <div className="chapter-content">

              <div className="chapter-label">
                TODAY
              </div>

              <h2>
                Continuing the Journey
              </h2>

              <p>
                Today, ABC School continues its journey with the same
                commitment to education, discipline and personal growth.
                Every new student brings a new story, a new dream and a
                new possibility.
              </p>

              <p>
                The school looks forward to continuing this journey with
                its students, teachers, parents and community—building a
                future where knowledge is combined with character and
                confidence.
              </p>

            </div>

          </article>

        </div>


        {/* Legacy Section */}
        <div className="history-legacy">

          <div className="legacy-mark">
            <i className="fa-solid fa-quote-left"></i>
          </div>

          <div className="legacy-text">

            <p>
              “The history of a school is not only written in its buildings
              or records. It is written in the lives, memories and
              achievements of the students who pass through its doors.”
            </p>

            <span>
              — The Spirit of ABC School
            </span>

          </div>

        </div>


        {/* Closing */}
        <div className="history-closing">

          <span>THE JOURNEY CONTINUES</span>

          <h2>
            Yesterday built our foundation.
            <br />
            Tomorrow inspires our vision.
          </h2>

          <p>
            And today, we continue to learn, grow and move forward together.
          </p>

        </div>

      </div>
    </section>
  );
}

export default History;

