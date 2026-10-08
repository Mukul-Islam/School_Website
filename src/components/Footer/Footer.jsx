import "./Footer.css";

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
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

          </div>


          {/* Quick Links */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul className="footer-links">
              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Home
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  About School
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Teachers
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Notice
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Events
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Contact
                </a>
              </li>
            </ul>

          </div>


          {/* Important Links */}
          <div className="footer-column">

            <h3>Important Links</h3>

            <ul className="footer-links">
              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Academic Programs
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Academic Calendar
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Examination
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Results
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Student Services
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-angle-right"></i>
                  Gallery
                </a>
              </li>
            </ul>

          </div>


          {/* Contact */}
          <div className="footer-column footer-contact">

            <h3>Contact Us</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <span>Address</span>
                <p>School Road, Bangladesh</p>
              </div>
            </div>


            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <span>Phone</span>
                <p>+880 1XXX-XXXXXX</p>
              </div>
            </div>


            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
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