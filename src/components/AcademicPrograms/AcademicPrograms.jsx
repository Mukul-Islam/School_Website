
import { useState } from "react";
import {
  FaBookOpen,
  FaChild,
  FaGraduationCap,
  FaFlask,
  FaLaptop,
  
  FaLanguage,
  FaMicroscope,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
  FaChalkboardTeacher,
  FaClipboardCheck,
} from "react-icons/fa";

import "./AcademicPrograms.css";

const programsData = [
  {
    id: 1,
    title: "Primary Education",
    subtitle: "প্রাথমিক শিক্ষা",
    classes: "Class 1 – 5",
    category: "Primary",
    icon: FaChild,
    description:
      "শিক্ষার্থীদের মৌলিক জ্ঞান, ভাষা, গণিত, নৈতিকতা ও সৃজনশীলতা বিকাশের উপযোগী শিক্ষাকার্যক্রম।",
    subjects: [
      "বাংলা",
      "English",
      "গণিত",
      "প্রাথমিক বিজ্ঞান",
      "বাংলাদেশ ও বিশ্বপরিচয়",
      "ধর্ম ও নৈতিক শিক্ষা",
    ],
    highlights: [
      "মৌলিক শিক্ষাগত দক্ষতা",
      "নিয়মিত শ্রেণিকক্ষ কার্যক্রম",
      "সৃজনশীল ও অংশগ্রহণমূলক শেখা",
      "শিক্ষার্থীর অগ্রগতি মূল্যায়ন",
    ],
  },
  {
    id: 2,
    title: "Junior Secondary",
    subtitle: "নিম্ন মাধ্যমিক শিক্ষা",
    classes: "Class 6 – 8",
    category: "Secondary",
    icon: FaBookOpen,
    description:
      "শিক্ষার্থীদের বিষয়ভিত্তিক জ্ঞান, বিশ্লেষণী চিন্তা এবং পরবর্তী শিক্ষাস্তরের জন্য প্রস্তুত করার কার্যক্রম।",
    subjects: [
      "বাংলা",
      "English",
      "গণিত",
      "বিজ্ঞান",
      "বাংলাদেশ ও বিশ্বপরিচয়",
      "তথ্য ও যোগাযোগ প্রযুক্তি",
    ],
    highlights: [
      "বিষয়ভিত্তিক শিক্ষা",
      "সমস্যা সমাধানের দক্ষতা",
      "শ্রেণিকাজ ও বাড়ির কাজ",
      "পরীক্ষা ও ধারাবাহিক মূল্যায়ন",
    ],
  },
  {
    id: 3,
    title: "Secondary Education",
    subtitle: "মাধ্যমিক শিক্ষা",
    classes: "Class 9 – 10",
    category: "Secondary",
    icon: FaGraduationCap,
    description:
      "উচ্চতর শিক্ষা ও ভবিষ্যৎ ক্যারিয়ারের ভিত্তি গড়ে তুলতে বিষয়ভিত্তিক জ্ঞান এবং পরীক্ষার প্রস্তুতি।",
    subjects: [
      "বাংলা",
      "English",
      "গণিত",
      "বিজ্ঞান ও বিভাগভিত্তিক বিষয়",
      "তথ্য ও যোগাযোগ প্রযুক্তি",
      "ধর্ম ও নৈতিক শিক্ষা",
    ],
    highlights: [
      "পাঠ্যক্রমভিত্তিক পাঠদান",
      "বিষয়ভিত্তিক অনুশীলন",
      "মডেল টেস্ট ও প্রস্তুতি",
      "শিক্ষাগত অগ্রগতি পর্যবেক্ষণ",
    ],
  },
  {
    id: 4,
    title: "Science Education",
    subtitle: "বিজ্ঞান শিক্ষা",
    classes: "Applicable Classes",
    category: "Specialized Learning",
    icon: FaFlask,
    description:
      "বিজ্ঞানভিত্তিক ধারণা, পর্যবেক্ষণ, যুক্তি ও ব্যবহারিক জ্ঞান বিকাশের ওপর গুরুত্ব দেওয়া হয়।",
    subjects: [
      "পদার্থবিজ্ঞান",
      "রসায়ন",
      "জীববিজ্ঞান",
      "গণিত",
      "বৈজ্ঞানিক অনুসন্ধান",
    ],
    highlights: [
      "বৈজ্ঞানিক চিন্তাভাবনা",
      "বাস্তব উদাহরণভিত্তিক শেখা",
      "পরীক্ষণ ও পর্যবেক্ষণ",
      "সমস্যা সমাধানের অনুশীলন",
    ],
  },
  {
    id: 5,
    title: "ICT & Digital Learning",
    subtitle: "তথ্য ও প্রযুক্তি শিক্ষা",
    classes: "As per School Curriculum",
    category: "Specialized Learning",
    icon: FaLaptop,
    description:
      "ডিজিটাল জ্ঞান, কম্পিউটার ব্যবহারের মৌলিক দক্ষতা এবং প্রযুক্তি সম্পর্কে সচেতনতা গড়ে তোলার কার্যক্রম।",
    subjects: [
      "কম্পিউটারের পরিচিতি",
      "ডিজিটাল নিরাপত্তা",
      "তথ্য ও যোগাযোগ প্রযুক্তি",
      "প্রযুক্তির দায়িত্বশীল ব্যবহার",
    ],
    highlights: [
      "ডিজিটাল সাক্ষরতা",
      "প্রযুক্তি ব্যবহারের দক্ষতা",
      "নিরাপদ ইন্টারনেট ব্যবহার",
      "ডিজিটাল সমস্যা সমাধান",
    ],
  },
  {
    id: 6,
    title: "Language & Communication",
    subtitle: "ভাষা ও যোগাযোগ দক্ষতা",
    classes: "All Applicable Classes",
    category: "Specialized Learning",
    icon: FaLanguage,
    description:
      "পড়া, লেখা, শোনা ও বলার দক্ষতা উন্নত করে শিক্ষার্থীদের আত্মবিশ্বাসী যোগাযোগে সহায়তা করা।",
    subjects: [
      "বাংলা ভাষা",
      "English Language",
      "পঠন ও অনুধাবন",
      "লেখার অনুশীলন",
      "মৌখিক যোগাযোগ",
    ],
    highlights: [
      "ভাষাগত দক্ষতা উন্নয়ন",
      "শব্দভান্ডার বৃদ্ধি",
      "লেখার অনুশীলন",
      "আত্মবিশ্বাসের সঙ্গে উপস্থাপন",
    ],
  },
];

