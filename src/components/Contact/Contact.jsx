import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-hero-subtitle">GET IN TOUCH</span>

          <h1>Contact <span>ABC School</span></h1>

          <p>
            Have a question, inquiry, or need more information?
            We are always happy to hear from you.
          </p>
        </div>
      </section>


      {/* Contact Main Content */}
      <section className="contact-main">
        <div className="contact-container">

          <div className="contact-grid">

            {/* Left Side */}
            <div className="contact-information">

              <span className="contact-section-label">
                CONTACT INFORMATION
              </span>

              <h2>
                We would love to
                <span> hear from you.</span>
              </h2>

              <p className="contact-intro">
                Whether you have a question about admission, academic
                programs, student services, or anything else, our team
                is ready to help.
              </p>


              {/* Address */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <h3>Our Address</h3>
                  <p>
                    ABC School<br />
                    School Road, Bangladesh
                  </p>
                </div>
              </div>


              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div>
                  <h3>Phone Number</h3>
                  <p>
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>


              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <h3>Email Address</h3>
                  <p>
                    info@abcschool.edu.bd
                  </p>
                </div>
              </div>


              {/* Office Hours */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>

                <div>
                  <h3>Office Hours</h3>
                  <p>
                    Saturday – Thursday<br />
                    9:00 AM – 4:00 PM
                  </p>
                </div>
              </div>


              {/* Social Media */}
              <div className="contact-social">
                <h3>Follow Us</h3>

                <div className="contact-social-links">

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

            </div>


            {/* Right Side - Contact Form */}
            <div className="contact-form-wrapper">

              <div className="contact-form-header">
                <span>CONTACT US</span>

                <h2>Send Us a Message</h2>

                <p>
                  Fill out the form below and our team will get back
                  to you as soon as possible.
                </p>
              </div>


              <form className="contact-form">

                <div className="contact-form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <div className="input-wrapper">
                      <i className="fa-regular fa-user"></i>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <div className="input-wrapper">
                      <i className="fa-regular fa-envelope"></i>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                </div>


                <div className="contact-form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <div className="input-wrapper">
                      <i className="fa-solid fa-phone"></i>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject
                    </label>

                    <div className="input-wrapper">
                      <i className="fa-regular fa-pen-to-square"></i>

                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                </div>


                <div className="form-group">
                  <label htmlFor="message">
                    Your Message
                  </label>

                  <div className="textarea-wrapper">
                    <i className="fa-regular fa-message"></i>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>


                <div className="form-bottom">

                  <label className="privacy-check">
                    <input type="checkbox" />

                    <span>
                      I agree to the school's
                      <a href="#"> privacy policy</a>.
                    </span>
                  </label>


                  <button type="submit" className="contact-submit">
                    Send Message

                    <i className="fa-solid fa-arrow-right"></i>
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* Map / Location */}
      <section className="contact-location">
        <div className="contact-container">

          <div className="location-box">

            <div className="location-content">

              <span>VISIT OUR SCHOOL</span>

              <h2>We are here to help</h2>

              <p>
                Visit ABC School during our office hours.
                Our administration team will be happy to assist you.
              </p>

              <a href="#" className="location-button">
                Get Directions
                <i className="fa-solid fa-location-arrow"></i>
              </a>

            </div>

            <div className="location-icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;