import axios from "axios";
import { Task } from "../interfaces/Task";

//for the base url = import.meta.env.VITE_API_URL

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL});


export const getTasks = async () => {
  try {
    const response = await API.get<Task[]>("/api/task");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export const createTask = async (task: Task) => {
  try {
    const response = await API.post<Task>("/api/task", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

export const updateTask = async (task: Task) => {
  try {
    const response = await API.put<Task>(`/api/task/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
}

export const deleteTask = async (taskId: number) => {
  try {
    const response = await API.delete(`/api/task/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}

export const getTaskById = async (taskId: number) => {
  try {
    const response = await API.get<Task>(`/api/task/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw error;
  }
}

export const toggleTaskCompletion = async (taskId: number) => {
  try {
    const response = await API.patch<Task>(`/api/task/${taskId}/toggle`);
    return response.data;
  } catch (error) {
    console.error("Error toggling task completion:", error);
    throw error;
  }
}
