import { Box, Card, Chip, Stack, Typography } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import type { Task } from "../../types/task";
import { getProjects } from "../../services/dashboardService";

type Props = {
  id: Task["status"];
  title: string;
  count: number;
  color: string;
  tasks: Task[];
};

export default function KanbanColumn({
  id,
  title,
  count,
  color,
  tasks,
}: Props) {
  const { setNodeRef } = useDroppable({ id });
  const projects = getProjects()

  return (
    <Card
      ref={setNodeRef}
      sx={{
        p: 2.25,
        borderRadius: "20px",
        backgroundColor: "#f1f5f9",
        height: "760px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        border: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2.5,
        }}
      >
        <Stack
          direction="row"
          sx={{
            spacing: "1.2",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {title}
          </Typography>
        </Stack>

        <Chip
          label={count}
          size="small"
          sx={{
            width: 32,
            height: 32,
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#6b7280",
            fontWeight: 700,
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          pr: 0.5,

          "&::-webkit-scrollbar": {
            width: 8,
          },

          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },

          "&::-webkit-scrollbar-thumb": {
            background: "#cbd5e1",
            borderRadius: "999px",
          },

          "&::-webkit-scrollbar-thumb:hover": {
            background: "#94a3b8",
          },
        }}
      >
        <Stack spacing={2}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} projects={projects} />
          ))}
        </Stack>
      </Box>
    </Card>
  );
}
