import { Card, Typography } from "@mui/material";

interface StatCardProps {
  label: string;
  value: number;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderRadius: "24px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 12px 35px rgba(15, 23, 42, 0.05)",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          color: "#6b7280",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 34,
          fontWeight: 700,
          color: "text.primary",
          lineHeight: 1.2,
        }}
      >
        {value}
      </Typography>
    </Card>
  );
}