const categories = [
  "All Programs",
  "Primary",
  "Secondary",
  "Specialized Learning",
];

function AcademicPrograms() {
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms =
    activeCategory === "All Programs"
      ? programsData
      : programsData.filter(
          (program) => program.category === activeCategory
        );

  return (
    <section className="academic-programs-section">
      <div className="academic-programs-container">
        <div className="academic-programs-hero">
          <span className="academic-programs-eyebrow">
            ABC SCHOOL
          </span>

          <h1 className="academic-programs-heading">
            Academic Programs
          </h1>

          <p className="academic-programs-intro">
            জ্ঞান, দক্ষতা ও সৃজনশীলতার বিকাশে পরিকল্পিত শিক্ষাকার্যক্রম।
            আমাদের একাডেমিক প্রোগ্রামগুলো সম্পর্কে জানুন এবং আপনার
            প্রয়োজনীয় তথ্য খুঁজে নিন।
          </p>

          <a href="/contact" className="academic-programs-hero-btn">
            Ask About Programs <FaArrowRight />
          </a>
        </div>

        <div className="academic-programs-overview">
          <div className="academic-programs-overview-card">
            <div className="academic-programs-overview-icon">
              <FaChalkboardTeacher />
            </div>
            <div>
              <h3>Structured Learning</h3>
              <p>পাঠ্যক্রমভিত্তিক শিক্ষাকার্যক্রম</p>
            </div>
          </div>

          <div className="academic-programs-overview-card">
            <div className="academic-programs-overview-icon">
              <FaMicroscope />
            </div>
            <div>
              <h3>Knowledge & Skills</h3>
              <p>জ্ঞান ও ব্যবহারিক দক্ষতার বিকাশ</p>
            </div>
          </div>

          <div className="academic-programs-overview-card">
            <div className="academic-programs-overview-icon">
              <FaClipboardCheck />
            </div>
            <div>
              <h3>Student Assessment</h3>
              <p>শিক্ষাগত অগ্রগতি মূল্যায়ন</p>
            </div>
          </div>
        </div>

        <div className="academic-programs-heading-row">
          <div>
            <span className="academic-programs-subtitle">
              EXPLORE OUR PROGRAMS
            </span>

            <h2>Our Academic Programs</h2>

            <p>
              প্রোগ্রাম নির্বাচন করে সংশ্লিষ্ট তথ্য ও বিষয়গুলো দেখুন।
            </p>
          </div>
        </div>

        <div className="academic-programs-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`academic-programs-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="academic-programs-grid">
          {filteredPrograms.map((program) => {
            const Icon = program.icon;

            return (
              <article
                className="academic-program-card"
                key={program.id}
              >
                <div className="academic-program-card-top">
                  <div className="academic-program-icon">
                    <Icon />
                  </div>

                  <span className="academic-program-category">
                    {program.category}
                  </span>
                </div>

                <h3>{program.title}</h3>

                <span className="academic-program-bangla-title">
                  {program.subtitle}
                </span>

                <div className="academic-program-classes">
                  <FaBookOpen />
                  <span>{program.classes}</span>
                </div>

                <p className="academic-program-description">
                  {program.description}
                </p>

                <button
                  type="button"
                  className="academic-program-details-btn"
                  onClick={() => setSelectedProgram(program)}
                >
                  Explore Program <FaArrowRight />
                </button>
              </article>
            );
          })}
        </div>

        <div className="academic-programs-method">
          <div className="academic-programs-method-content">
            <span className="academic-programs-subtitle">
              OUR APPROACH
            </span>

            <h2>Learning Beyond the Classroom</h2>

            <p>
              পাঠ্যবইয়ের পাশাপাশি অনুশীলন, সৃজনশীল কাজ, দলগত অংশগ্রহণ
              এবং শিক্ষার্থীর অগ্রগতি পর্যবেক্ষণের মাধ্যমে কার্যকর
              শিক্ষার পরিবেশ তৈরির লক্ষ্য রাখা হয়।
            </p>

            <ul>
              <li>
                <FaCheckCircle />
                শিক্ষার্থী-কেন্দ্রিক শিক্ষাদান
              </li>
              <li>
                <FaCheckCircle />
                নিয়মিত অনুশীলন ও মূল্যায়ন
              </li>
              <li>
                <FaCheckCircle />
                নৈতিকতা ও দায়িত্ববোধের বিকাশ
              </li>
            </ul>
          </div>

          <div className="academic-programs-method-visual">
            <div className="academic-programs-method-circle">
              <FaGraduationCap />
            </div>
            <span>Learn</span>
            <span>Practice</span>
            <span>Grow</span>
          </div>
        </div>

        <div className="academic-programs-cta">
          <div>
            <h2>Want to Know More?</h2>
            <p>
              শ্রেণি, বিষয় বা ভর্তি সংক্রান্ত তথ্যের জন্য স্কুলের সঙ্গে
              যোগাযোগ করুন।
            </p>
          </div>

          <a href="/contact" className="academic-programs-contact-btn">
            Contact School <FaArrowRight />
          </a>
        </div>
      </div>

      {selectedProgram && (
        <div
          className="academic-programs-modal-overlay"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="academic-programs-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="academic-programs-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="academic-programs-modal-close"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close program details"
            >
              <FaTimes />
            </button>

            <div className="academic-program-icon academic-program-modal-icon">
              <selectedProgram.icon />
            </div>

            <span className="academic-programs-subtitle">
              {selectedProgram.category}
            </span>

            <h2 id="academic-programs-modal-title">
              {selectedProgram.title}
            </h2>

            <p className="academic-program-modal-bangla">
              {selectedProgram.subtitle}
            </p>

            <div className="academic-program-modal-classes">
              <FaBookOpen />
              <span>{selectedProgram.classes}</span>
            </div>

            <p className="academic-program-modal-description">
              {selectedProgram.description}
            </p>

            <h3>Subjects & Learning Areas</h3>

            <ul className="academic-program-modal-list">
              {selectedProgram.subjects.map((subject) => (
                <li key={subject}>
                  <FaCheckCircle />
                  {subject}
                </li>
              ))}
            </ul>

            <h3>Program Highlights</h3>

            <ul className="academic-program-modal-list">
              {selectedProgram.highlights.map((highlight) => (
                <li key={highlight}>
                  <FaCheckCircle />
                  {highlight}
                </li>
              ))}
            </ul>

            <p className="academic-program-modal-note">
              দ্রষ্টব্য: শ্রেণি, বিষয় ও কার্যক্রমের প্রকৃত তালিকা জানতে
              ABC School-এর সর্বশেষ পাঠ্যক্রম ও কর্তৃপক্ষের তথ্য অনুসরণ করুন।
            </p>

            <a
              href="/contact"
              className="academic-programs-contact-btn academic-program-modal-contact"
            >
              Contact School <FaArrowRight />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default AcademicPrograms;

