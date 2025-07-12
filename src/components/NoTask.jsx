import { Link } from "react-router-dom";
import noTaskImg from "../assets/notask.png";
export function NoTask() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={noTaskImg} alt="no image" />
        <p className="text-center bg-white p-3">
          <button className="bg-blue-500 font-bold text-white p-4 text-center text-xl hover:bg-blue-900 cursor-pointer">
            <Link to="tasks">Create New Task</Link>
          </button>
        </p>
      </div>
    </div>
  );
}
