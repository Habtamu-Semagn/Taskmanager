import { useTaskContext } from "../contexts/TaskContext";
import TaskElement from "./TaskElement";

function Priority() {
  const { taskList } = useTaskContext();
  return (
    <div className="priority cursor-pointer select-none">
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest dark:bg-black dark:text-white dark:border-none">
          Low
        </h2>
        {taskList
          .filter((el) => el.priority === "low")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest dark:bg-black dark:text-white dark:border-none">
          Medium
        </h2>
        {taskList
          .filter((el) => el.priority === "medium")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest dark:bg-black dark:text-white dark:border-none">
          High
        </h2>
        {taskList
          .filter((el) => el.priority === "high")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Priority;
