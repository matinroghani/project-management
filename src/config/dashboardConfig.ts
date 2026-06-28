import { getDashboardStats } from "../utils/dashboardStats";

const stats = getDashboardStats();

export const statsConfig = [
  {
    label: "تعداد پروژه‌ها",
    value: stats.totalProjects,
  },
  {
    label: "تعداد تسک‌ها",
    value: stats.totalTasks,
  },
  {
    label: "تسک‌های تکمیل شده",
    value: stats.completedTasks,
  },
  {
    label: "پروژه‌های فعال",
    value: stats.totalProjects,
  },
];
