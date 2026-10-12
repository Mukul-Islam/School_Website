
import { useState } from "react";
import {
  FaCalendarAlt,
  FaBookOpen,
  FaClipboardCheck,
  FaBullhorn,
  FaUmbrellaBeach,
  FaFlag,
  FaSearch,
  FaTimes,
  FaPrint,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "./AcademicCalendar.css";

const calendarData = [
  {
    id: 1,
    title: "New Academic Session",
    titleBn: "নতুন শিক্ষাবর্ষ শুরু",
    date: "2026-01-01",
    endDate: "",
    category: "Academic",
    description:
      "নতুন শিক্ষাবর্ষের ক্লাস, পাঠ্যক্রম এবং শিক্ষার্থীদের প্রস্তুতি সংক্রান্ত কার্যক্রম।",
    details:
      "শিক্ষার্থীরা শ্রেণি শিক্ষক ও স্কুল কর্তৃপক্ষের কাছ থেকে নতুন শিক্ষাবর্ষের সময়সূচি এবং প্রয়োজনীয় নির্দেশনা সংগ্রহ করবে।",
  },
  {
    id: 2,
    title: "First Term Examination",
    titleBn: "প্রথম সাময়িক পরীক্ষা",
    date: "2026-04-15",
    endDate: "2026-04-25",
    category: "Examination",
    description:
      "প্রথম সাময়িক পরীক্ষার সম্ভাব্য সময়সূচি।",
    details:
      "বিষয়ভিত্তিক পরীক্ষার রুটিন, পরীক্ষার সময় এবং অন্যান্য নির্দেশনা স্কুল কর্তৃপক্ষের প্রকাশিত বিজ্ঞপ্তি অনুযায়ী অনুসরণ করতে হবে।",
  },
  {
    id: 3,
    title: "Mid-Year Progress Review",
    titleBn: "মধ্যবর্তী অগ্রগতি মূল্যায়ন",
    date: "2026-06-15",
    endDate: "",
    category: "Academic",
    description:
      "শিক্ষার্থীদের পড়াশোনার অগ্রগতি পর্যালোচনা ও উন্নয়নের ক্ষেত্র চিহ্নিত করা।",
    details:
      "শিক্ষার্থীদের ফলাফল, শ্রেণিকাজ এবং শেখার অগ্রগতি মূল্যায়ন করা হবে।",
  },
  {
    id: 4,
    title: "Summer Vacation",
    titleBn: "গ্রীষ্মকালীন ছুটি",
    date: "2026-06-20",
    endDate: "2026-06-30",
    category: "Holiday",
    description:
      "গ্রীষ্মকালীন ছুটির সম্ভাব্য সময়কাল।",
    details:
      "ছুটির তারিখ ও ক্লাস পুনরায় শুরুর দিন স্কুল কর্তৃপক্ষের বিজ্ঞপ্তি অনুযায়ী নিশ্চিত করতে হবে।",
  },
  {
    id: 5,
    title: "Second Term Examination",
    titleBn: "দ্বিতীয় সাময়িক পরীক্ষা",
    date: "2026-08-15",
    endDate: "2026-08-25",
    category: "Examination",
    description:
      "দ্বিতীয় সাময়িক পরীক্ষার সম্ভাব্য সময়সূচি।",
    details:
      "চূড়ান্ত পরীক্ষার রুটিন, বিষয় এবং সময় স্কুলের অফিসিয়াল বিজ্ঞপ্তির মাধ্যমে জানানো হবে।",
  },
  {
    id: 6,
    title: "Annual Sports & Cultural Program",
    titleBn: "বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠান",
    date: "2026-09-15",
    endDate: "",
    category: "Events",
    description:
      "শিক্ষার্থীদের খেলাধুলা, সৃজনশীলতা ও সাংস্কৃতিক প্রতিভা বিকাশের অনুষ্ঠান।",
    details:
      "অংশগ্রহণের নিয়ম, বিভাগ এবং অনুষ্ঠানের সময়সূচি স্কুল কর্তৃপক্ষের নির্দেশনা অনুযায়ী নির্ধারিত হবে।",
  },
  {
    id: 7,
    title: "Annual Examination",
    titleBn: "বার্ষিক পরীক্ষা",
    date: "2026-11-15",
    endDate: "2026-11-30",
    category: "Examination",
    description:
      "বার্ষিক পরীক্ষার সম্ভাব্য সময়কাল।",
    details:
      "পরীক্ষার চূড়ান্ত রুটিন এবং প্রস্তুতি সংক্রান্ত নির্দেশনা অফিসিয়াল নোটিশে প্রকাশ করা হবে।",
  },
  {
    id: 8,
    title: "Annual Result Publication",
    titleBn: "বার্ষিক ফলাফল প্রকাশ",
    date: "2026-12-15",
    endDate: "",
    category: "Results",
    description:
      "বার্ষিক পরীক্ষার ফলাফল প্রকাশের সম্ভাব্য তারিখ।",
    details:
      "ফলাফল প্রকাশের তারিখ, ফলাফল সংগ্রহের পদ্ধতি এবং পরবর্তী শ্রেণিতে উত্তীর্ণ হওয়ার তথ্য স্কুল কর্তৃপক্ষ জানাবে।",
  },
];

const categories = [
  "All Events",
  "Academic",
  "Examination",
  "Holiday",
  "Events",
  "Results",
];

const categoryIcons = {
  Academic: FaBookOpen,
  Examination: FaClipboardCheck,
  Holiday: FaUmbrellaBeach,
  Events: FaFlag,
  Results: FaBullhorn,
};

const categoryLabels = {
  Academic: "Academic",
  Examination: "Examination",
  Holiday: "Holiday",
  Events: "School Events",
  Results: "Results",
};

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
}

