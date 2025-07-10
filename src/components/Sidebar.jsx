import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import CategoryIcon from "@mui/icons-material/Category";
import DoneIcon from "@mui/icons-material/Done";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import { NavBtn } from "./NavBtn";

function Sidebar() {
  const location = useLocation();
  const activeNav = location.pathname.slice(1);
  return (
    <ThemeProvider>
      <div className="col-span-1 bg-gradient-to-br from-sky-400 to-blue-700  sm:w-80 h-[calc(85vh)] rounded-xl p-10 dark:bg-gradient-to-br dark:from-black dark:to-neutral-500">
        <nav>
          <NavBtn text="Dashboard" activeNav={activeNav}>
            <DashboardIcon />
          </NavBtn>
          <NavBtn text="Tasks" activeNav={activeNav}>
            <TaskIcon />
          </NavBtn>
          <NavBtn text="Categories" activeNav={activeNav}>
            <CategoryIcon />
          </NavBtn>
          <NavBtn text="Completed" activeNav={activeNav}>
            <DoneIcon />
          </NavBtn>
          <NavBtn text="Settings" activeNav={activeNav}>
            <SettingsIcon />
          </NavBtn>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default Sidebar;
