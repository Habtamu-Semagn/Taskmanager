import { useTaskContext } from "../contexts/TaskContext";

function ProgressBar() {
  const { taskList } = useTaskContext();
  const completed = taskList.filter((task) => task.completed === true).length;
  const totalTask = taskList.length;
  return (
    <div>
      <h1>progress bar</h1>
      <div className="flex p-0 w-100 h-10 bg-slate-300 border-none rounded-xl">
        <div
          className="h-10 rounded-xl bg-blue-500 font-bold flex justify-center items-center"
          style={{ width: `${(completed / totalTask) * 100}%` }}
        >
          <span className="ml-5">
            {Math.round((completed / totalTask) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
