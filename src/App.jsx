import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Categories from "./Pages/Categories";
import Completed from "./Pages/Completed";
import Settings from "./Pages/Settings";
import Sidebar from "./components/Sidebar";
import Priority from "./components/Priority";
function App() {
  const [taskList, setTaskList] = useState([
    {
      category: "",
      completed: false,
      deadline: new Date(Date.now()),
      description: "selam",
      duedate: new Date(null),
      priority: "medium",
      taskTitle: "selam",
    },
    {
      category: "",
      completed: false,
      deadline: new Date(Date.now()),
      description: "selam",
      duedate: new Date("2025-06-30"),
      priority: "medium",
      taskTitle: "066-30-same-day",
    },
    {
      category: "",
      completed: false,
      deadline: new Date(Date.now()),
      description: "selam",
      duedate: new Date("2025-06-30"),
      priority: "medium",
      taskTitle: "06-30-same-day",
    },
    {
      taskTitle: "selam-next",
      description: "selam",
      priority: "medium",
      category: "",
      completed: false,
      duedate: new Date("2025-07-07T00:50:40.900Z"),
      deadline: new Date("2025-07-06T07:00:00.000Z"),
    },
    {
      taskTitle: "task",
      description: "task description",
      priority: "low",
      category: "",
      completed: false,
      duedate: new Date("2025-07-07T00:50:40.900Z"),
      deadline: new Date("2025-07-06T07:00:00.000Z"),
    },
  ]);

  return (
    <div className="flex w-screen gap-10 p-10 bg-slate-100">
      <Sidebar />
      <div className="">
        <h1 className="font-serif text-xl text-orange-500 font-bold">
          Task Manager
        </h1>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route
            path="/tasks"
            element={<Tasks taskList={taskList} setTaskList={setTaskList} />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
