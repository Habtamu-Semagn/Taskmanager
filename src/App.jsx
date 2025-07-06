import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Categories from "./Pages/Categories";
import Completed from "./Pages/Completed";
import Settings from "./Pages/Settings";
import Sidebar from "./components/Sidebar";
function App() {
  return (  
    <div className="flex w-screen gap-10 p-10 bg-slate-100">
       <Sidebar /> 
        <div className="">
          <h1 className="font-serif text-xl text-orange-500 font-bold">Task Manager</h1>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
