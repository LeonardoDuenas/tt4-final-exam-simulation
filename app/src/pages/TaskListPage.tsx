import TaskCard from "../components/TaskCard";
import { useState, useEffect } from "react";
import { Task } from "../interfaces/Task";
import { getTasks } from "../provider/TaskApi";

function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-center">Your tasks</h2>
      {tasks.length === 0 ? (
        <div className="text-center py-5">
          <h3>No tasks available</h3>
        </div>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div className="col-md-4 mb-4" key={task.id}>
              <TaskCard task={task} onRefresh={fetchTasks} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskListPage;
