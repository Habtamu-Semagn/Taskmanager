import { useTaskContext } from "../contexts/TaskContext";
import TaskElement from "../components/TaskElement";
function Categories() {
  const { taskList } = useTaskContext();
  console.log(taskList);
  return (
    <div className="categories cursor-pointer select-none ">
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest dark:bg-slate-800 dark:text-white dark:border-none dark:py-3">
          Personal
        </h2>
        {taskList
          .filter((el) => el.category === "personal")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest dark:bg-slate-800 dark:text-white dark:border-none dark:py-3">
          Work
        </h2>
        {taskList
          .filter((el) => el.category === "work")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest dark:bg-slate-800 dark:text-white dark:border-none dark:py-3">
          Other
        </h2>
        {taskList
          .filter((el) => el.category === "other")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Categories;
