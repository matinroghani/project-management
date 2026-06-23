import { login } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "../../validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const handleFormSubmit = (data: LoginFormData) => {
    try {
      login(data.username, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", md: "32px" },
        direction: "rtl",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "480px",
          background: "var(--color-bg-card, #ffffff)",
          borderRadius: "28px",
          padding: { xs: "24px", sm: "28px", md: "40px" },
          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
          border: "1px solid #e5e7eb",
          "@media (max-width: 480px)": {
            borderRadius: "24px",
          },
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
          <Box
            sx={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              PM
            </Typography>
          </Box>

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              fontWeight: "700",
              color: "var(--color-text-primary, #1e293b)",
              marginBottom: "12px",
            }}
          >
            خوش آمدید
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: "15px",
              color: "#6b7280",
              lineHeight: "1.8",
            }}
          >
            برای مدیریت پروژه‌ها وارد حساب کاربری خود شوید
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <TextField
            label="نام کاربری"
            placeholder="نام کاربری خود را وارد کنید"
            fullWidth
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "56px",
                borderRadius: "16px",
                background: "var(--color-bg-card, #ffffff)",
                "& fieldset": { borderColor: "#dbe2ea" },
              },
              "& .MuiInputBase-input": {
                fontSize: "15px",
                padding: "0 18px",
                "&::placeholder": { color: "#9ca3af", opacity: 1 },
              },
            }}
          />

          <TextField
            type="password"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            fullWidth
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "56px",
                borderRadius: "16px",
                background: "var(--color-bg-card, #ffffff)",
                "& fieldset": { borderColor: "#dbe2ea" },
              },
              "& .MuiInputBase-input": {
                fontSize: "15px",
                padding: "0 18px",
                "&::placeholder": { color: "#9ca3af", opacity: 1 },
              },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            disableElevation
            sx={{
              marginTop: "10px",
              height: "58px",
              borderRadius: "16px",
              background: "#2563eb",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "700",
              textTransform: "none",
              "&:hover": {
                background: "#1d4ed8",
              },
            }}
          >
            ورود به حساب
          </Button>
        </Box>

        <Box
          sx={{
            marginTop: "28px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography sx={{ color: "#6b7280", fontSize: "14px" }}>
            حساب کاربری ندارید؟
          </Typography>

          <Link
            to="/register"
            style={{
              color: "#2563eb",
              fontSize: "14px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            ثبت نام
          </Link>
        </Box>
      </Card>
    </Box>
  );
}
