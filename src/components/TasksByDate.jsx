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

function TasksByDate({ taskList }) {
  console.log("final", taskList);
  const tasksbydate = groupTasksByDate(taskList);
  const sortedDates = Object.keys(tasksbydate).sort();
  console.log("tasks by date", tasksbydate);
  console.log("sorted dates", sortedDates);
  return (
    <div>
      {sortedDates.map((date) => (
        <div>
          <p className="text-end font-bold">{date}</p>
          {tasksbydate[date].map((task) => (
            <TaskElement el={task} />
          ))}
        </div>
      ))}
    </div>
  );
}
export default TasksByDate;
