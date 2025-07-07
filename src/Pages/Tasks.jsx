import { useState } from "react";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
function Tasks({ taskList, setTaskList }) {
  // const [navigated, setNavigated] = useState(1);
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <CreateTask
        setTaskList={setTaskList}
        taskList={taskList}
        completed={completed}
      />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}
export default Tasks;
