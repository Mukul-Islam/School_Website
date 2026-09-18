import { Outlet } from "react-router-dom";

import StudentPortalNavbar from "../components/StudentPortalNavbar/StudentPortalNavbar";

function StudentPortalLayout() {
  return (
    <>
      <StudentPortalNavbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default StudentPortalLayout