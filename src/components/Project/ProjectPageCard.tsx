import { Box, Card, Grid, Typography } from "@mui/material";
import type { Project } from "../../types/project";
import { getProjectStats } from "../../utils/projectStats";
import { getTasks } from "../../services/dashboardService";
import { Link } from "react-router-dom";
type Props = {
  project: Project;
};

export default function ProjectPageCard({ project }: Props) {
  const createdDate = new Intl.DateTimeFormat("fa-IR").format(
    new Date(project.createdAt),
  );

  const tasks = getTasks();

  const stats = getProjectStats(project.id, tasks);
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Card
        component={Link}
        to={`/projects/${project.id}`}
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "24px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 12px 35px rgba(15, 23, 42, 0.05)",
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
          transition: "all .25s",
          display: "block",
          height: "100%",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 18px 45px rgba(15,23,42,.12)",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            color: "text.primary",
            mb: 1.5,
          }}
        >
          {project.name}
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            lineHeight: 1.8,
            mb: 2.5,
          }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2.5,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            {stats.taskCount} تسک
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            {stats.progress}٪ پیشرفت
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 13,
            color: "#9ca3af",
          }}
        >
          {createdDate}
        </Typography>
      </Card>
    </Grid>
  );
}
