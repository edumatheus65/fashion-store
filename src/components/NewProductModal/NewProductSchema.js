import { z } from "zod";

export const NewProductSchema = z.object({
  name: z.string().nonempty("É necessário cadastrar o nome do produto!"),
  price: z.string().nonempty("É necessário cadastrar o preço do produto! "),
  description: z
    .string()
    .nonempty("É necessário cadastrar uma descrição para o produto!"),
  image: z
    .string()
    .nonempty("É necessário cadastrar uma imagem para o produto!"),
});
