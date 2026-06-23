import {
  Box,
  Card,
  Typography,
} from "@mui/material";
import TaskDetailStats from "../../components/TaskDetail/TaskDetailStats";
import TaskDetailDate from "../../components/TaskDetail/TaskDetailDate";
import { useParams } from "react-router-dom";
import { getTasks } from "../../services/dashboardService";
import {
  priorityConfig,
  statusConfig,
} from "../../components/Kanban/taskConfig";
import { toJalali } from "../../utils/date";
import CommentSection from "../../components/TaskDetail/CommentSection";

export default function TaskDetailsPage() {
  const { id } = useParams();

  const task = getTasks().find((t) => t.id === id);

  if (!task) {
    return <Typography>تسک پیدا نشد</Typography>;
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f6f8fc",
        p: { xs: 2.5, md: 5 },
        direction: "rtl",
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* HEADER */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "34px",
              fontWeight: 700,
              color: "#111827",
              mb: 1,
            }}
          >
            جزئیات تسک
          </Typography>

          <Typography sx={{ color: "#6b7280" }}>
            مشاهده اطلاعات کامل و مدیریت کامنت‌های تسک
          </Typography>
        </Box>

        {/* TASK INFO */}
        <Card
          sx={{
            p: 3.5,
            borderRadius: "28px",
            bgcolor: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 15px 40px rgba(15,23,42,0.05)",
            mb: 3,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              اطلاعات کامل تسک
            </Typography>
          </Box>

          {/* TITLE + DESC */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#111827",
                mb: 1.5,
              }}
            >
              {task.title}
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                lineHeight: 2,
              }}
            >
              {task.description}
            </Typography>
          </Box>

          {/* INFO GRID */}
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2,1fr)",
                xl: "repeat(4,1fr)",
              },
            }}
          >
            <TaskDetailStats
              title="وضعیت"
              label={statusConfig[task.status].label}
              bg={statusConfig[task.status].bg}
              color={statusConfig[task.status].color}
            />

            <TaskDetailStats
              title="اولویت"
              label={priorityConfig[task.priority].label}
              bg={priorityConfig[task.priority].bg}
              color={priorityConfig[task.priority].color}
            />
            <TaskDetailDate title="تاریخ ایجاد" date={toJalali(task.createdAt)} />
            <TaskDetailDate title="تاریخ تحویل" date={toJalali(task.dueDate)} />
          </Box>
        </Card>
        {/* commentsection */}
        <CommentSection/>
      </Box>
    </Box>
  );
}
