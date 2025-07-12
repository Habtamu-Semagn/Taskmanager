import { useCallback, useState } from "react";
import Priority from "./Priority";
import TasksByDate from "./TasksByDate";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskContext } from "../contexts/TaskContext";

function TaskList() {
  const { taskList, setTaskList } = useTaskContext();
  const [displayBtn, setDisplayBtn] = useState(true);
  const [taskDependence, setTaskDependence] = useState("priority");

  const displayCompleted = useCallback(() => {
    const completed = taskList.filter((task) => task.completed === true).length;
    const totalTasks = taskList.length;
    if ((completed === totalTasks) & (displayBtn !== false))
      setDisplayBtn(false);
    else if (completed !== totalTasks && displayBtn !== true)
      setDisplayBtn(true);
  }, [taskList, displayBtn, setDisplayBtn]);

  displayCompleted(taskList, displayBtn, setDisplayBtn);

  return (
    <>
      <div>
        <h1 className="my-3 flex justify-between bg-gradient-to-r font-bold ">
          <span
            className="cursor-pointer dark:text-gray-200"
            onClick={() => setTaskList([])}
          >
            <DeleteIcon />
            CLEAR
          </span>
          <span className="dark:text-white tracking-widest">List of Tasks</span>
        </h1>
        <div className="grid grid-cols-2 bg-blue-500 border-4 border-blue-500 select-none cursor-pointer rounded-3xl px-5 dark:bg-black dark:border-none">
          <span
            onClick={() => setTaskDependence("priority")}
            className={
              taskDependence === "priority"
                ? "col-span-1 bg-blue-500 px-0.5 font-bold font-serif tracking-widest py-1 rounded-xl dark:bg-black dark:text-white"
                : "col-span-1 bg-blue-200 px-10 rounded-xl py-1 dark:bg-slate-200"
            }
          >
            Priority
          </span>
          <span
            onClick={() => setTaskDependence("date")}
            className={
              taskDependence === "date"
                ? "col-span-1 bg-blue-500 px-10 font-bold font-serif tracking-widest py-1 rounded-xl dark:bg-black dark:text-white"
                : "col-span-1 bg-blue-200 px-10 rounded-xl py-1 dark:bg-slate-200"
            }
          >
            Date
          </span>
        </div>
        {taskDependence === "priority" && <Priority taskList={taskList} />}
        {taskDependence === "date" && <TasksByDate taskList={taskList} />}
        {displayBtn === true && (
          <button
            className="bg-blue-500 text-right font-bold text-white p-3 rounded-xl cursor-pointer dark:bg-gradient-to-br dark:from-gray-600 dark:to-black"
            onClick={(e) => handleComplete(taskList, setTaskList, e)}
          >
            COMPLETE
          </button>
        )}
      </div>
    </>
  );
}
function handleComplete(taskList, setTaskList) {
  const updated = taskList.map((el) => {
    return { ...el, completed: true };
  });
  setTaskList(updated);
}
export default TaskList;
