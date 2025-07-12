import Chart from "react-google-charts";
import CreateTask from "../components/CreateTask";
import { useTaskContext } from "../contexts/TaskContext";
import TasksByDate from "../components/TasksByDate";
import ProgressBar from "../components/ProgressBar";
import { NoTask } from "../components/NoTask";
function Dashboard() {
  const { taskList } = useTaskContext();
  if (taskList.length) {
    const totalTasks = taskList.length;
    const completedTasks = taskList.filter(
      (el) => el.completed === true
    ).length;
    const remainTasks = totalTasks - completedTasks;

    const sortedByDeadline = taskList.sort((a, b) => a.deadline - b.deadline);
    const deadline = sortedByDeadline[0].deadline;

    const data = [
      ["Task", "Hours per Day"],
      [`completed: ${completedTasks}`, completedTasks],
      [`Remain: ${remainTasks}`, remainTasks],
    ];
    const options = {
      title: `Total tasks: ${totalTasks}`,
    };

    return (
      <div className="p-10 flex flex-col">
        <h1 className="font-bold text-end dark:text-white">Task Summary</h1>
        <div className="chart flex">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"500px"}
            height={"400px"}
          />
        </div>

        {deadline && (
          <div>
            <h1 className="font-bold text-end m-3 dark:text-white">
              Upcoming Deadline
            </h1>
            <p className="text-red-600 font-extrabold bg-white rounded-xl p-3">{`${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()}`}</p>
          </div>
        )}

        <h1 className="font-bold text-end m-3 dark:text-white">
          Quick Add Task
        </h1>
        <CreateTask />

        <h1 className="font-bold text-end dark:text-white mt-10 mb-10">
          Progress Metrics
        </h1>
        <ProgressBar />
        <h1 className="font-bold text-end dark:text-white mt-20">
          Recently Created Tasks
        </h1>
        <TasksByDate place="dashboard" />
      </div>
    );
  } else {
    return <NoTask />;
  }
}
export default Dashboard;
