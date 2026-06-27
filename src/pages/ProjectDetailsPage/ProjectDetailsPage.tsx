import { Avatar, Box, Card, Typography } from "@mui/material";
import ProjectStats from "../../components/Project/ProjectStats";
import { useParams } from "react-router-dom";
import { getProjects, getTasks } from "../../services/dashboardService";
import { getProjectStats } from "../../utils/projectStats";
import { toJalali } from "../../utils/date";
import {
  projectPriorityConfig,
  projectStatusConfig,
} from "../../components/Project/projectConfig";
import ProgressProject from "../../components/Project/ProgressProject";

export default function ProjectDetailsPage() {
  const { id } = useParams();

  const project = getProjects().find((p) => p.id === id);

  if (!project) {
    return <Typography>پروژه پیدا نشد</Typography>;
  }

  const tasks = getTasks();

  const projectStats = getProjectStats(project.id, tasks);

  const projectStatsConfig = [
    { label: "وضعیت", value: projectStatusConfig[project.status] },
    { label: "اولویت", value: projectPriorityConfig[project.priority] },
    { label: "تاریخ ایجاد", value: toJalali(project?.createdAt) || "-" },
    { label: "تعداد تسک‌ها", value: projectStats.taskCount?.toString() || "۰" },
  ];

  const progress= projectStats.progress

  if (!project) {
    return <Typography>تسک پیدا نشد</Typography>;
  }

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
              fontSize: { xs: "28px", md: "34px" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1,
            }}
          >
            سیستم مدیریت پروژه
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
            }}
          >
            اطلاعات کامل پروژه و وضعیت فعلی آن
          </Typography>
        </Box>

        {/* Top Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 3,
            mb: 3,
          }}
        >
          {/* Project Info Card */}
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
              اطلاعات پروژه
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 3,
              }}
            >
              {/* PROJECT STATS */}
              {projectStatsConfig.map((stat) => (
                <ProjectStats key={stat.label} data={stat} />
              ))}
            </Box>
          </Card>

          {/* Progress Card */}
          <ProgressProject progress={progress} />


        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.2fr 1fr" },
            gap: 3,
          }}
        >
          {/* Members Card */}
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
              اعضای پروژه
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  p: "14px",
                  borderRadius: "18px",
                  bgcolor: "#f3f4f6",
                }}
              >
                <Avatar
                  sx={{
                    width: 52,
                    height: 52,
                    bgcolor: "#2563eb",
                    color: "background.paper",
                    fontWeight: 700,
                  }}
                >
                  م
                </Avatar>

                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    محمد رضایی
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    Frontend Developer
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  p: "14px",
                  borderRadius: "18px",
                  bgcolor: "#f3f4f6",
                }}
              >
                <Avatar
                  sx={{
                    width: 52,
                    height: 52,
                    bgcolor: "#2563eb",
                    color: "background.paper",
                    fontWeight: 700,
                  }}
                >
                  ا
                </Avatar>

                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    امیر احمدی
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    UI Designer
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  p: "14px",
                  borderRadius: "18px",
                  bgcolor: "#f3f4f6",
                }}
              >
                <Avatar
                  sx={{
                    width: 52,
                    height: 52,
                    bgcolor: "#2563eb",
                    color: "background.paper",
                    fontWeight: 700,
                  }}
                >
                  س
                </Avatar>

                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    سارا محمدی
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    Project Manager
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Statistics Card */}
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
              آمار پروژه
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#f3f4f6",
                  borderRadius: "18px",
                  p: "20px",
                }}
              >
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "13px",
                  }}
                >
                  تسک‌های فعال
                </Typography>

                <Typography
                  sx={{
                    mt: "10px",
                    color: "text.primary",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  ۱۲
                </Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: "#f3f4f6",
                  borderRadius: "18px",
                  p: "20px",
                }}
              >
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "13px",
                  }}
                >
                  تسک‌های تکمیل شده
                </Typography>

                <Typography
                  sx={{
                    mt: "10px",
                    color: "text.primary",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  ۱۸
                </Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: "#f3f4f6",
                  borderRadius: "18px",
                  p: "20px",
                }}
              >
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "13px",
                  }}
                >
                  اعضا
                </Typography>

                <Typography
                  sx={{
                    mt: "10px",
                    color: "text.primary",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  ۶
                </Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: "#f3f4f6",
                  borderRadius: "18px",
                  p: "20px",
                }}
              >
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "13px",
                  }}
                >
                  فایل‌ها
                </Typography>

                <Typography
                  sx={{
                    mt: "10px",
                    color: "text.primary",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  ۳۴
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
