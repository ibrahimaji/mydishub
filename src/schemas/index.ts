import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email harus diisi!",
  }),
  password: z.string().min(1, {
    message: "Password harus diisi",
  }),
});
