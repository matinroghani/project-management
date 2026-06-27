import type { Task } from "../types/task";

export const getProjectStats = (
  projectId: string,
  tasks: Task[]
) => {
  const projectTasks = tasks.filter(
    (task) => task.projectId === projectId
  );

  const completedTasks = projectTasks.filter(
    (task) => task.status === "done"
  );

  const progress =
    projectTasks.length === 0
      ? 0
      : Math.round(
          (completedTasks.length /
            projectTasks.length) *
            100
        );

  return {
    taskCount: projectTasks.length,
    progress,
  };
};

export const filterConfig = [
  {
    value: "همه پروژه‌ها",
    filter: "all",
  },
  {
    value: "فعال",
    filter: "active",
  },
  {
    value: "تکمیل شده",
    filter: "completed",
  },
];