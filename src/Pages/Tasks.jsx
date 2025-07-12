import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
function Tasks() {
  return (
    <div className="p-10">
      <CreateTask />
      <TaskList />
    </div>
  );
}
export default Tasks;
