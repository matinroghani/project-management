export type ActivityType =
  | "task_created"
  | "task_completed"
  | "task_updated"
  | "project_created"
  | "project_updated"
  | "project_deleted";

export interface Activity {
  id: string;
  type: ActivityType;
  createdAt: number;
}