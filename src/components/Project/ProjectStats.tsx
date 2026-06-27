import { Box, Typography } from "@mui/material";

type ProjectStatProp = {
  data: {
    label: string;
    value: string | number;
  };
};

export default function ProjectStats({ data }: ProjectStatProp) {
  return (
    <Box>
      <Typography
        sx={{
          color: "#6b7280",
          fontSize: "13px",
          mb: 1,
        }}
      >
        {data.label}
      </Typography>

      <Typography
        sx={{
          color: "text.primary",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {data.value}
      </Typography>
    </Box>
  );
}
