import z from "zod";

export const createProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "نام پروژه الزامی است")
    .min(3, "نام پروژه باید حداقل ۳ کاراکتر باشد"),

  description: z.string().trim().min(1, "توضیحات پروژه الزامی است"),

  status: z.enum(["planning", "active", "paused", "completed"]),

  priority: z.enum(["low", "medium", "high"]),
});

export type CreateProjectFormData = z.infer<typeof createProjectSchema>;
