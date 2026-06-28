import { v4 as uuidv4 } from "uuid";
import type { Project } from "../types/project";
import { addActivity } from "./activityService";

const PROJECT_KEY = "projects";

export const getProjects = (): Project[] => {
  return JSON.parse(localStorage.getItem(PROJECT_KEY) || "[]");
};

export const createProject = (data: Omit<Project, "id" | "createdAt">) => {
  const projects = getProjects();

  const newProject: Project = {
    id: uuidv4(),
    createdAt: Date.now(),
    name: data.name,
    description: data.description,
    status: data.status,
    priority: data.priority,
  };

  projects.push(newProject);

  localStorage.setItem(PROJECT_KEY, JSON.stringify(projects));

  addActivity({
    id: uuidv4(),
    type: "project_created",
    createdAt: Date.now(),
  });

  return newProject;
};

export const saveProjects = (projects: Project[]) => {
  localStorage.setItem(PROJECT_KEY, JSON.stringify(projects));
};
