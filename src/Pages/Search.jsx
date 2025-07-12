import TaskElement from "../components/TaskElement";
import { useTaskContext } from "../contexts/TaskContext";

function Search({ text }) {
  const { taskList } = useTaskContext();
  const filteredTasks = taskList.filter(
    (task) =>
      task.taskTitle.toLowerCase().includes(text.toLowerCase()) ||
      task.description.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      {!text.length && <p className="text-lg">use the Search bar...</p>}
      {Boolean(text.length) && Boolean(!filteredTasks.length) && (
        <p className="text-lg">No Task for the name provided...</p>
      )}
      {Boolean(text.length) &&
        Boolean(filteredTasks.length) &&
        filteredTasks.map((el) => <TaskElement el={el} />)}
    </div>
  );
}
export default Search;
