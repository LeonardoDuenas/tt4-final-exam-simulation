import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/TaskList" element={<TaskListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
