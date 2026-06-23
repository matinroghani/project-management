import z from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, "نام الزامی است")
      .min(3, "نام باید حداقل 3 کاراکتر باشد"),

    password: z
      .string()
      .min(1, "رمز عبور الزامی است")
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),

    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
