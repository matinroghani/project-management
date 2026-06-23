import {
  Avatar,
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";

export default function CommentSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          lg: "2fr 1fr",
        },
      }}
    >
      <Card
        sx={{
          p: 3.5,
          borderRadius: "28px",
          bgcolor: "#fff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 15px 40px rgba(15,23,42,0.05)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
            کامنت‌ها
          </Typography>

          <Typography sx={{ color: "#94a3b8", fontSize: 14 }}>
            ۳ کامنت
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* COMMENT ITEM */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              p: 2.5,
              borderRadius: "20px",
              bgcolor: "#f8fafc",
            }}
          >
            <Avatar
              sx={{
                width: 52,
                height: 52,
                bgcolor: "#2563eb",
                fontWeight: 700,
              }}
            >
              م
            </Avatar>

            <Box sx={{ flex: "1" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography sx={{ fontWeight: "700" }}>محمد رضایی</Typography>

                <Typography sx={{ fontSize: 13, color: "#94a3b8" }}>
                  ۲ ساعت پیش
                </Typography>
              </Box>

              <Typography sx={{ color: "#6b7280", lineHeight: 1.9 }}>
                طراحی اولیه صفحه تکمیل شد و آماده بررسی است.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* ADD COMMENT */}
      <Card
        sx={{
          p: 3.5,
          borderRadius: "28px",
          bgcolor: "#fff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 15px 40px rgba(15,23,42,0.05)",
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 3 }}>
          افزودن کامنت
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            multiline
            minRows={9}
            placeholder="نظر خود را بنویسید..."
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                alignItems: "flex-start",
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              height: 56,
              borderRadius: "18px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",
              bgcolor: "#2563eb",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "none",
              },
            }}
          >
            ثبت کامنت
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
