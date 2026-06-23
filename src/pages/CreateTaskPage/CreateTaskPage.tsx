import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  createTaskSchema,
  type createTaskFormData,
} from "../../validations/createTaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Card,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { createTask } from "../../services/taskService";
import { toast } from "react-toastify";
import { DatePicker } from "@mui/x-date-pickers";

export default function CreateTaskPage() {
  const navigate = useNavigate();
  const onSubmit = async (data: createTaskFormData) => {
    // const formattedDueDate = data.dueDate
    //   ? data.dueDate.format("YYYY-MM-DD")
    //   : null;
    try {
      createTask({
        title: data.title,
        description: data.description,
        status: data.status,
        dueDate: data.dueDate.toISOString(),
        priority: data.priority,
        projectId: "temp",
      });
      toast.success("تسک اضافه شد!");
      navigate("/kanban");
    } catch (error) {
      toast.error("خطایی در ثبت تسک رخ داد");
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<createTaskFormData>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
      dueDate: null,
    },
  });

  return (
    <>
      <Box
        sx={{
          bgcolor: "#f6f7fb",
          p: 3,
          direction: "rtl",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            ایجاد تسک جدید
          </Typography>

          <Typography sx={{ color: "#6b7280", mt: 0.5 }}>
            اطلاعات تسک را وارد کنید
          </Typography>
        </Box>

        {/* Form */}
        <Card
          sx={{
            maxWidth: "unset",
            mx: "auto",
            p: 4,
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #eef0f4",
            background: "#fff",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            {/* Title */}
            <TextField
              label="عنوان تسک"
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  background: "#fafafa",
                  transition: "0.2s",
                  "&:hover": {
                    background: "#fff",
                  },
                  "&.Mui-focused": {
                    background: "#fff",
                    boxShadow: "0 0 0 3px rgba(37,99,235,0.12)",
                  },
                },
              }}
            />

            {/* Description */}
            <TextField
              label="توضیحات"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              multiline
              rows={4}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  background: "#fafafa",
                  "&:hover": { background: "#fff" },
                  "&.Mui-focused": {
                    background: "#fff",
                    boxShadow: "0 0 0 3px rgba(37,99,235,0.12)",
                  },
                },
              }}
            />

            {/* Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              <TextField
                select
                label="وضعیت"
                {...register("status")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    background: "#fafafa",
                  },
                }}
              >
                <MenuItem value="todo">انجام نشده</MenuItem>
                <MenuItem value="inProgress">در حال انجام</MenuItem>
                <MenuItem value="review">در حال بررسی</MenuItem>
                <MenuItem value="done">تکمیل شده</MenuItem>
              </TextField>

              <TextField
                select
                label="اولویت"
                {...register("priority")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    background: "#fafafa",
                  },
                }}
              >
                <MenuItem value="low">کم</MenuItem>
                <MenuItem value="medium">متوسط</MenuItem>
                <MenuItem value="high">زیاد</MenuItem>
              </TextField>
            </Box>

            {/* Date */}
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="تاریخ تحویل"
                  value={field.value}
                  onChange={field.onChange}
                  format="YYYY/MM/DD"
                  slotProps={{
                    textField: {
                      error: !!errors.dueDate,
                      helperText: errors.dueDate?.message,
                      sx: {
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "14px",
                          background: "#fafafa",
                        },
                      },
                    },
                  }}
                />
              )}
            />

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "14px",
                  height: 52,
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                  boxShadow: "0 10px 20px rgba(37,99,235,0.25)",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(135deg,#1d4ed8,#1e40af)",
                  },
                }}
              >
                ایجاد تسک
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "14px",
                  borderColor: "#e5e7eb",
                  color: "#374151",
                  height: 52,
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    background: "#f3f4f6",
                    borderColor: "#d1d5db",
                  },
                }}
                onClick={() => navigate(-1)}
              >
                انصراف
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
