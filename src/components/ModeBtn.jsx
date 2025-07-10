import ThemeContext from "../contexts/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useContext } from "react";
function handleDarkMode(theme) {
  if (theme === "dark") document.documentElement.classList.add("dark");
  else if (theme === "") document.documentElement.classList.remove("dark");
}
function ModeBtn({ position }) {
  const { theme, setTheme } = useContext(ThemeContext);
  handleDarkMode(theme);
  return (
    <div className={position ? "fixed top-10 right-10" : "flex"}>
      <span
        className="bg-neutral-400 hover:bg-slate-950 hover:text-white p-3 dark:text-white dark:bg-slate-950"
        onClick={() => theme === "dark" || setTheme("dark")}
      >
        <DarkMode />
      </span>
      <span
        className="bg-neutral-300 text-yellow-500 p-3 dark:bg-slate-950 dark:text-white dark:hover:text-yellow-500 dark:hover:bg-neutral-300"
        onClick={() => theme === "dark" && setTheme("")}
      >
        <LightMode />
      </span>
    </div>
  );
}

export default ModeBtn;
