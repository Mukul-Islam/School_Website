import "./Footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">

      {/* =========================================
          FOOTER MAIN
      ========================================= */}

      <div className="footer-main">
        <div className="footer-container">

          {/* School Info */}
          <div className="footer-column footer-about">

            <div className="footer-brand">
              <img
                src="src\images\ABC_School.png"
                alt="ABC School"
              />

              <div>
                <h2>ABC School</h2>
                <span>Knowledge • Character • Excellence</span>
              </div>
            </div>

            <p>
              ABC School is committed to providing
              quality education in a safe, caring and inspiring
              environment where every student can learn, grow
              and achieve her full potential.
            </p>

            <div className="footer-social">

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

</div>

          </div>


          {/* Quick Links */}

<div className="footer-column">

  <h3>Quick Links</h3>

  <ul className="footer-links">

    <li>
      <Link to="/">
        <FaAngleRight />
        Home
      </Link>
    </li>

    <li>
      <Link to="/about-school">
        <FaAngleRight />
        About School
      </Link>
    </li>

    <li>
      <Link to="/teachers">
        <FaAngleRight />
        Teachers
      </Link>
    </li>

    <li>
      <Link to="/notice">
        <FaAngleRight />
        Notice
      </Link>
    </li>

    <li>
      <Link to="/events">
        <FaAngleRight />
        Events
      </Link>
    </li>

    <li>
      <Link to="/contact">
        <FaAngleRight />
        Contact
      </Link>
    </li>

  </ul>

</div>


          {/* Important Links */}

<div className="footer-column">

  <h3>Important Links</h3>

  <ul className="footer-links">

    <li>
      <Link to="/academic-programs">
        <FaAngleRight />
        Academic Programs
      </Link>
    </li>

    <li>
      <Link to="/academic-calendar">
        <FaAngleRight />
        Academic Calendar
      </Link>
    </li>

    <li>
      <Link to="/examination">
        <FaAngleRight />
        Examination
      </Link>
    </li>

    <li>
      <Link to="/results">
        <FaAngleRight />
        Results
      </Link>
    </li>

    <li>
      <Link to="/student-services">
        <FaAngleRight />
        Student Services
      </Link>
    </li>

    <li>
      <Link to="/photo-gallery">
        <FaAngleRight />
        Gallery
      </Link>
    </li>

  </ul>

</div>

          {/* Contact */}
<div className="footer-column footer-contact">
  <h3>Contact Us</h3>

  <div className="contact-item">
    <div className="contact-icon">
      <FaMapMarkerAlt />
    </div>
    <div>
      <span>Address</span>
      <p>School Road, Bangladesh</p>
    </div>
  </div>

  <div className="contact-item">
    <div className="contact-icon">
      <FaPhone />
    </div>
    <div>
      <span>Phone</span>
      <p>+880 1XXX-XXXXXX</p>
    </div>
  </div>

  <div className="contact-item">
    <div className="contact-icon">
      <FaEnvelope />
    </div>
    <div>
      <span>Email</span>
      <p>info@school.edu.bd</p>
    </div>
  </div>
</div>

        </div>
      </div>


      {/* =========================================
          FOOTER BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <p>
            © 2026 ABC School. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;