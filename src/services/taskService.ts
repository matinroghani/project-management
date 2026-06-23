import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/task";

const TASK_KEY = "tasks";

export const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem(TASK_KEY) || "[]");
};

export const createTask = (data: Omit<Task, "id" | "createdAt">) => {
  const tasks = getTasks();

  const newTask: Task = {
    id: uuidv4(),
    createdAt: Date.now(),
    title: data.title,
    description: data.description,
    status: data.status,
    priority: data.priority,
    dueDate: data.dueDate,
    projectId: data.projectId,
  };

  tasks.push(newTask);
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));

  return newTask;
};

export const saveTask = (tasks: Task[]) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
};
