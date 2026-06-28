import { Box, Typography } from "@mui/material";
import type { Activity } from "../../types/activity";
import { activityConfig } from "../../config/activityConfig";
import { getRelativeTime } from "../../utils/relativeTime";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {

  const time = getRelativeTime(activity.createdAt);
  const config = activityConfig[activity.type]

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: "16px",
        bgcolor: "#f9fafb",
      }}
    >
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 600,
        }}
      >
        {config.label}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          color: "#6b7280",
          fontSize: 13,
        }}
      >
        {time}
      </Typography>
    </Box>
  );
}