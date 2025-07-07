import Chart from "react-google-charts";
import CreateTask from "../components/CreateTask";
import { useTaskContext } from "../contexts/TaskContext";
import noTaskImg from "../assets/notask.png";
import { Link } from "react-router-dom";
import TasksByDate from "../components/TasksByDate";
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
      <div>
        <h1 className="font-bold text-end">Task Summary</h1>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"500px"}
          height={"400px"}
        />
        {deadline && (
          <div>
            <h1 className="font-bold text-end m-3">Upcoming Deadline</h1>
            <p className="text-red-600 font-extrabold bg-white rounded-xl p-3">{`${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()}`}</p>
          </div>
        )}
        <h1 className="font-bold text-end m-3">Quick Add Task</h1>
        <CreateTask />
        <h1 className="font-bold text-end">Progress Metrics</h1>
        <h1 className="font-bold text-end">Recent Activity</h1>
        <TasksByDate place="dashboard" />
      </div>
    );
  } else {
    return (
      <div>
        <img src={noTaskImg} alt="no image" />
        <p className="text-center bg-white p-3">
          <button className="bg-blue-500 font-bold text-white p-4 text-center text-xl hover:bg-blue-900 cursor-pointer">
            <Link to="tasks">Create New Task</Link>
          </button>
        </p>
      </div>
    );
  }
}
export default Dashboard;
