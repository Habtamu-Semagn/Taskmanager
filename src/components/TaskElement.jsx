import { useCallback, useState } from "react";
import _ from "lodash";
import RemoveIcon from "@mui/icons-material/Remove";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskContext } from "../contexts/TaskContext";
import { AddCircle } from "@mui/icons-material";
import { ThemeProvider } from "../contexts/ThemeContext";

function handleComplete(e, el, taskList, setTaskList, handleEdit) {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Complete") {
    const updated = taskList.map((task) =>
      _.isEqual(task, el) ? { ...task, completed: true } : task
    );
    setTaskList(updated);
  } else if (e.target.closest(`svg`).id === "delete") {
    const updated = taskList.filter((task) => !_.isEqual(task, el));
    setTaskList(updated);
  } else if (e.target.closest(`svg`).id === "edit") {
    handleEdit(el);
  }
}

function handleDetail(detail, setDetail) {
  setDetail(!detail);
}

function TaskElement({ el }) {
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
  const { taskList, setTaskList } = useTaskContext();
  const [editingTask, setEditingTask] = useState(null);
  const [editForm, setEditForm] = useState({ taskTitle: "", description: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setEditForm({
      taskTitle: task.taskTitle,
      description: task.description || "",
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = useCallback(() => {
    if (!editForm.taskTitle.trim()) return;
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === editingTask ? { ...task, ...editForm } : task
      )
    );
    setEditingTask(null);
    setEditForm({ taskTitle: "", description: "" });
    setIsModalOpen(false);
  }, [editingTask, editForm, setTaskList]);

  const handleCancel = () => {
    setEditingTask(null);
    setEditForm({ taskTitle: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div
        className="bg-blue-400 py-3 rounded-lg m-2 w-100 dark:bg-neutral-500"
        onClick={(e) =>
          handleComplete(e, el, taskList, setTaskList, handleEdit)
        }
      >
        <p
          className="flex justify-between mb-2 cursor-pointer px-3"
          onClick={() => handleDetail(detail, setDetail)}
        >
          {" "}
          <span className="font-bold flex gap-3">
            {detail ? <RemoveIcon /> : <AddCircle />}
          </span>
          <span className="font-bold font-sans text-xl">{el.taskTitle}</span>
          <span className="font-serif">{`${day} ${date} ${month}, ${year}`}</span>
        </p>
        {detail === true && (
          <div className="bg-blue-200 leading-1.6 py-5 px-3">
            <span className="flex flex-wrap gap-5">
              <DescriptionIcon />
              {el.description}
            </span>
            <p className="self-end font-bold text-end">
              created At:{" "}
              {`${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`}
            </p>
          </div>
        )}
        <p className="flex justify-center gap-4 items-center pt-3">
          <EditIcon id="edit" className="custom-cursor-edit" />
          <DeleteIcon id="delete" className="custom-cursor-delete" />
          <button
            title="✔"
            className="bg-blue-500 rounded-xl font-bold font-serif px-3 cursor-grab dark:bg-gradient-to-r dark:from-black dark:to-neutral-500 dark:text-white"
          >
            {el.completed ? <CheckIcon /> : "Complete"}
          </button>
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-20">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="taskTitle"
                value={editForm.taskTitle}
                onChange={handleInputChange}
                className="w-full border p-2 rounded font-bold bg-slate-300 border-none"
                placeholder="Task title"
              />
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleInputChange}
                className="w-full border p-2 rounded font-bold bg-slate-300 border-none"
                placeholder="Task description"
                rows="4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
export default TaskElement;
