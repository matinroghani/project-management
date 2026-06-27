import { Box, Card, LinearProgress, Typography } from "@mui/material";

type ProgressProps = {
    progress:number
}

export default function ProgressProject({progress}:ProgressProps) {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderRadius: "28px",
        p: { xs: 3, md: 4 },
        border: "1px solid #e5e7eb",
        boxShadow: "0 15px 40px rgba(15, 23, 42, 0.05)",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          color: "text.primary",
          mb: 3,
        }}
      >
        درصد پیشرفت
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 12,
            borderRadius: "999px",
            bgcolor: "#e5e7eb",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#2563eb",
            },
          }}
        />

        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#2563eb",
          }}
        >
          {progress}٪
        </Typography>
      </Box>
    </Card>
  );
}
