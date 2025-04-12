import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/TaskList" element={<TaskListPage />} />
          <Route path="/CreateTask" element={<CreateTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
