
export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: "todo" | "inProgress" | "review" | "done";
  priority: "low" | "medium" | "high";
  dueDate:string | null;
  createdAt: number;
}