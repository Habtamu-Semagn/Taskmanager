import { useTaskContext } from "../contexts/TaskContext";

function Categories() {
  const { taskList } = useTaskContext();
  return (
    <div className="categories cursor-pointer select-none ">
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest">
          Personal
        </h2>
        {taskList
          .filter((el) => el.categories === "personal")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest">
          Work
        </h2>
        {taskList
          .filter((el) => el.categories === "work")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest">
          Other
        </h2>
        {taskList
          .filter((el) => el.categories === "other")
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
