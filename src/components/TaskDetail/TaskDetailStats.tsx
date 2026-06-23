import { Box, Chip, Typography } from "@mui/material";

type Props = {
  title: string
  label:string
  color:string
  bg:string
}

export default function TaskDetailStats({title, label, color, bg}:Props) {
  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: "18px",
        bgcolor: "#f8fafc",
      }}
    >
      <Typography sx={{ color: "#94a3b8", fontSize: 13, mb: 1 }}>
        {title}
      </Typography>

      <Chip
        label={label}
        sx={{
          bgcolor: bg,
          color: color,
          fontWeight: 700,
        }}
      />
    </Box>
  );
}
