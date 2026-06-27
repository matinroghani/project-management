import { Box, Grid, Typography } from "@mui/material";

type UserDetailProps = {
  data: {
    label: string;
    value?: string;
  };
};
export default function UserDetail({ data }: UserDetailProps) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Box
        sx={{
          bgcolor: "#f8fafc",
          p: 2.5,
          borderRadius: "18px",
        }}
      >
        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: 13,
            mb: 1,
          }}
        >
          {data.label}
        </Typography>

        <Typography sx={{ fontWeight: 600 }}> {data.value}</Typography>
      </Box>
    </Grid>
  );
}
