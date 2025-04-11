import { Task } from "../interfaces/Task";
import {
  deleteTask,
  toggleTaskCompletion,
  updateTask,
} from "../provider/TaskApi";
import { useState } from "react";

const TaskCard = ({ task }: { task: Task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleCompletion = async () => {
    try {
      await toggleTaskCompletion(task.id);
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const updatedTask = {
        ...task,
        title: editedTitle,
        description: editedDescription,
      };
      await updateTask(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="card">
      <h3
        className={`card-header ${
          task.isCompleted ? "bg-success" : "bg-warning"
        }`}
      >
        {task.title}
      </h3>
      <div className="card-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Edit title"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Edit description"
            ></textarea>
            <button className="btn btn-primary" onClick={handleEdit}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <h5 className="card-title">{task.description}</h5>
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
            <button
              className="btn btn-success"
              onClick={handleToggleCompletion}
            >
              {task.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <div className="card-footer text-muted">
              Created At: {new Date(task.createdAt).toLocaleString()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