function AcademicCalendar() {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = calendarData
    .filter(
      (event) =>
        activeCategory === "All Events" ||
        event.category === activeCategory
    )
    .filter((event) => {
      const searchText = searchTerm.toLowerCase();

      return (
        event.title.toLowerCase().includes(searchText) ||
        event.titleBn.includes(searchTerm) ||
        event.description.toLowerCase().includes(searchText)
      );
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  function handlePrint() {
    window.print();
  }

  return (
    <section className="academic-calendar-section">
      <div className="academic-calendar-container">
        <div className="academic-calendar-hero">
          <span className="academic-calendar-eyebrow">
            ABC SCHOOL
          </span>

          <h1 className="academic-calendar-heading">
            Academic Calendar
          </h1>

          <p className="academic-calendar-intro">
            শিক্ষাবর্ষের গুরুত্বপূর্ণ কার্যক্রম, পরীক্ষা, ছুটি ও
            ফলাফল প্রকাশের সময়সূচি এক জায়গায় দেখুন।
          </p>

          <div className="academic-calendar-hero-actions">
            <a href="/contact" className="academic-calendar-contact-btn">
              Contact School <FaArrowRight />
            </a>

            <button
              type="button"
              className="academic-calendar-print-btn"
              onClick={handlePrint}
            >
              <FaPrint /> Print Calendar
            </button>
          </div>
        </div>

        <div className="academic-calendar-summary">
          <div className="academic-calendar-summary-card">
            <span className="academic-calendar-summary-icon">
              <FaCalendarAlt />
            </span>
            <div>
              <h3>{calendarData.length}</h3>
              <p>Listed Activities</p>
            </div>
          </div>

          <div className="academic-calendar-summary-card">
            <span className="academic-calendar-summary-icon">
              <FaClipboardCheck />
            </span>
            <div>
              <h3>
                {
                  calendarData.filter(
                    (event) => event.category === "Examination"
                  ).length
                }
              </h3>
              <p>Examination Periods</p>
            </div>
          </div>

          <div className="academic-calendar-summary-card">
            <span className="academic-calendar-summary-icon">
              <FaBullhorn />
            </span>
            <div>
              <h3>
                {
                  calendarData.filter(
                    (event) => event.category === "Events"
                  ).length
                }
              </h3>
              <p>School Events</p>
            </div>
          </div>
        </div>

        <div className="academic-calendar-section-heading">
          <div>
            <span className="academic-calendar-subtitle">
              IMPORTANT DATES
            </span>
            <h2>School Year at a Glance</h2>
            <p>
              প্রয়োজনীয় কার্যক্রম খুঁজতে ক্যাটাগরি নির্বাচন করো
              অথবা সার্চ করো।
            </p>
          </div>
        </div>

        <div className="academic-calendar-toolbar">
          <div className="academic-calendar-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`academic-calendar-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="academic-calendar-search">
            <FaSearch />
            <input
              type="search"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>

        <div className="academic-calendar-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => {
              const Icon = categoryIcons[event.category] || FaCalendarAlt;

              return (
                <article
                  className="academic-calendar-event"
                  key={event.id}
                >
                  <div className="academic-calendar-date">
                    <span>
                      {new Date(
                        `${event.date}T00:00:00`
                      ).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                    <strong>
                      {new Date(
                        `${event.date}T00:00:00`
                      ).getDate()}
                    </strong>
                    <small>
                      {new Date(
                        `${event.date}T00:00:00`
                      ).getFullYear()}
                    </small>
                  </div>

                  <div className="academic-calendar-event-content">
                    <span
                      className={`academic-calendar-event-category category-${event.category.toLowerCase()}`}
                    >
                      <Icon /> {categoryLabels[event.category]}
                    </span>

                    <h3>{event.title}</h3>
                    <h4>{event.titleBn}</h4>

                    <p>{event.description}</p>

                    <div className="academic-calendar-event-meta">
                      <span>
                        <FaClock />
                        {formatDate(event.date)}
                        {event.endDate
                          ? ` – ${formatDate(event.endDate)}`
                          : ""}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="academic-calendar-details-btn"
                    onClick={() => setSelectedEvent(event)}
                  >
                    Details <FaArrowRight />
                  </button>
                </article>
              );
            })
          ) : (
            <div className="academic-calendar-empty">
              <FaSearch />
              <h3>No events found</h3>
              <p>অন্য শব্দ বা ক্যাটাগরি দিয়ে আবার চেষ্টা করো।</p>
            </div>
          )}
        </div>

        <div className="academic-calendar-note">
          <FaBullhorn />
          <p>
            <strong>গুরুত্বপূর্ণ নোট:</strong> এখানে দেখানো তারিখগুলো
            ডেমো তথ্য। প্রকৃত একাডেমিক ক্যালেন্ডার, পরীক্ষা ও ছুটির
            তারিখ স্কুল কর্তৃপক্ষের প্রকাশিত বিজ্ঞপ্তি অনুযায়ী
            আপডেট করতে হবে।
          </p>
        </div>
      </div>

      {selectedEvent && (
        <div
          className="academic-calendar-modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="academic-calendar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="academic-calendar-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="academic-calendar-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close details"
            >
              <FaTimes />
            </button>

            <span className="academic-calendar-subtitle">
              {categoryLabels[selectedEvent.category]}
            </span>

            <h2 id="academic-calendar-modal-title">
              {selectedEvent.title}
            </h2>

            <h3 className="academic-calendar-modal-bangla">
              {selectedEvent.titleBn}
            </h3>

            <div className="academic-calendar-modal-date">
              <FaCalendarAlt />
              {formatDate(selectedEvent.date)}
              {selectedEvent.endDate
                ? ` – ${formatDate(selectedEvent.endDate)}`
                : ""}
            </div>

            <p>{selectedEvent.details}</p>

            <button
              type="button"
              className="academic-calendar-contact-btn academic-calendar-modal-done"
              onClick={() => setSelectedEvent(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default AcademicCalendar;

