import { Box, Card, Typography } from "@mui/material";
import NotificationCard from "../../components/Activity/NotificationCard";
import { getActivities } from "../../services/activityService";

export default function NotificationsPage() {
  const activities = getActivities()
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 4);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f6f8fb",
        p: { xs: 2.5, md: 5 },
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "34px" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1,
            }}
          >
            اعلان‌ها
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
            }}
          >
            آخرین فعالیت‌ها و بروزرسانی‌های سیستم
          </Typography>
        </Box>

        {/* Notifications Card */}
        <Card
          elevation={0}
          sx={{
            bgcolor: "background.paper",
            borderRadius: "28px",
            border: "1px solid #e5e7eb",
            p: 3,
            boxShadow: "0 15px 40px rgba(15, 23, 42, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Notification */}
            {activities.map((activity) => (
              <NotificationCard key={activity.id} activity={activity} />
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
