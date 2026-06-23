import type { Dayjs } from "dayjs";
import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "عنوان الزامی است"),
  description: z.string().min(1, "توضیحات الزامی است"),
  status: z.enum(["todo", "inProgress", "review", "done"]),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.custom<Dayjs | null > (
    (value) => value !== null, 
     "تاریخ الزامی است"
  )
});

export type createTaskFormData = z.infer<typeof createTaskSchema>;
