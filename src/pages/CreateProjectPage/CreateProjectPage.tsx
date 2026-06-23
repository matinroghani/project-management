import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  createProjectSchema,
  type CreateProjectFormData,
} from "../../validations/createProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProject } from "../../services/projectService";
import { toast } from "react-toastify";
import {
  projectPriority,
  projectStatus,
} from "../../components/CreateProject/projectConfigs";

export default function CreateProjectPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectFormData>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "planning",
      priority: "medium",
    },
  });

  const onSubmit = (data: CreateProjectFormData) => {
    try {
      createProject(data);
      toast.success("پروژه ایجاد شد");
      navigate("/projects");
    } catch (error) {
      toast.error("خطا در ایجاد پروژه");
      console.log(error);
    }
  };

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
          maxWidth: 900,
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
            ایجاد پروژه جدید
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
              fontSize: "15px",
            }}
          >
            اطلاعات پروژه جدید را وارد کنید
          </Typography>
        </Box>

        {/* Form Card */}

        <Card
          sx={{
            p: 4,
            borderRadius: "28px",
            bgcolor: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 15px 40px rgba(15,23,42,0.05)",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Project Name */}

            <TextField
              label="نام پروژه"
              placeholder="نام پروژه را وارد کنید"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "18px",
                  background: "#fafafa",
                  height: 58,
                },
              }}
            />

            {/* Description */}

            <TextField
              label="توضیحات پروژه"
              placeholder="توضیحات پروژه را وارد کنید"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              multiline
              rows={6}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "18px",
                  background: "#fafafa",
                },
              }}
            />

            {/* Grid */}

            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
              }}
            >
              <TextField
                select
                label="وضعیت"
                {...register("status")}
                error={!!errors.status}
                helperText={errors.status?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    background: "#fafafa",
                  },
                }}
              >
                {projectStatus.map((item) => (
                  <MenuItem value={item.value}> {item.label} </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="اولویت"
                {...register("priority")}
                error={!!errors.priority}
                helperText={errors.priority?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    background: "#fafafa",
                  },
                }}
              >
                {projectPriority.map((item) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Buttons */}

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 1,
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  height: 56,
                  borderRadius: "18px",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "none",
                }}
              >
                ایجاد پروژه
              </Button>

              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate(-1)}
                sx={{
                  height: 56,
                  borderRadius: "18px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                انصراف
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
