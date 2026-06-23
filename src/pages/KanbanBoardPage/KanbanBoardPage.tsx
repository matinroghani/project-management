import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import KanbanColumn from "../../components/Kanban/KanbanColumn";
import { getTasks } from "../../services/dashboardService";
import { useMemo, useState } from "react";
import type { Task } from "../../types/task";
import { saveTask } from "../../services/taskService";

export default function KanbanBoardPage() {
  const columnsConfing = [
    { id: "todo", title: "انجام نشده", color: "#64748b" },
    { id: "inProgress", title: "در حال انجام", color: "#2563eb" },
    { id: "review", title: "در حال بررسی", color: "#f59e0b" },
    { id: "done", title: "تکمیل شده", color: "#22c55e" },
  ];

  const [tasks, setTasks] = useState(getTasks());

  const tasksByStatus = useMemo(() => {
    return {
      todo: tasks.filter((t) => t.status === "todo"),
      inProgress: tasks.filter((t) => t.status === "inProgress"),
      review: tasks.filter((t) => t.status === "review"),
      done: tasks.filter((t) => t.status === "done"),
    };
  }, [tasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    setTasks((prev) => {
      const updated = prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus as Task["status"],
            }
          : task,
      );
      saveTask(updated);
      return updated;
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
          p: {
            xs: 2.5,
            md: 4,
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
              }}
            >
              بورد مدیریت تسک‌ها
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#6b7280",
                fontSize: "15px",
              }}
            >
              مدیریت جریان کاری پروژه با ساختار Kanban
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/create-task"
            variant="contained"
            sx={{
              height: 56,
              px: 3,
              borderRadius: "12px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            ایجاد تسک جدید
          </Button>
        </Box>

        {/* Board */}
        <Box
          sx={{
            display: "grid",
            gap: 3,
            alignItems: "start",

            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,1fr)",
              xl: "repeat(4,1fr)",
            },
          }}
        >
          {columnsConfing.map((col) => {
            const columnTasks =
              tasksByStatus[col.id as keyof typeof tasksByStatus] || [];

            return (
              <KanbanColumn
                id={col.id as Task["status"]}
                key={col.id}
                title={col.title}
                color={col.color}
                count={columnTasks.length}
                tasks={columnTasks}
              />
            );
          })}
        </Box>
      </Box>
    </DndContext>
  );
}
