import DatePicker from "react-datepicker";
import { useReducer } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useTaskContext } from "../contexts/TaskContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import {
  initialState,
  reducer,
  setIsCreated,
  setTaskTitle,
  setDescription,
  setPriority,
  setCategory,
  setClicked,
  setOpen,
  setDeadline,
} from "../reducers/taskReducer";
function CreateTask() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { taskList, setTaskList } = useTaskContext();
  const taskOpened = state.open ?? state.clicked;
  return (
    <ThemeProvider>
      <div>
        <h2
          className="cursor-pointer bg-gradient-to-r hover:from-blue-950 from-blue-700 to-white flex justify-between px-10 py-2 text-white font-serif normalcase font-extralight rounded-xl w-full dark:from-black dark:to-white dark:text-white dark:hover:from-neutral-800 dark:hover:to-white"
          onClick={() => dispatch(setClicked(!state.clicked))}
          onMouseEnter={() => dispatch(setOpen(true))}
          onMouseLeave={() => dispatch(setOpen(null))}
        >
          <span>{state.isCreated ? "ADD TASK" : "CREATE TASK"}</span>{" "}
          <span className="text-blue-500 font-extrabold">
            {taskOpened ? "🔽" : "🔼"}
          </span>
        </h2>
        {taskOpened && (
          <form className="bg-white p-3 font-serif dark:bg-neutral-700">
            <label
              htmlFor="taskTitle"
              className="flex gap-5 font-bold tracking-wide text-md dark:text-slate-200"
            >
              Task Name:{" "}
              <input
                type="text"
                id="taskTitle"
                className="bg-gray-100 h-7 px-3 focus:outline-blue-500"
                onChange={(e) => dispatch(setTaskTitle(e.target.value))}
              />
            </label>
            <br />
            <label
              htmlFor="description"
              className="flex gap-5 font-bold tracking-wide text-md dark:text-slate-200"
            >
              Description:{" "}
              <input
                type="text"
                id="description"
                className="bg-gray-100 h-7 px-3 focus:outline-blue-500"
                onChange={(e) => dispatch(setDescription(e.target.value))}
              />
            </label>
            <br />
            <label
              htmlFor="priority"
              className="flex gap-5 font-bold tracking-wide text-md dark:text-slate-200"
            >
              Priority:{" "}
              <select
                name="priority"
                id="priority"
                className="bg-gray-100 h-7 px-3 focus:outline-blue-500 dark:text-black"
                onChange={(e) => dispatch(setPriority(e.target.value))}
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </label>
            <br />
            <label
              htmlFor="Category"
              className="flex gap-5 font-bold tracking-wide text-md dark:text-slate-200"
            >
              Category:{" "}
              <select
                name="category"
                id="category"
                className="bg-gray-100 h-7 px-3 focus:outline-blue-500 dark:text-black"
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                <option value="personal">personal</option>
                <option value="work">work</option>
                <option value="other">other</option>
              </select>
            </label>
            <br />
            <label
              htmlFor="datepicker"
              className="flex gap-5 font-bold tracking-wide text-md dark:text-slate-200"
            >
              Deadline:{" "}
              <DatePicker
                id="datepicker"
                onChange={(date) => dispatch(setDeadline(date))}
                className="bg-gray-100 h-7 px-3 focus:outline-blue-500 dark:text-black"
                placeholderText={state.deadline}
                showTimeSelect
              />
            </label>
            <br />
            <p
              onClick={(e) => {
                e.preventDefault();
                const newTask = {
                  taskTitle: state.taskTitle,
                  description: state.description,
                  priority: state.priority,
                  category: state.category,
                  completed: false,
                  duedate: new Date(Date.now()),
                  deadline: state.deadline,
                };
                setTaskList([...taskList, newTask]);
                dispatch(setIsCreated(true));
              }}
              className="bg-blue-500 rounded-xl text-center p-3 text-xl tracking-widest hover:bg-blue-950 hover:text-white  dark:bg-black dark:text-white dark:hover:bg-neutral-800"
            >
              <button className="font-sans font-bold">CREATE</button>
            </p>
          </form>
        )}
      </div>
    </ThemeProvider>
  );
}
export default CreateTask;
