
import { useState } from "react";
import {
  FaBookOpen,
  FaLaptop,
  FaBus,
  FaUserGraduate,
  FaHeartbeat,
  FaHandsHelping,
  FaFutbol,
  FaUtensils,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

import "./StudentServices.css";

const servicesData = [
  {
    id: 1,
    title: "Library Services",
    category: "Academic",
    icon: FaBookOpen,
    description:
      "শিক্ষার্থীদের জ্ঞান বৃদ্ধি ও পাঠাভ্যাস গড়ে তুলতে লাইব্রেরি ব্যবহারের সুবিধা।",
    features: [
      "বিভিন্ন বিষয়ের বই পড়ার সুযোগ",
      "পাঠ্যবই ও রেফারেন্স বই",
      "নীরব পরিবেশে পড়াশোনার সুবিধা",
      "পাঠাভ্যাস উন্নয়নে সহায়তা",
    ],
  },
  {
    id: 2,
    title: "Computer Lab",
    category: "Academic",
    icon: FaLaptop,
    description:
      "প্রযুক্তিগত জ্ঞান ও কম্পিউটার দক্ষতা অর্জনের জন্য কম্পিউটার ল্যাবের সুবিধা।",
    features: [
      "কম্পিউটার ব্যবহার শেখা",
      "মৌলিক আইসিটি শিক্ষা",
      "ব্যবহারিক অনুশীলন",
      "ডিজিটাল দক্ষতা উন্নয়ন",
    ],
  },
  {
    id: 3,
    title: "Scholarship Support",
    category: "Student Support",
    icon: FaUserGraduate,
    description:
      "যোগ্য ও মেধাবী শিক্ষার্থীদের বৃত্তি এবং আর্থিক সহায়তা সংক্রান্ত তথ্য।",
    features: [
      "মেধাবৃত্তি সংক্রান্ত তথ্য",
      "যোগ্যতা ও আবেদন নির্দেশনা",
      "প্রয়োজনীয় কাগজপত্র সম্পর্কে সহায়তা",
      "বৃত্তির বিজ্ঞপ্তি জানার সুযোগ",
    ],
  },
  {
    id: 4,
    title: "Health & Wellbeing",
    category: "Student Support",
    icon: FaHeartbeat,
    description:
      "শিক্ষার্থীদের সুস্থতা, নিরাপত্তা ও ভালো থাকার বিষয়ে সচেতনতা।",
    features: [
      "স্বাস্থ্য সচেতনতামূলক কার্যক্রম",
      "পরিচ্ছন্নতার অভ্যাস গড়ে তোলা",
      "নিরাপদ শিক্ষার পরিবেশ",
      "প্রয়োজনে অভিভাবকের সঙ্গে যোগাযোগ",
    ],
  },
  {
    id: 5,
    title: "Transportation",
    category: "Facilities",
    icon: FaBus,
    description:
      "যাতায়াত সংক্রান্ত তথ্য ও পরিবহন সুবিধা সম্পর্কে জানার ব্যবস্থা।",
    features: [
      "পরিবহন সুবিধার তথ্য",
      "রুট ও সময়সূচি সম্পর্কে অনুসন্ধান",
      "পরিবহন নীতিমালা সম্পর্কে জানা",
      "অভিভাবকের জন্য যোগাযোগের সুযোগ",
    ],
  },
  {
    id: 6,
    title: "Guidance & Support",
    category: "Student Support",
    icon: FaHandsHelping,
    description:
      "পড়াশোনা, আচরণ ও ব্যক্তিগত বিকাশে শিক্ষার্থীদের প্রয়োজনীয় দিকনির্দেশনা।",
    features: [
      "পড়াশোনার বিষয়ে পরামর্শ",
      "শিক্ষকের দিকনির্দেশনা",
      "শিক্ষার্থীদের সমস্যা শোনার সুযোগ",
      "অভিভাবকের সঙ্গে সমন্বয়",
    ],
  },
  {
    id: 7,
    title: "Sports & Recreation",
    category: "Activities",
    icon: FaFutbol,
    description:
      "শারীরিক সক্ষমতা, দলগত কাজ ও নেতৃত্বের গুণাবলি বিকাশে খেলাধুলার সুযোগ।",
    features: [
      "ক্রীড়া ও বিনোদনমূলক কার্যক্রম",
      "দলগত খেলায় অংশগ্রহণ",
      "শারীরিক সক্ষমতা উন্নয়ন",
      "প্রতিযোগিতায় অংশগ্রহণের সুযোগ",
    ],
  },
  {
    id: 8,
    title: "Cafeteria & Refreshment",
    category: "Facilities",
    icon: FaUtensils,
    description:
      "স্কুলে খাবার ও বিরতির সময়ের সুবিধা সম্পর্কে প্রয়োজনীয় তথ্য।",
    features: [
      "খাবার ও বিরতির সুবিধা সম্পর্কে তথ্য",
      "পরিচ্ছন্নতা সম্পর্কে সচেতনতা",
      "স্বাস্থ্যকর খাবার বেছে নেওয়ার উৎসাহ",
      "প্রতিষ্ঠানের নিয়ম মেনে চলা",
    ],
  },
];

const categories = [
  "All Services",
  "Academic",
  "Student Support",
  "Facilities",
  "Activities",
];

function StudentServices() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    activeCategory === "All Services"
      ? servicesData
      : servicesData.filter(
          (service) => service.category === activeCategory
        );

  return (
    <section className="student-services-section">
      <div className="student-services-container">
        <div className="student-services-hero">
          <span className="student-services-eyebrow">
            ABC SCHOOL
          </span>

          <h1 className="student-services-heading">
            Student Services
          </h1>

          <p className="student-services-intro">
            শিক্ষার্থীদের শিক্ষা, দক্ষতা ও সার্বিক বিকাশে সহায়ক
            সেবাগুলো সম্পর্কে জানুন। প্রতিটি শিক্ষার্থীর জন্য
            একটি সুন্দর ও সহায়ক শিক্ষার পরিবেশ গড়ে তোলাই আমাদের লক্ষ্য।
          </p>
        </div>

        <div className="student-services-stats">
          <div className="student-services-stat">
            <span className="student-services-stat-number">01</span>
            <span>Academic Support</span>
          </div>

          <div className="student-services-stat">
            <span className="student-services-stat-number">02</span>
            <span>Student Wellbeing</span>
          </div>

          <div className="student-services-stat">
            <span className="student-services-stat-number">03</span>
            <span>Personal Development</span>
          </div>
        </div>

        <div className="student-services-section-heading">
          <div>
            <span className="student-services-subtitle">
              OUR FACILITIES
            </span>
            <h2>Services for Every Student</h2>
            <p>
              তোমার প্রয়োজন অনুযায়ী সেবা নির্বাচন করে বিস্তারিত জানো।
            </p>
          </div>
        </div>

        <div
          className="student-services-filters"
          aria-label="Filter student services"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`student-services-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="student-services-grid">
          {filteredServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="student-services-card"
                key={service.id}
              >
                <div className="student-services-card-top">
                  <div className="student-services-icon">
                    <Icon />
                  </div>

                  <span className="student-services-category">
                    {service.category}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <button
                  type="button"
                  className="student-services-details-btn"
                  onClick={() => setSelectedService(service)}
                >
                  View Details <FaArrowRight />
                </button>
              </article>
            );
          })}
        </div>

        <div className="student-services-help">
          <div className="student-services-help-icon">
            <FaHandsHelping />
          </div>

          <div className="student-services-help-content">
            <h2>Need More Information?</h2>
            <p>
              কোনো সেবা সম্পর্কে জানতে বা সহায়তা পেতে স্কুল কর্তৃপক্ষের
              সঙ্গে যোগাযোগ করো।
            </p>
          </div>

          <a
            href="/contact"
            className="student-services-contact-btn"
          >
            Contact Us <FaArrowRight />
          </a>
        </div>
      </div>

      {selectedService && (
        <div
          className="student-services-modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="student-services-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="student-services-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="student-services-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close details"
            >
              <FaTimes />
            </button>

            <div className="student-services-modal-icon">
              <selectedService.icon />
            </div>

            <span className="student-services-subtitle">
              {selectedService.category}
            </span>

            <h2 id="student-services-modal-title">
              {selectedService.title}
            </h2>

            <p className="student-services-modal-description">
              {selectedService.description}
            </p>

            <h3>What You Can Learn About</h3>

            <ul className="student-services-feature-list">
              {selectedService.features.map((feature) => (
                <li key={feature}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="student-services-modal-note">
              <strong>Note:</strong> সেবার প্রাপ্যতা ও নিয়ম জানতে
              স্কুল কর্তৃপক্ষের সঙ্গে যোগাযোগ করুন।
            </p>

            <button
              type="button"
              className="student-services-contact-btn student-services-modal-btn"
              onClick={() => {
                setSelectedService(null);
                window.location.href = "/contact";
              }}
            >
              Contact School <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default StudentServices;

