import { Link, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaBullhorn,
} from "react-icons/fa";

import notices from "./NoticeData";


function Notice() {

  const { id } = useParams();

  const notice = notices.find(
    (item) => item.id === Number(id)
  );


  // Notice not found
  if (!notice) {

    return (
      <section className="notice-section">

        <div className="notice-container">

          <Link
            to="/notice"
            className="notice-back-btn"
          >
            <FaArrowLeft />
            Back to All Notices
          </Link>


          <div className="no-notice">

            <div className="no-notice-icon">
              <FaBullhorn />
            </div>

            <div>

              <h3>
                Notice Not Found
              </h3>

              <p>
                The notice you are looking for does not exist.
              </p>

            </div>

          </div>

        </div>

      </section>
    );
  }


  return (
    <section className="notice-section">

      <div className="notice-container">

        {/* Back Button */}
        <Link
          to="/notice"
          className="notice-back-btn"
        >
          <FaArrowLeft />
          Back to All Notices
        </Link>


        {/* Single Notice */}
        <div className="single-notice">

          <div className="single-notice-header">

            <div className="notice-icon">
              <FaBullhorn />
            </div>

            <div>

              <span>
                ABC SCHOOL NOTICE
              </span>

              <h1>
                {notice.title}
              </h1>

            </div>

          </div>


          {/* Date */}
          <div className="single-notice-date">

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


          {/* New Badge */}
          {notice.new && (
            <span className="new-badge">
              NEW
            </span>
          )}


          {/* Description */}
          <div className="single-notice-content">

            <p>
              {notice.description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Notice;