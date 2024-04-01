import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty({ message: "Campo obrigatório" }),
    email: z
      .string()
      .nonempty({ message: "Campo obrigatório" })
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "É necessário pelo menos um caractere especial"
      )
      .min(8, "É necessário no mínimo 8 dígitos"),
    confirmPassword: z.string().nonempty("Confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });
