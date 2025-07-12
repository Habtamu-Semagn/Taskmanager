import TaskElement from "../components/TaskElement";
import { useTaskContext } from "../contexts/TaskContext";
import completedImg from "../assets/noneCompleted.PNG";
function Completed() {
  const { taskList } = useTaskContext();
  const completed = taskList.filter((task) => task.completed === true);
  return (
    <div>
      {completed.length ? (
        <div>
          {completed.map((ele) => (
            <TaskElement el={ele} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div>
            <img
              className="mt-10 dark:brightness-50"
              src={completedImg}
              alt="image not found"
            />
            <p className="font-bold tracking-wide text-xl text-center mt-3 dark:text-white">
              No completed task
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Completed;
