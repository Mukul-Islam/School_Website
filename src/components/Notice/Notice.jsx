function Notice() {
  const notices = [];

  return (
    <section className="notice-section">
      <div className="notice-container">

        {/* Header */}
        <div className="notice-header">
          <div className="notice-heading">
            <div className="notice-icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>

            <div>
              <span>LATEST NOTICE</span>
              <h2>School Notice Board</h2>
            </div>
          </div>

          <a href="#" className="notice-all-btn">
            View All Notices
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Notice List */}
        <div className="notice-list">

          {notices.length === 0 ? (
            <div className="no-notice">
              <div className="no-notice-icon">
                <i className="fa-regular fa-bell"></i>
              </div>

              <div>
                <h3>No Notices Available</h3>
                <p>
                  There are currently no new notices from the school.
                </p>
              </div>
            </div>
          ) : (
            notices.map((notice) => (
              <a
                href="#"
                className="notice-item"
                key={notice.id}
              >
                <div className="notice-date">
                  <strong>{notice.date}</strong>
                  <span>{notice.month}</span>
                  <small>{notice.year}</small>
                </div>

                <div className="notice-content">
                  <div className="notice-title">
                    <h3>{notice.title}</h3>

                    {notice.new && (
                      <span className="new-badge">NEW</span>
                    )}
                  </div>

                  <p>{notice.description}</p>
                </div>

                <div className="notice-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
            ))
          )}

        </div>

      </div>
    </section>
  );
}

export default Notice;