
import { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaTimes,
  FaArrowRight,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import "./Events.css";

const eventsData = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "2026-02-15",
    time: "9:00 AM - 3:00 PM",
    location: "School Playground",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
    description:
      "Our Annual Sports Day encourages students to develop teamwork, discipline, confidence, and sportsmanship through a variety of sporting activities.",
  },
  {
    id: 2,
    title: "Science Fair",
    date: "2026-03-10",
    time: "10:00 AM - 2:00 PM",
    location: "School Auditorium",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    description:
      "Students showcase their science projects, experiments, and innovative ideas. The event promotes curiosity, creativity, and practical learning.",
  },
  {
    id: 3,
    title: "Cultural Programme",
    date: "2026-04-14",
    time: "11:00 AM - 4:00 PM",
    location: "School Auditorium",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    description:
      "A celebration of culture and creativity featuring music, dance, poetry, drama, and performances by our talented students.",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    date: "2026-05-20",
    time: "10:00 AM - 1:00 PM",
    location: "School Campus",
    category: "Meeting",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
    description:
      "An opportunity for parents and teachers to discuss student progress, academic performance, and ways to support learning at home and school.",
  },
  {
    id: 5,
    title: "Prize Giving Ceremony",
    date: "2026-08-20",
    time: "10:00 AM - 1:00 PM",
    location: "School Auditorium",
    category: "Ceremony",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
    description:
      "Students are recognized for their academic achievements, outstanding performances, creativity, and contributions to school life.",
  },
  {
    id: 6,
    title: "Annual Examination",
    date: "2026-11-15",
    time: "According to the exam routine",
    location: "School Classrooms",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85",
    description:
      "The annual examination evaluates student learning and academic progress throughout the school year. Students should follow the official examination routine.",
  },
];

const categories = [
  "All Events",
  "Academic",
  "Sports",
  "Cultural",
  "Meeting",
  "Ceremony",
];

function Events() {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      activeCategory === "All Events" ||
      event.category === activeCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-hero">
          <span className="events-eyebrow">LIFE AT ABC SCHOOL</span>
          <h1 className="events-heading">School Events</h1>
          <p>
            Explore the activities, celebrations, and educational events
            that bring our school community together.
          </p>
        </div>

        <div className="events-toolbar">
          <div className="events-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search events"
            />
          </div>

          <div className="events-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "events-filter active"
                    : "events-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="events-results">
          <h2>Explore Our Events</h2>
          <span>
            {filteredEvents.length}{" "}
            {filteredEvents.length === 1 ? "event" : "events"} found
          </span>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <article className="events-card" key={event.id}>
                <div className="events-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="events-image"
                    loading="lazy"
                  />
                  <span className="events-category">
                    {event.category}
                  </span>
                </div>

                <div className="events-card-content">
                  <div className="events-date">
                    <FaCalendarAlt />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  <h3>{event.title}</h3>
                  <p className="events-description">
                    {event.description}
                  </p>

                  <div className="events-meta">
                    <span>
                      <FaClock /> {event.time}
                    </span>
                    <span>
                      <FaMapMarkerAlt /> {event.location}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="events-details-btn"
                    onClick={() => setSelectedEvent(event)}
                  >
                    View Details <FaArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="events-empty">
            <FaCalendarAlt />
            <h3>No events found</h3>
            <p>Try another search term or select a different category.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Events");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="events-community">
          <div className="events-community-icon">
            <FaUsers />
          </div>
          <div>
            <h2>Be Part of Our School Community</h2>
            <p>
              Stay connected with school activities and upcoming
              programmes through official school announcements.
            </p>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div
          className="events-modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="events-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="events-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="events-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
            >
              <FaTimes />
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="events-modal-image"
            />

            <div className="events-modal-content">
              <span className="events-category events-modal-category">
                {selectedEvent.category}
              </span>

              <h2 id="events-modal-title">{selectedEvent.title}</h2>
              <p>{selectedEvent.description}</p>

              <div className="events-modal-info">
                <span>
                  <FaCalendarAlt />
                  {formatDate(selectedEvent.date)}
                </span>
                <span>
                  <FaClock />
                  {selectedEvent.time}
                </span>
                <span>
                  <FaMapMarkerAlt />
                  {selectedEvent.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;

