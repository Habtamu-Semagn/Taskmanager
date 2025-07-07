import { useState } from "react";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
function Tasks() {
  // const [navigated, setNavigated] = useState(1);
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <CreateTask completed={completed} />
      <TaskList />
    </>
  );
}
export default Tasks;
