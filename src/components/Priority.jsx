function Priority({ taskList }) {
  return (
    <div className="priority flex justify-between cursor-pointer select-none ">
      <div>
        <h2>Low</h2>
        {taskList
          .filter((el) => el.priority === "low")
          .map((el) => (
            <div>
              {el.taskTitle} {el.priority}
            </div>
          ))}
      </div>
      <div>
        <h2>Medium</h2>
        {taskList
          .filter((el) => el.priority === "medium")
          .map((el) => (
            <div>
              {el.taskTitle} {el.priority}
            </div>
          ))}
      </div>
      <div>
        <h2>High</h2>
        {taskList
          .filter((el) => el.priority === "high")
          .map((el) => (
            <div>
              {el.taskTitle} {el.priority}
            </div>
          ))}
      </div>
    </div>
  );
} 
export default Priority;