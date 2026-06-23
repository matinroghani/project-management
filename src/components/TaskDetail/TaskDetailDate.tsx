import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
type Props = {
  title: string
  date:string | number | null;
}

export default function TaskDetailDate({title,date}:Props) {
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

      <Typography sx={{ fontWeight: 700, color: "#111827" }}>
       {date ? dayjs(date).format("YYYY/MM/DD") : "-"}
      </Typography>
    </Box>
  );
}
