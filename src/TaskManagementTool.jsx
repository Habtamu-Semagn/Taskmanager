import { useState } from "react";

function TaskManagementTool() {
  const [taskList, setTaskList] = useState([]);
  const [navigated, setNavigated] = useState(1);
  const [completed, setCompleted] = useState(false);
  return (
      <div className="flex h-full w-screen gap-10 p-10 bg-slate-100">
        <div className="bg-gradient-to-br from-sky-400 to-blue-700 sm:w-80 h-[calc(85vh)] rounded-xl p-10">
          <li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold">Dashboard</li>
          <li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold">Task</li>
          <li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold">hi</li>
          <li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold">hi</li>
        </div>
        <div className="">
          <h1 className="font-serif text-xl text-orange-500 font-bold">Task Manager</h1>
          <CreateTask
            setTaskList={setTaskList}
            taskList={taskList}
            completed={completed}
          />
          <DisplayTasks
            taskList={taskList}
            setTaskList={setTaskList}
            navigated={navigated}
            setNavigated={setNavigated}
          />
        </div>
      </div>
  );
}
function CreateTask({ setTaskList, taskList, completed }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const taskOpened = open ?? clicked;
  return (
    <>
      <h2 className="cursor-pointer bg-gradient-to-r from-blue-700 to-white flex justify-between px-10 py-2 text-white font-serif normalcase font-extralight rounded-xl w-full " onClick={() => setClicked(!clicked)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(null)}><span>CREATE TASK</span> <span className="text-blue-500 font-extrabold">{taskOpened ? '🔽' : '🔼'}</span></h2>
      {taskOpened && <form className={taskOpened ? '': ''}>
        <label htmlFor="taskTitle">
          Task Name:{" "}
          <input
            type="text"
            id="taskTitle"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="description">
          Description:{" "}
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="priority">
          Priority:{" "}
          <select
            name="priority"
            id="priority"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </label>
        <br />
        <label htmlFor="Category">
          Category:{" "}
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="other">other</option>
          </select>
        </label>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            const newTask = {
              taskTitle: taskTitle,
              description: description,
              priority: priority,
              category: category,
              completed: completed,
              duedate: new Date(Date.now()),
            };
            console.log("Adding new task to the task list", newTask);
            setTaskList([...taskList, newTask]);
          }}
        >
          CREATE
        </button>
      </form>}
    </>
  );
}

function DisplayTasks({ taskList, navigated, setNavigated, setTaskList }) {
  const [clickedNav, setClickedNav] = useState(null);
  const activeNav = navigated ?? clickedNav;
  console.log(clickedNav);
  return (
    <div>
      <div className="display-header flex bg-blue-900 text-white border-3 gap-3 p-3 select-none cursor-grab">
        <span className="hover:bg-blue-400"
          onClick={() => setClickedNav(1)}
          onMouseEnter={() => setNavigated(1)}
          onMouseLeave={() => setNavigated(null)}
        >
          All
        </span>
        <span className="hover:bg-blue-400"
          onClick={() => setClickedNav(2)}
          onMouseEnter={() => setNavigated(2)}
          onMouseLeave={() => setNavigated(null)}
        >
          Completed
        </span>
        <span className="hover:bg-blue-400"
          onClick={() => setClickedNav(3)}
          onMouseEnter={() => setNavigated(3)}
          onMouseLeave={() => setNavigated(null)}
        >
          Priority
        </span>
        <span className="hover:bg-blue-400"
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
      {activeNav === 3 && <Priority taskList={taskList} />}
      {activeNav === 4 && <TaskTimed taskList={taskList} />}
    </div>
  );
}
function Priority({ taskList }) {
  return (
    <div className="priority flex justify-between cursor-pointer select-none ">
      <div>
        <h2>Low</h2>
        {taskList
          .filter((el) => el.priority === "low")
          .map((el) => (
            <div>
              {el.taskTitle} {el.priority}
            </div>
          ))}
      </div>
      <div>
        <h2>Medium</h2>
        {taskList
          .filter((el) => el.priority === "medium")
          .map((el) => (
            <div>
              {el.taskTitle} {el.priority}
            </div>
          ))}
      </div>
      <div>
        <h2>High</h2>
        {taskList
          .filter((el) => el.priority === "high")
          .map((el) => (
            <div>
              {el.taskTitle} {el.priority}
            </div>
          ))}
      </div>
    </div>
  );
}
function TaskTimed({ taskList }) {
  return (
    <div>{console.log(taskList.sort((a, b) => a.duedate - b.duedate))}</div>
  );
}
export default TaskManagementTool;