import { Box, Grid, Typography } from "@mui/material";
import StatCard from "../../components/Dashboard/StatCard";
import { getProjects, getTasks } from "../../services/dashboardService";
import RecentProjects from "../../components/Dashboard/RecentProjects";
import { getProjectStats } from "../../utils/projectStats";
import { statsConfig } from "../../config/dashboardConfig";
import ActivityCard from "../../components/Activity/ActivityCard";
import { getActivities } from "../../services/activityService";

export default function MainDashboardPage() {
  const projects = getProjects();
  const displayRecentProjects = projects.slice(-4).reverse();
  const tasks = getTasks();
  const activities = getActivities()
  .sort((a, b) => b.createdAt - a.createdAt)
  .slice(0, 4);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f6f8fb",
        display: "flex",
        direction: "rtl",
      }}
    >
      <Box
        component="section"
        sx={{
          flex: 1,
          p: 4,
        }}
      >
        {/* Header */}
        <Box
          component="header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              داشبورد
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                mt: 0.75,
              }}
            >
              نمای کلی وضعیت پروژه‌ها و فعالیت‌ها
            </Typography>
          </Box>
        </Box>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 3.5 }}>
          {statsConfig.map((item) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard label={item.label} value={item.value} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom */}
        <Grid container spacing={3}>
          {/* Recent Projects */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "24px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 12px 35px rgba(15,23,42,.05)",
                p: 3,
                height: "100%",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  پروژه‌های اخیر
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {displayRecentProjects.map((project) => {
                  const stats = getProjectStats(project.id, tasks);
                  return (
                    <RecentProjects
                      taskCount={stats.taskCount}
                      data={project}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Recent Activity */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "24px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 12px 35px rgba(15,23,42,.05)",
                p: 3,
                height: "100%",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  فعالیت‌های اخیر
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {activities.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
