import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { TaskProvider } from "./contexts/TaskContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import ModeBtn from "./components/ModeBtn";
import Spinner from "./components/Spinner";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Tasks = lazy(() => import("./Pages/Tasks"));
const Categories = lazy(() => import("./Pages/Categories"));
const Completed = lazy(() => import("./Pages/Completed"));
const Settings = lazy(() => import("./Pages/Settings"));

function App() {
  return (
    <TaskProvider>
      <ThemeProvider>
        <div className="grid grid-cols-4 h-screen p-10 bg-slate-100 select-none dark:bg-neutral-700">
          <ModeBtn position="top-right" />
          <Sidebar />
          <div className="col-span-3 overflow-y-scroll">
            <h1 className="font-serif text-xl text-orange-500 font-bold">
              Task Manager
            </h1>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </ThemeProvider>
    </TaskProvider>
  );
}

export default App;
