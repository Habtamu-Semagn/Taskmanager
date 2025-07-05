import { Route, Routes } from "react-router-dom";
import TaskManagementTool from "./TaskManagementTool";
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<TaskManagementTool />}/>
      <Route path="/home" element={<Hi />}/>
    </Routes>
    
  );
}
function Hi() {
  return <div>selam</div>
}
export default App;
