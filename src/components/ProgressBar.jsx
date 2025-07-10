import { useTaskContext } from "../contexts/TaskContext";
import { ThemeProvider } from "../contexts/ThemeContext";

function ProgressBar() {
  const { taskList } = useTaskContext();
  const completed = taskList.filter((task) => task.completed === true).length;
  const totalTask = taskList.length;
  return (
    <ThemeProvider>
      <div>
        <div className="flex p-0 w-100 h-10 bg-slate-300 border-none rounded-xl">
          <div
            className="h-10 rounded-xl bg-blue-500 font-bold flex justify-center items-center dark:bg-neutral-800 dark:text-slate-300"
            style={{ width: `${(completed / totalTask) * 100}%` }}
          >
            <span className="ml-5">
              {Math.round((completed / totalTask) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ProgressBar;
