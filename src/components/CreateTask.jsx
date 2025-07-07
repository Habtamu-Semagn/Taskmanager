import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
function CreateTask({ setTaskList, taskList, completed }) {
  const [isCreated, setIsCreated] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [deadline, setDeadline] = useState(null);
  const taskOpened = open ?? clicked;
  return (
    <>
      <h2 className="cursor-pointer bg-gradient-to-r from-blue-700 to-white flex justify-between px-10 py-2 text-white font-serif normalcase font-extralight rounded-xl w-full " onClick={() => setClicked(!clicked)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(null)}><span>{isCreated ? 'ADD TASK' : 'CREATE TASK'}</span> <span className="text-blue-500 font-extrabold">{taskOpened ? '🔽' : '🔼'}</span></h2>
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
        <label htmlFor="datepicker">Deadline: <DatePicker id="datepicker" onChange={date=> setDeadline(date)} placeholderText={deadline} showTimeSelect/></label><br />
        <button className="flex w-fit justify-end"
          onClick={(e) => {
            e.preventDefault();
            const newTask = {
              taskTitle: taskTitle,
              description: description,
              priority: priority,
              category: category,
              completed: completed,
              duedate: new Date(Date.now()),
              deadline: deadline
            };
            setTaskList([...taskList, newTask]);
            setIsCreated(true);
          }}
        >
          CREATE
        </button>
      </form>}
    </>
  );
}
export default CreateTask;