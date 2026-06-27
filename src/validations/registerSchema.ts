import z from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, "نام و نام خانوداگی الزامی است")
      .min(3, "نام و خانودگی باید حداقل 3 کاراکتر باشد"),

    email: z
      .string()
      .trim()
      .min(1, "ایمیل الزامی است")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "فرمت ایمیل معتبر نیست"),

    role: z
      .string()
      .trim()
      .min(1, "نقش الزامی است")
      .min(3, "ایمیل باید حداقل 3 کاراکتر باشد"),

    phoneNumber: z
      .string()
      .trim()
      .min(1, "شماره تماس الزامی است")
      .min(3, "شماره باید حداقل 3 کاراکتر باشد"),

    username: z
      .string()
      .trim()
      .min(1, "نام کاربری الزامی است")
      .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد"),

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
