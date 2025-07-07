import TaskElement from "./TaskElement";

function Priority({ taskList }) {
  console.log("priority", taskList);
  console.log(
    "medium",
    taskList.filter((el) => el.priority === "high")
  );

  return (
    <div className="priority cursor-pointer select-none ">
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest">
          Low
        </h2>
        {taskList
          .filter((el) => el.priority === "low")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
            </div>
            // taskTitle: taskTitle,
            //   description: description,
            //   priority: priority,
            //   category: category,
            //   completed: completed,
            //   duedate: new Date(Date.now()),
            //   deadline: deadline
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest">
          Medium
        </h2>
        {taskList
          .filter((el) => el.priority === "medium")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
              {/* <li className="">
                {el.taskTitle} {el.duedate}
                </li> */}
            </div>
          ))}
      </div>
      <div>
        <h2 className="bg-sky-400 px-5 border-2 border-sky-400 rounded-lg py-1 my-2 font-extrabold tracking-widest">
          High
        </h2>
        {taskList
          .filter((el) => el.priority === "high")
          .map((ele) => (
            <div>
              <TaskElement el={ele} />
              {/* <li className="">
                {el.taskTitle} {el.duedate}
                </li> */}
            </div>
          ))}
      </div>
    </div>
  );
}
export default Priority;
