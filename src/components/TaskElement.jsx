import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import _ from "lodash";
function TaskElement({ el }) {
  console.log(el);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dueDate = new Date(el.duedate);
  const year = dueDate.getFullYear();
  const month = monthsArr[dueDate.getMonth()];
  const date = dueDate.getDate();
  const day = weekDays[dueDate.getDay()];
  const hour = dueDate.getHours();
  const min = dueDate.getMinutes();
  const sec = dueDate.getSeconds();
  const [detail, setDetail] = useState(false);
  //   const [completed, setCompleted] = useState(el.completed);
  return (
    <div className="bg-blue-400 py-3 rounded-lg m-2">
      <p
        className="flex justify-between mb-2 cursor-pointer"
        onClick={(e) => {
          setDetail(!detail);
          if (e.target === "Complete") {
            setTaskList(
              taskList.map((task) => {
                _.isEqual(task, el) ? { ...task, completed: true } : task;
              })
            );
          }
        }}
      >
        {" "}
        <span className="font-bold flex gap-3">
          {detail ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {el.taskTitle}
        </span>
        <span>{`${day} ${date} ${month}, ${year}`}</span>
        ////
      </p>
      {detail === true && (
        <div className="bg-blue-200 leading-1.6">
          <span className="flex flex-wrap gap-3">
            <DescriptionIcon />
            {el.description}
          </span>
          <span className="font-extralight self-end">{`${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`}</span>
        </div>
      )}
      <p
        className="flex justify-between items-center pt-3"
        onClick={(e) => {
          // e.target.textContent === "Complete" ? setCompleted(true) : null;
          console.log("target", e.target);
          console.log("current target", e.currentTarget);
        }}
      >
        <EditIcon />
        <DeleteIcon />
        <button className="bg-blue-500 rounded-xl font-bold font-serif px-3">
          {el.completed ? <CheckIcon /> : "Complete"}
        </button>
      </p>
    </div>
  );
}
export default TaskElement;
