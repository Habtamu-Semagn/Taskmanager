import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Categories from "./Pages/Categories";
import Completed from "./Pages/Completed";
import Settings from "./Pages/Settings";
import Sidebar from "./components/Sidebar";
import { TaskProvider } from "./contexts/TaskContext";
import ModeBtn from "./components/ModeBtn";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <TaskProvider>
      <ThemeProvider>
        <div className="grid grid-cols-4 h-screen p-10 bg-slate-100 select-none dark:bg-neutral-700">
          <ModeBtn position="top-right" />
          <Sidebar />
          <div className="col-span-3 overflow-y-scroll ">
            <h1 className="font-serif text-xl text-orange-500 font-bold">
              Task Manager
            </h1>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </TaskProvider>
  );
}

export default App;
