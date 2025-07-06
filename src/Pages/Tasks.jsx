import { useState } from "react";
import CreateTask from "../components/CreateTask";
import DisplayTasks from "../components/DisplayTasks";
function Tasks() {
  const [taskList, setTaskList] = useState([]);
  const [navigated, setNavigated] = useState(1);
  const [completed, setCompleted] = useState(false);
  return <><CreateTask
            setTaskList={setTaskList}
            taskList={taskList}
            completed={completed}
          />
          <DisplayTasks
            taskList={taskList}
            setTaskList={setTaskList}
            navigated={navigated}
            setNavigated={setNavigated}
          /></>
}
export default Tasks;