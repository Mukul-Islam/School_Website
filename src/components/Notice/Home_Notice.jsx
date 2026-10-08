import { Link } from "react-router-dom";

import "./Notice.css";

import {
  FaArrowRight,
  FaBell,
  FaBullhorn,
} from "react-icons/fa";

import notices from "./NoticeData";


function Home_Notice() {

  const latestNotices = notices.slice(0, 3);

  return (
    <section className="notice-section">

      <div className="notice-container">

        {/* Header */}
        <div className="notice-header">

          <div className="notice-heading">

            <div className="notice-icon">
              <FaBullhorn />
            </div>

            <div>
              <span>LATEST NOTICE</span>
              <h2>School Notice Board</h2>
            </div>

          </div>


          {/* View All Notices */}
          <Link
            to="/notice"
            className="notice-all-btn"
          >
            View All Notices

            <FaArrowRight />
          </Link>

        </div>


        {/* Latest Notice List */}
        <div className="notice-list">

          {latestNotices.length === 0 ? (

            <div className="no-notice">

              <div className="no-notice-icon">
                <FaBell />
              </div>

              <div>
                <h3>
                  No Notices Available
                </h3>

                <p>
                  There are currently no new notices from the school.
                </p>
              </div>

            </div>

          ) : (

            latestNotices.map((notice) => (

              <Link
                to={`/notice/${notice.id}`}
                className="notice-item"
                key={notice.id}
              >

                {/* Date */}
                <div className="notice-date">

                  <strong>
                    {notice.date}
                  </strong>

                  <span>
                    {notice.month}
                  </span>

                  <small>
                    {notice.year}
                  </small>

                </div>


                {/* Content */}
                <div className="notice-content">

                  <div className="notice-title">

                    <h3>
                      {notice.title}
                    </h3>

                    {notice.new && (
                      <span className="new-badge">
                        NEW
                      </span>
                    )}

                  </div>

                  <p>
                    {notice.description}
                  </p>

                </div>


                {/* Arrow */}
                <div className="notice-arrow">
                  <FaArrowRight />
                </div>

              </Link>

            ))

          )}

        </div>

      </div>

    </section>
  );
}

export default Home_Notice;