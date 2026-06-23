import type { Project } from "../types/project";
import type { Task } from "../types/task";

const PROJECT_KEY = "projects";
const TASK_KEY = "tasks";

// Getting Projects from Localstorage
export const getProjects = (): Project[] => {
  return JSON.parse(localStorage.getItem(PROJECT_KEY) || "[]");
};

// Getting Tasks from Localstorage
export const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem(TASK_KEY) || "[]");
};
