import { getProjects, getTasks } from "../services/dashboardService";

export const getDashboardStats = () => {
  const projects = getProjects();
  const tasks = getTasks();

  const totalProjects = projects.length;

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((t) => t.status === "done").length;

  const activeProjects = projects.filter((p) => p.status === "active").length;

  return {
    totalProjects,
    totalTasks,
    completedTasks,
    activeProjects,
  };
};
