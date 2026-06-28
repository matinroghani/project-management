import AddTaskIcon from "@mui/icons-material/AddTask";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";

import type { ActivityType } from "../types/activity";

export const activityConfig: Record<
  ActivityType,
  {
    label: string;
    icon: React.ElementType;
    color: string;
  }
> = {
  task_created: {
    label: "یک تسک جدید ایجاد شد",
    icon: AddTaskIcon,
    color: "#2563eb",
  },

  task_completed: {
    label: "یک تسک تکمیل شد",
    icon: TaskAltIcon,
    color: "#22c55e",
  },

  task_updated: {
    label: "یک تسک بروزرسانی شد",
    icon: EditNoteIcon,
    color: "#f59e0b",
  },

  project_created: {
    label: "یک پروژه جدید ایجاد شد",
    icon: FolderOpenIcon,
    color: "#2563eb",
  },

  project_updated: {
    label: "پروژه بروزرسانی شد",
    icon: DriveFileRenameOutlineIcon,
    color: "#f59e0b",
  },

  project_deleted: {
    label: "پروژه حذف شد",
    icon: DeleteIcon ,
    color: "#ef4444",
  },
};