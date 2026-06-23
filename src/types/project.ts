export interface Project {
  id: string;
  createdAt: number;
  name: string;
  description?: string;
  status: "planning" | "active" | "paused" | "completed";
  priority: "low" | "medium" | "high";
}
