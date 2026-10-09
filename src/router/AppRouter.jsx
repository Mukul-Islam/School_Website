import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import StudentPortalLayout from "../layouts/StudentPortalLayout";

import Hero from "../components/Hero/Hero";

import Notice from "../components/Notice/Notice";
import Notices from "../components/Notice/Notices";
import Home_Notice from "../components/Notice/Home_Notice";

import About from "../components/About/About";


import Contact from "../components/Contact/Contact";
import Teachers from "../components/Teachers/Teachers";

import History from "../components/History/History";
import Founder from "../components/Founder/Founder";
import Administration from "../components/Administration/Administration";

import AboutSchool from "../components/AboutSchool/AboutSchool";
import MissionVision from "../components/MissionVision/MissionVision";

import HeadTeacher from "../components/HeadTeacher/HeadTeacher";
import ManagingCommittee from "../components/ManagingCommittee/ManagingCommittee";

import StudentList from "../components/StudentList/StudentList";
import StudentAchievements from "../components/StudentAchievements/StudentAchievements";
import StudentServices from "../components/StudentServices/StudentServices";

import AcademicPrograms from "../components/AcademicPrograms/AcademicPrograms";
import AcademicCalendar from "../components/AcademicCalendar/AcademicCalendar";
import Examination from "../components/Examination/Examination";
import Results from "../components/Results/Results";

import Events from "../components/Events/Events";

import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import VideoGallery from "../components/VideoGallery/VideoGallery";

import Alumni from "../components/Alumni/Alumni";
import Admission from "../components/Admission/Admission";

import StudentLogin from "../components/StudentLogin/StudentLogin";
import StudentDashboard from "../components/StudentDashboard/StudentDashboard";
import StudentProfile from "../components/StudentProfile/StudentProfile";
import StudentResult from "../components/StudentResult/StudentResult";
import StudentPayment from "../components/StudentPayment/StudentPayment";
import StudentAttendance from "../components/StudentAttendance/StudentAttendance";
import StudentIdCard from "../components/StudentIdCard/StudentIdCard";
import Achievement from "../components/Achievements/Achievement";
import Achievements from "../components/Achievements/Achievements";

import ScrollToTop from "../ScrollTop/ScrollToTop";


function Home() {
  return (
    <>
      <Hero />

      <Home_Notice />

      <About />

      <Achievement />
    </>
  );
}


function AppRouter() {
  return (
   <>
    <ScrollToTop/>
    <Routes>

      {/* =====================================
          PUBLIC WEBSITE
      ===================================== */}

      <Route element={<PublicLayout />}>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT SCHOOL */}
        <Route
          path="/about-school"
          element={<AboutSchool />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/founder"
          element={<Founder />}
        />

        <Route
          path="/mission-vision"
          element={<MissionVision />}
        />

        {/* ADMINISTRATION */}
        <Route
          path="/head-teacher"
          element={<HeadTeacher />}
        />

        <Route
          path="/managing-committee"
          element={<ManagingCommittee />}
        />

        <Route
          path="/administration"
          element={<Administration />}
        />

        {/* TEACHERS */}
        <Route
          path="/teachers"
          element={<Teachers />}
        />

        {/* STUDENTS */}
        <Route
          path="/student-list"
          element={<StudentList />}
        />

        <Route
          path="/student-achievements"
          element={<StudentAchievements />}
        />

        <Route
          path="/student-services"
          element={<StudentServices />}
        />

        {/* ACADEMIC */}
        <Route
          path="/academic-programs"
          element={<AcademicPrograms />}
        />

        <Route
          path="/academic-calendar"
          element={<AcademicCalendar />}
        />

        <Route
          path="/examination"
          element={<Examination />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        {/* =====================================
            NOTICE
        ===================================== */}

        {/* All Notices */}
        <Route
          path="/notice"
          element={<Notices />}
        />

        {/* Single Notice */}
        <Route
          path="/notice/:id"
          element={<Notice />}
        />

        {/* EVENTS */}
        <Route
          path="/events"
          element={<Events />}
        />

        {/* GALLERY */}
        <Route
          path="/photo-gallery"
          element={<PhotoGallery />}
        />

        <Route
          path="/video-gallery"
          element={<VideoGallery />}
        />

        {/* ACHIEVEMENTS */}
        <Route
          path="/achievements"
          element={<Achievements />}
        />

        {/* ALUMNI */}
        <Route
          path="/alumni"
          element={<Alumni />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ADMISSION */}
        <Route
          path="/admission"
          element={<Admission />}
        />

        {/* STUDENT LOGIN */}
        <Route
          path="/student-login"
          element={<StudentLogin />}
        />

      </Route>


      {/* =====================================
          STUDENT PORTAL
      ===================================== */}

      <Route element={<StudentPortalLayout />}>

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student-profile"
          element={<StudentProfile />}
        />

        <Route
          path="/student-result"
          element={<StudentResult />}
        />

        <Route
          path="/student-payment"
          element={<StudentPayment />}
        />

        <Route
          path="/student-attendance"
          element={<StudentAttendance />}
        />

        <Route
          path="/student-id-card"
          element={<StudentIdCard />}
        />

      </Route>

    </Routes>
    </>
  );
}

export default AppRouter;