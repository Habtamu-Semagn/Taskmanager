import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import CategoryIcon from "@mui/icons-material/Category";
import DoneIcon from "@mui/icons-material/Done";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import { NavBtn } from "./NavBtn";
import { useState } from "react";

function Sidebar({ text, setText }) {
  const location = useLocation();
  const navigate = useNavigate();
  const activeNav = location.pathname.slice(1);
  const [isNavOpen, setIsNavOpen] = useState(
    () => window.matchMedia("(min-width: 1024px)").matches
  );

  const handleClick = (e) => {
    const condition = !window.matchMedia("(min-width: 1024px)").matches;
    e.target.tagName === "LI" && condition && setIsNavOpen(!isNavOpen);
  };
  const handleSearchFocus = () => {
    navigate("/search");
  };
  return (
    <ThemeProvider>
      <span
        className="fixed top-5 left-0 p-3 font-bold text-2xl hover:cursor-pointer lg:hidden dark:text-white"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        &#8801;
      </span>
      {isNavOpen && (
        <div className="fixed h-screen top-0 left-0 bg-blue-100 z-50 translate-x-0 transition-transform duration-500 ease-in-out lg:static lg:bg-gradient-to-br lg:from-sky-400 lg:to-blue-700  sm:w-80 lg:h-[calc(85vh)] lg:rounded-xl lg:p-10 dark:bg-gradient-to-br dark:from-black dark:to-neutral-500">
          <p className="text-end my-5 lg:hidden">
            <span
              className="p-3 font-bold text-2xl hover:cursor-pointer"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              &times;
            </span>
          </p>

          <nav className="flex flex-col gap-5 " onClick={(e) => handleClick(e)}>
            <input
              placeholder="🔍Search Tasks..."
              className="bg-slate-200 rounded-xl p-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={handleSearchFocus}
            />
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
      )}
    </ThemeProvider>
  );
}

export default Sidebar;

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import TaskIcon from "@mui/icons-material/Task";
// import CategoryIcon from "@mui/icons-material/Category";
// import DoneIcon from "@mui/icons-material/Done";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { useLocation } from "react-router-dom";
// import { ThemeProvider } from "../contexts/ThemeContext";
// import { NavBtn } from "./NavBtn";

// function Sidebar() {
//   const location = useLocation();
//   const activeNav = location.pathname.slice(1);
//   return (
//     <ThemeProvider>
//       <div className="col-span-1 bg-gradient-to-br from-sky-400 to-blue-700  sm:w-80 h-[calc(85vh)] rounded-xl p-10 dark:bg-gradient-to-br dark:from-black dark:to-neutral-500">
//         <nav>
//           <NavBtn text="Dashboard" activeNav={activeNav}>
//             <DashboardIcon />
//           </NavBtn>
//           <NavBtn text="Tasks" activeNav={activeNav}>
//             <TaskIcon />
//           </NavBtn>
//           <NavBtn text="Categories" activeNav={activeNav}>
//             <CategoryIcon />
//           </NavBtn>
//           <NavBtn text="Completed" activeNav={activeNav}>
//             <DoneIcon />
//           </NavBtn>
//           <NavBtn text="Settings" activeNav={activeNav}>
//             <SettingsIcon />
//           </NavBtn>
//         </nav>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default Sidebar;
