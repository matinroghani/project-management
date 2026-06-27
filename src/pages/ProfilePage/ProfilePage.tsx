import { Box, Card, Grid, Stack, Switch, Typography } from "@mui/material";
import { getCurrentUser } from "../../services/authService";
import UserDetail from "../../components/Profile/UserDetail";
import UserAvatar from "../../components/Common/UserAvatar";

export default function ProfilePage() {
  const currentUser = getCurrentUser();

  const profileConfig = [
    { label: "نام کامل", value: currentUser?.fullName },
    { label: "ایمیل ", value: currentUser?.email },
    { label: " نقش", value: currentUser?.role },
    { label: " شماره تماس ", value: currentUser?.phoneNumber },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f6f8fb",
        p: { xs: 2.5, md: 5 },
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {/* Header */}

        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "34px",
              fontWeight: 700,
              color: "#111827",
              mb: 1,
            }}
          >
            پروفایل کاربری
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
            }}
          >
            مدیریت اطلاعات شخصی و تنظیمات حساب
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left Card */}

          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: "28px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 15px 40px rgba(15,23,42,.05)",
                textAlign: "center",
                height: "100%",
              }}
            >
              <UserAvatar
                src={currentUser?.avatar ?? undefined}
                alt={currentUser?.fullName}
                sx={{
                  width: 130,
                  height: 130,
                  mx: "auto",
                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#111827",
                  mb: 1,
                }}
              >
                {currentUser?.fullName}
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                }}
              >
                {currentUser?.role}
              </Typography>
            </Card>
          </Grid>

          {/* Right Section */}

          <Grid size={{ xs: 12, lg: 9 }}>
            <Stack spacing={3}>
              {/* User Info */}

              <Card
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: "28px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 15px 40px rgba(15,23,42,.05)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#111827",
                    mb: 3,
                  }}
                >
                  اطلاعات کاربر
                </Typography>

                <Grid container spacing={2.5}>
                  {profileConfig.map((u) => (
                    <UserDetail key={u.label} data={u} />
                  ))}
                </Grid>
              </Card>

              {/* Settings */}

              <Card
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: "28px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 15px 40px rgba(15,23,42,.05)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#111827",
                    mb: 3,
                  }}
                >
                  تنظیمات حساب
                </Typography>

                <Stack spacing={2.25}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: "18px",
                      bgcolor: "#f8fafc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 15,
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        اعلان‌های ایمیلی
                      </Typography>

                      <Typography
                        sx={{
                          color: "#6b7280",
                          fontSize: 13,
                        }}
                      >
                        دریافت بروزرسانی‌ها از طریق ایمیل
                      </Typography>
                    </Box>

                    <Switch defaultChecked />
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: "18px",
                      bgcolor: "#f8fafc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 15,
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        حالت دو مرحله‌ای
                      </Typography>

                      <Typography
                        sx={{
                          color: "#6b7280",
                          fontSize: 13,
                        }}
                      >
                        افزایش امنیت حساب کاربری
                      </Typography>
                    </Box>

                    <Switch defaultChecked />
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: "18px",
                      bgcolor: "#f8fafc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 15,
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        نمایش وضعیت آنلاین
                      </Typography>

                      <Typography
                        sx={{
                          color: "#6b7280",
                          fontSize: 13,
                        }}
                      >
                        نمایش وضعیت فعالیت به سایر اعضا
                      </Typography>
                    </Box>

                    <Switch defaultChecked />
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
