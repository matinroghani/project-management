import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
      fullName: "",
      email: "",
      role: "",
      phoneNumber: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onsubmit = (data: RegisterFormData) => {
    try {
      registerUser(
        data.username,
        data.password,
        data.fullName,
        data.email,
        data.role,
        data.phoneNumber,
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 900,
        borderRadius: 5,
        p: 5,
        boxShadow: "0 20px 60px rgba(15,23,42,.08)",
        border: "1px solid #e5e7eb",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
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
            mb: 2,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            PM
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          ایجاد حساب کاربری
        </Typography>

        <Typography color="text.secondary">
          برای شروع مدیریت پروژه‌ها حساب خود را ایجاد کنید
        </Typography>
      </Box>

      <Stack component="form" spacing={4} onSubmit={handleSubmit(onsubmit)}>
        {/* Avatar */}
        <Stack  sx={{alignItems:"center"}} spacing={2}>
          <Avatar
            sx={{
              width: 120,
              height: 120,
            }}
          />

          <Button
            component="label"
            variant="outlined"
            sx={{
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            انتخاب تصویر
            <input hidden type="file" accept="image/*" />
          </Button>
        </Stack>

        {/* Form */}
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی"
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="نام کاربری"
              placeholder="نام کاربری"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="ایمیل"
              placeholder="example@gmail.com"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="نقش"
              placeholder="Frontend Developer"
              {...register("role")}
              error={!!errors.role}
              helperText={errors.role?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="شماره تماس"
              placeholder="0912xxxxxxx"
              {...register("phoneNumber")}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="رمز عبور"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="تکرار رمز عبور"
              type="password"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            height: 58,
            borderRadius: 3,
            fontWeight: 700,
            textTransform: "none",
            backgroundColor: "#2563eb",
            "&:hover": {
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
          mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography color="text.secondary">قبلاً ثبت نام کرده‌اید؟</Typography>

        <Link
          to="/login"
          style={{
            color: "#2563eb",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ورود
        </Link>
      </Box>
    </Card>
  );
}
