import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      category: "personal",
      completed: false,
      deadline: new Date(Date.now()),
      description: "selam",
      duedate: new Date(null),
      priority: "medium",
      taskTitle: "selam",
    },
    {
      id: 1,
      category: "work",
      completed: false,
      deadline: new Date(Date.now()),
      description: "selam",
      duedate: new Date("2025-06-30"),
      priority: "medium",
      taskTitle: "066-30-same-day",
    },
    {
      id: 2,
      category: "other",
      completed: false,
      deadline: new Date(Date.now()),
      description: "selam",
      duedate: new Date("2025-06-30"),
      priority: "medium",
      taskTitle: "06-30-same-day",
    },
    {
      id: 3,
      taskTitle: "selam-next",
      description: "selam",
      priority: "medium",
      category: "personal",
      completed: false,
      duedate: new Date("2025-07-07T00:50:40.900Z"),
      deadline: new Date("2025-07-06T07:00:00.000Z"),
    },
    {
      id: 4,
      taskTitle: "task",
      description: "task description",
      priority: "low",
      category: "work",
      completed: false,
      duedate: new Date("2025-07-07T00:50:40.900Z"),
      deadline: new Date("2025-07-06T07:00:00.000Z"),
    },
  ]);
  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used with in the TaskProvider");
  }
  return context;
}
export default TaskContext;
