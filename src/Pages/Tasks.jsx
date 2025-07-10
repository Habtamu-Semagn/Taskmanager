import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
function Tasks() {
  return (
    <div className="p-10">
      <SearchBar />
      <CreateTask />
      <TaskList />
    </div>
  );
}
export default Tasks;
