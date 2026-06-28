import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/task";
import { addActivity } from "./activityService";

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

  addActivity({
    id: uuidv4(),
    type: "task_created",
    createdAt: Date.now(),
  });

  return newTask;
};

export const saveTask = (tasks: Task[]) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
};


export const updateTaskStatus = (
  taskId: string,
  status: Task["status"]
) => {
  const tasks = getTasks();

  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          status,
        }
      : task
  );

  localStorage.setItem(
    TASK_KEY,
    JSON.stringify(updatedTasks)
  );

  addActivity({
    id: uuidv4(),
    type: "task_updated",
    createdAt: Date.now(),
  });

  return updatedTasks;
};