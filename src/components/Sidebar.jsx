import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import CategoryIcon from '@mui/icons-material/Category';
import DoneIcon from '@mui/icons-material/Done';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
function Sidebar() {
  return <div className="bg-gradient-to-br from-sky-400 to-blue-700 sm:w-80 h-[calc(85vh)] rounded-xl p-10">
          <Link to='/'><li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold flex gap-5"><DashboardIcon/>Dashboard</li></Link>
          <Link to='/tasks'><li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold flex gap-5"><TaskIcon />Tasks</li></Link>
          <Link to='/categories'><li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold flex gap-5"><CategoryIcon />Categories</li></Link>
          <Link to='/completed'><li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold flex gap-5"><DoneIcon />Completed</li></Link>
          <Link to='/settings'><li className="list-none text-center bg-blue-50 hover:bg-orange-500 hover:text-amber-50 rounded-xl px-10 py-5 my-5 cursor-pointer font-bold flex gap-5"><SettingsIcon />Settings</li></Link>
        </div>;
}
export default Sidebar;