import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { register as registerUser } from "../../services/authService";

import {
  type RegisterFormData,
  registerSchema,
} from "../../validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onsubmit = (data: RegisterFormData) => {
    try {
      registerUser(data.username, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5f7fb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          direction: "rtl",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 560,
            borderRadius: 4,
            p: 5,
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                bgcolor: "#2563eb",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
              }}
            >
              <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 24 }}>
                PM
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
              ایجاد حساب کاربری
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              برای شروع مدیریت پروژه‌ها حساب خود را ایجاد کنید
            </Typography>
          </Box>

          {/* Form */}
          <Stack
            component="form"
            spacing={2.5}
            onSubmit={handleSubmit(onsubmit)}
          >
            <TextField
              label="نام"
              placeholder="نام خود را وارد کنید"
              fullWidth
              variant="outlined"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            <TextField
              label="رمز عبور"
              type="password"
              placeholder="رمز عبور"
              fullWidth
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <TextField
              label="تکرار رمز عبور"
              type="password"
              placeholder="تکرار رمز عبور"
              fullWidth
              variant="outlined"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                height: 58,
                borderRadius: 2,
                fontWeight: 700,
                backgroundColor: "#2563eb",
                ":hover": {
                  backgroundColor: "#1d4ed8",
                },
              }}
            >
              ایجاد حساب
            </Button>
          </Stack>

          {/* Footer */}
          <Box
            sx={{
              mt: 3.5,
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography variant="body2" color="text.secoundry">
              قبلاً ثبت نام کرده‌اید؟
            </Typography>
            <Link
              to="/login"
              style={{
                color: "#2563eb",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              ورود
            </Link>
          </Box>
        </Card>
      </Box>
    </>
  );
}
