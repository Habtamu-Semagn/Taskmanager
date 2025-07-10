import { useTaskContext } from "../contexts/TaskContext";
import TaskElement from "./TaskElement";

const groupTasksByDate = (taskList) => {
  return taskList.reduce((grouped, task) => {
    const year = task.duedate.getFullYear();
    const month = task.duedate.getMonth() + 1;
    const date = task.duedate.getDate();
    const time = `${date}/${month}/${year}`;
    if (!grouped[time]) {
      grouped[time] = [];
    }
    grouped[time].push(task);
    return grouped;
  }, {});
};

function TasksByDate({ place }) {
  const { taskList } = useTaskContext();
  const sorted = taskList.sort((a, b) => b.duedate - a.duedate);
  const tasksbydate = groupTasksByDate(sorted);
  const sortedDates = Object.keys(tasksbydate);
  const recentDates = Object.keys(tasksbydate).slice(0, 3);

  return (
    <div>
      {place === "dashboard"
        ? recentDates.map((date) => (
            <div>
              <p className="text-end font-bold">{date}</p>
              {tasksbydate[date].map((task) => (
                <TaskElement el={task} />
              ))}
            </div>
          ))
        : sortedDates.map((date) => (
            <div>
              <p className="text-end font-bold">{date}</p>
              {tasksbydate[date].map((task) => (
                <div className="flex justify-end gap-10">
                  <TaskElement el={task} />
                </div>
              ))}
            </div>
          ))}
    </div>
  );
}
export default TasksByDate;
