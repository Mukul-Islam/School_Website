import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name) => {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const aboutItems = [
    {
      title: "About School",
      path: "/about-school",
      icon: "fa-school",
    },
    {
      title: "History",
      path: "/history",
      icon: "fa-clock-rotate-left",
    },
    {
      title: "Founder",
      path: "/founder",
      icon: "fa-user-tie",
    },
    {
      title: "Mission & Vision",
      path: "/mission-vision",
      icon: "fa-bullseye",
    },
  ];

  const administrationItems = [
    {
      title: "Head Teacher",
      path: "/head-teacher",
      icon: "fa-user-tie",
    },
    {
      title: "Managing Committee",
      path: "/managing-committee",
      icon: "fa-users",
    },
    {
      title: "Administration",
      path: "/administration",
      icon: "fa-people-group",
    },
  ];

  const studentItems = [
    {
      title: "Student List",
      path: "/student-list",
      icon: "fa-user-graduate",
    },
    {
      title: "Student Achievements",
      path: "/student-achievements",
      icon: "fa-ranking-star",
    },
    {
      title: "Student Services",
      path: "/student-services",
      icon: "fa-id-card",
    },
  ];

  const academicItems = [
    {
      title: "Academic Programs",
      path: "/academic-programs",
      icon: "fa-book",
    },
    {
      title: "Academic Calendar",
      path: "/academic-calendar",
      icon: "fa-calendar-days",
    },
    {
      title: "Examination",
      path: "/examination",
      icon: "fa-clipboard-list",
    },
    {
      title: "Results",
      path: "/results",
      icon: "fa-chart-line",
    },
  ];

  const galleryItems = [
    {
      title: "Photo Gallery",
      path: "/photo-gallery",
      icon: "fa-image",
    },
    {
      title: "Video Gallery",
      path: "/video-gallery",
      icon: "fa-video",
    },
  ];

  return (
    <>
      {/* TOP BAR */}

      <div className="top-bar">
        <div className="top-bar-inner">

          <div className="top-left">

            <div className="top-item">
              <i className="fa-solid fa-phone"></i>
              <span>+880 1XXX-XXXXXX</span>
            </div>

            <div className="top-item">
              <i className="fa-solid fa-envelope"></i>
              <span>info@school.edu.bd</span>
            </div>

          </div>

          <div className="top-right">

            <span>Follow Us</span>

            <div className="social-links">

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
      </div>


      {/* MAIN HEADER */}

      <header className="main-header">

        <div className="header-inner">

          {/* BRAND */}

          <Link to="/" className="brand">

            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/School.svg/512px-School.svg.png"
              alt="ABC School Logo"
            />

            <div className="brand-text">

              <h1>ABC School</h1>

              <span>
                Knowledge • Character • Excellence
              </span>

            </div>

          </Link>


          {/* DESKTOP NAV */}

          <nav className="desktop-nav">

            {/* HOME */}

            <div className="nav-item">

              <Link
                to="/"
                className="nav-link active"
              >
                Home
              </Link>

            </div>


            {/* ABOUT SCHOOL */}

            <div className="nav-item">

              <Link
                to="/about-school"
                className="nav-link"
              >
                About School

                <i className="fa-solid fa-chevron-down"></i>
              </Link>

              <div className="dropdown">

                {aboutItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.title}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>


            {/* ADMINISTRATION */}

            <div className="nav-item">

              <Link
                to="/administration"
                className="nav-link"
              >
                Administration

                <i className="fa-solid fa-chevron-down"></i>
              </Link>

              <div className="dropdown">

                {administrationItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.title}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>


            {/* TEACHERS */}

            <div className="nav-item">

              <Link
                to="/teachers"
                className="nav-link"
              >
                Teachers
              </Link>

            </div>


            {/* STUDENTS */}

            <div className="nav-item">

              <Link
                to="/student-list"
                className="nav-link"
              >
                Students

                <i className="fa-solid fa-chevron-down"></i>
              </Link>

              <div className="dropdown">

                {studentItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.title}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>


            {/* ACADEMIC */}

            <div className="nav-item">

              <Link
                to="/academic-programs"
                className="nav-link"
              >
                Academic

                <i className="fa-solid fa-chevron-down"></i>
              </Link>

              <div className="dropdown">

                {academicItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.title}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>


            {/* NOTICE */}

            <div className="nav-item">

              <Link
                to="/notice"
                className="nav-link"
              >
                Notice
              </Link>

            </div>


            {/* EVENTS */}

            <div className="nav-item">

              <Link
                to="/events"
                className="nav-link"
              >
                Events
              </Link>

            </div>


            {/* GALLERY */}

            <div className="nav-item">

              <Link
                to="/photo-gallery"
                className="nav-link"
              >
                Gallery

                <i className="fa-solid fa-chevron-down"></i>
              </Link>

              <div className="dropdown">

                {galleryItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.title}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>


            {/* ACHIEVEMENTS */}

            <div className="nav-item">

              <Link
                to="/achievements"
                className="nav-link"
              >
                Achievements
              </Link>

            </div>


            {/* ALUMNI */}

            <div className="nav-item">

              <Link
                to="/alumni"
                className="nav-link"
              >
                Alumni
              </Link>

            </div>


            {/* CONTACT */}

            <div className="nav-item">

              <Link
                to="/contact"
                className="nav-link"
              >
                Contact
              </Link>

            </div>

          </nav>


                    {/* STUDENT LOGIN + ADMISSION BUTTON */}

          <div className="header-cta">

            <Link
              to="/student-login"
              className="cta-btn-outline"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              Student Login
            </Link>

            <Link
              to="/admission"
              className="cta-btn"
            >
              <i className="fa-solid fa-user-plus"></i>
              Admission
            </Link>

          </div>


          {/* MOBILE BUTTON */}

          <button
            className="menu-toggle"
            aria-label="Open Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>

      </header>


      {/* OVERLAY */}

      <div
        className={`menu-overlay ${
          mobileMenuOpen ? "active" : ""
        }`}
        onClick={closeMobileMenu}
      ></div>


      {/* MOBILE MENU */}

      <aside
        className={`mobile-menu ${
          mobileMenuOpen ? "active" : ""
        }`}
      >

        {/* MOBILE HEADER */}

        <div className="mobile-header">

          <Link
            to="/"
            className="mobile-brand"
            onClick={closeMobileMenu}
          >

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/School.svg/512px-School.svg.png"
              alt="ABC School Logo"
            />

            <strong>
              ABC School
            </strong>

          </Link>

          <button
            className="close-menu"
            aria-label="Close Menu"
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

        </div>


        {/* MOBILE NAV */}

        <nav>

          <ul className="mobile-nav">

            {/* HOME */}

            <li>

              <Link
                to="/"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

            </li>


            {/* ABOUT */}

            <MobileDropdown
              title="About School"
              name="about"
              items={aboutItems}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              closeMobileMenu={closeMobileMenu}
            />


            {/* ADMINISTRATION */}

            <MobileDropdown
              title="Administration"
              name="administration"
              items={administrationItems}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              closeMobileMenu={closeMobileMenu}
            />


            {/* TEACHERS */}

            <li>

              <Link
                to="/teachers"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Teachers
              </Link>

            </li>


            {/* STUDENTS */}

            <MobileDropdown
              title="Students"
              name="students"
              items={studentItems}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              closeMobileMenu={closeMobileMenu}
            />


            {/* ACADEMIC */}

            <MobileDropdown
              title="Academic"
              name="academic"
              items={academicItems}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              closeMobileMenu={closeMobileMenu}
            />


            {/* NOTICE */}

            <li>

              <Link
                to="/notice"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Notice
              </Link>

            </li>


            {/* EVENTS */}

            <li>

              <Link
                to="/events"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Events
              </Link>

            </li>


            {/* GALLERY */}

            <MobileDropdown
              title="Gallery"
              name="gallery"
              items={galleryItems}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              closeMobileMenu={closeMobileMenu}
            />


            {/* ACHIEVEMENTS */}

            <li>

              <Link
                to="/achievements"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Achievements
              </Link>

            </li>


            {/* ALUMNI */}

            <li>

              <Link
                to="/alumni"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Alumni
              </Link>

            </li>


            {/* CONTACT */}

            <li>

              <Link
                to="/contact"
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

            </li>

          </ul>

        </nav>


                {/* MOBILE STUDENT LOGIN + ADMISSION */}

        <div className="mobile-cta-group">

          <Link
            to="/student-login"
            className="cta-btn-outline mobile-cta"
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            Student Login
          </Link>

          <Link
            to="/admission"
            className="cta-btn mobile-cta"
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa-user-plus"></i>
            Admission
          </Link>

        </div>

      </aside>
    </>
  );
}


/* MOBILE DROPDOWN COMPONENT */

function MobileDropdown({
  title,
  name,
  items,
  openDropdown,
  toggleDropdown,
  closeMobileMenu,
}) {
  const isOpen = openDropdown === name;

  return (
    <li>

      <button
        type="button"
        className="mobile-link mobile-dropdown-toggle"
        onClick={() => toggleDropdown(name)}
        aria-expanded={isOpen}
      >

        <span>
          {title}
        </span>

        <i
          className="fa-solid fa-chevron-down"
          style={{
            transform: isOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        ></i>

      </button>


      <div
        className={`mobile-dropdown ${
          isOpen ? "show" : ""
        }`}
      >

        {items.map((item) => (
          <Link
            to={item.path}
            key={item.title}
            onClick={closeMobileMenu}
          >
            <i
              className={`fa-solid ${item.icon}`}
            ></i>

            {item.title}
          </Link>
        ))}

      </div>

    </li>
  );
}

export default Navbar;