import { Box, Typography } from "@mui/material";
import type { Activity } from "../../types/activity";
import { activityConfig } from "../../config/activityConfig";
import { getRelativeTime } from "../../utils/relativeTime";

type Props = {
  activity: Activity;
};

export default function NotificationCard({activity}:Props) {

  const time = getRelativeTime(activity.createdAt)
  const config = activityConfig[activity.type]
  const Icon = config.icon;


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "18px",
        p: { xs: 2, md: 2.5 },
        borderRadius: "20px",
        bgcolor: "#f9fafb",
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: "16px",
          bgcolor: "#eff6ff",
          color: "#2563eb",
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
      <Icon sx={{ fontSize: 24 }}/>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            color: "text.primary",
            fontSize: 15,
            fontWeight: 500,
            lineHeight: 1.9,
            mb: 1,
          }}
        >
         {config.label}
        </Typography>

        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: 13,
          }}
        >
          {time}
        </Typography>
      </Box>
    </Box>
  );
}
