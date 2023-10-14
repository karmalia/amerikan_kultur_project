import { z } from "zod";

export const LoginInputSchema = z.object({
  email: z.string().email({
    message: "Lüften geçerli bir mail adresi giriniz.",
  }),
  password: z.string().min(8, {
    message: "Şifreniz en az 8 karakterden oluşmalıdır.",
  }),
});

export type LoginFormValues = z.infer<typeof LoginInputSchema>;
