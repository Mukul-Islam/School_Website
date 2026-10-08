import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBullhorn,
} from "react-icons/fa";

import notices from "./NoticeData";


function Notices() {

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
              <span>ABC SCHOOL</span>

              <h2>
                All Notices
              </h2>
            </div>

          </div>

        </div>


        {/* All Notices */}
        <div className="notice-list">

          {notices.length === 0 ? (

            <div className="no-notice">

              <div className="no-notice-icon">
                <FaBullhorn />
              </div>

              <div>

                <h3>
                  No Notices Available
                </h3>

                <p>
                  There are currently no notices from the school.
                </p>

              </div>

            </div>

          ) : (

            notices.map((notice) => (

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

export default Notices;