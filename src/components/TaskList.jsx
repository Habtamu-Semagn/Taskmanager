import { useState } from "react";
import Priority from "./Priority";
import TasksByDate from "./TasksByDate";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskContext } from "../contexts/TaskContext";
function TaskList() {
  const { taskList, setTaskList } = useTaskContext();
  const [TaskDependence, setTaskDependence] = useState("priority");
  return (
    <div>
      <h1 className="my-3 flex justify-between bg-gradient-to-r font-bold ">
        <span className="cursor-pointer" onClick={() => setTaskList([])}>
          <DeleteIcon />
          CLEAR
        </span>
        <span>List of Tasks</span>
      </h1>
      <div className="flex justify-between bg-blue-500 border-4 border-blue-500 select-none cursor-pointer rounded-3xl">
        <span
          onClick={() => setTaskDependence("priority")}
          className={
            TaskDependence === "priority"
              ? "bg-blue-500 px-10 font-bold font-serif tracking-widest py-1 rounded-xl"
              : "bg-blue-200 px-10 rounded-xl py-1"
          }
        >
          Priority
        </span>
        <span
          onClick={() => setTaskDependence("date")}
          className={
            TaskDependence === "date"
              ? "bg-blue-500 px-10 font-bold font-serif tracking-widest py-1 rounded-xl"
              : "bg-blue-200 px-10 rounded-xl py-1"
          }
        >
          Date
        </span>
      </div>
      {TaskDependence === "priority" && <Priority taskList={taskList} />}
      {TaskDependence === "date" && <TasksByDate taskList={taskList} />}
      <button
        className="bg-blue-500 text-right font-bold text-white p-3 rounded-xl"
        onClick={() => handleComplete(taskList, setTaskList)}
      >
        COMPLETE
      </button>
    </div>
  );
}
function handleComplete(taskList, setTaskList) {
  const updated = taskList.map((el) => {
    return { ...el, completed: true };
  });
  setTaskList(updated);
}
export default TaskList;
