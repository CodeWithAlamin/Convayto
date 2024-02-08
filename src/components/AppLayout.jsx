import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

function AppLayout() {
  return (
    <main className="grid min-h-dvh min-h-screen grid-cols-[auto_1fr] bg-deepSlate text-black dark:bg-deepSlate-dark dark:text-white">
      <LeftSideBar />

      <Outlet />
    </main>
  );
}

export default AppLayout;