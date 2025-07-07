import TaskElement from "../components/TaskElement";
import { useTaskContext } from "../contexts/TaskContext";

function Completed() {
  const { taskList } = useTaskContext();
  const completed = taskList.filter((task) => task.completed === true);
  return (
    <div>
      {completed ? (
        <div>
          {completed.map((ele) => (
            <TaskElement el={ele} />
          ))}
        </div>
      ) : (
        <img src={completedImg} alt="image not found" srcset="" />
      )}
    </div>
  );
}
export default Completed;
