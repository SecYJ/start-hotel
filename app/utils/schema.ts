import { z } from "zod";

export const registerSchema = z.object({
    username: z.string(),
    email: z.string().email({ message: "Invalid email format" }),
    phoneNumber: z.string(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    agreeTerm: z.boolean().default(false),
});

export const userSchema = registerSchema.omit({
    confirmPassword: true,
    agreeTerm: true,
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
