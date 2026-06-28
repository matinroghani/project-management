import { Box, Typography } from "@mui/material";
import type { Project } from "../../types/project";

type Props = {
  data: Project;
  taskCount: number;
};

export default function RecentProjects({ data, taskCount }: Props) {
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
        {data.name}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          color: "#6b7280",
          fontSize: 13,
        }}
      >
        {taskCount} تسک فعال
      </Typography>
    </Box>
  );
}
