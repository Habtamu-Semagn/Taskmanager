import { NavLink } from "react-router-dom";
export function NavBtn({ text, activeNav, children }) {
  return (
    <NavLink to={`/${text === "Dashboard" ? "" : text.toLowerCase()}`}>
      <li
        className={`${activeNav.length ? (activeNav === text.toLowerCase() ? "bg-orange-500 dark:bg-slate-500" : "") : text === "Dashboard" && "bg-orange-500 dark:bg-slate-500"} rounded-xl list-none text-center bg-blue-100 hover:bg-orange-500 dark:hover:bg-slate-400 hover:text-amber-50 dark:hover:text-black px-10 py-5 cursor-pointer font-bold flex gap-5`}
      >
        {children}
        {text}
      </li>
    </NavLink>
  );
}
// import { NavLink } from "react-router-dom";
// export function NavBtn({ text, activeNav, children }) {
//   return (
//     <NavLink to={`/${text === "Dashboard" ? "" : text.toLowerCase()}`}>
//       <li
//         className={`${activeNav.length ? (activeNav === text.toLowerCase() ? "bg-orange-500" : "") : text === "Dashboard" && "bg-orange-500"} list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold flex gap-5`}
//       >
//         {children}
//         {text}
//       </li>
//     </NavLink>
//   );
// }
