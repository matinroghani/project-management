import { Box, Card, Chip, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Task } from "../../types/task";
import { priorityConfig } from "./taskConfig";
import { useDraggable } from "@dnd-kit/core";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const priority = priorityConfig[task.priority];
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;
  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      component={RouterLink}
      to={`/tasks/${task.id}`}
      sx={{
        textDecoration: "none",
        p: 2.25,
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        transition: "all .2s",

        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,.08)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#111827",
          mb: 1.25,
        }}
      >
        {task.title}
      </Typography>

      <Typography
        sx={{
          color: "#6b7280",
          fontSize: "13px",
          lineHeight: 1.8,
          mb: 2,
        }}
      >
        {task.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Chip
          label={priority.label}
          size="small"
          sx={{
            height: 28,
            borderRadius: "999px",
            backgroundColor: priority.bg,
            color: priority.color,
            fontWeight: 700,
          }}
        />

        <Typography
          sx={{
            color: "#9ca3af",
            fontSize: "12px",
          }}
        >
          {task.dueDate
            ? new Intl.DateTimeFormat("fa-IR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(new Date(task.dueDate))
            : "-"}
        </Typography>
      </Box>
    </Card>
  );
}
