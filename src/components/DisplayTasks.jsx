import { useTaskContext } from "../contexts/TaskContext";
import Priority from "./Priority";
import { useState } from "react";
function DisplayTasks({ navigated, setNavigated }) {
  const [taskList, setTaskList] = useTaskContext();
  const [clickedNav, setClickedNav] = useState(null);
  const activeNav = navigated ?? clickedNav;
  return (
    <div>
      <div className="display-header flex bg-blue-900 text-white border-3 gap-3 p-3 select-none cursor-grab">
        <span
          className="hover:border-b-4 hover:border-b-blue-500"
          onClick={() => setClickedNav(1)}
          onMouseEnter={() => setNavigated(1)}
          onMouseLeave={() => setNavigated(null)}
        >
          All
        </span>
        <span
          className="hover:border-b-4 hover:border-b-blue-500"
          onClick={() => setClickedNav(2)}
          onMouseEnter={() => setNavigated(2)}
          onMouseLeave={() => setNavigated(null)}
        >
          Completed
        </span>
        <span
          className="hover:border-b-4 hover:border-b-blue-500"
          onClick={() => setClickedNav(3)}
          onMouseEnter={() => setNavigated(3)}
          onMouseLeave={() => setNavigated(null)}
        >
          Priority
        </span>
        <span
          className="hover:border-b-4 hover:border-b-blue-500"
          onClick={() => setClickedNav(4)}
          onMouseEnter={() => setNavigated(4)}
          onMouseLeave={() => setNavigated(null)}
        >
          Creation Date
        </span>
      </div>
      {activeNav === 1 &&
        taskList.map((el) => (
          <div>
            {el.taskTitle}{" "}
            <button
              onClick={() =>
                el.completed
                  ? null
                  : setTaskList(
                      [...taskList, { ...el, completed: true }].filter(
                        (e) => e !== el
                      )
                    )
              }
            >
              {el.completed ? "✔" : "Complete"}
            </button>
          </div>
        ))}
      {activeNav === 2 &&
        taskList
          .filter((el) => el.completed === true)
          .map((el) => <div>{el.taskTitle} </div>)}
      {activeNav === 3 && <Priority />}
      {activeNav === 4 && <TaskTimed />}
    </div>
  );
}
export default DisplayTasks;
function TaskTimed() {
  const [taskList] = useTaskContext();
  return (
    <div>{console.log(taskList.sort((a, b) => a.duedate - b.duedate))}</div>
  );
}
