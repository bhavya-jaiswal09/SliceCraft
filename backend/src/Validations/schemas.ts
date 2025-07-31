import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(2),
    address: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z
      .string()
      .regex(
        /^[6-9]\d{9}$/,
        "Invalid phone number"
      ),
  })
  .strict();

export const userLoginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  .strict();

export const userUpdateSchema = z
  .object({
    name: z.string().min(2),
    address: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6).optional(),
    phone: z
      .string()
      .regex(
        /^[6-9]\d{9}$/,
        "Invalid phone number"
      ),
    img: z.string(),
  })
  .strict();

const pizzasOrderAndCartSchema = z
  .object({
    pizzaId: z.string(),
    size: z.enum(["small", "medium", "large"]),
    border: z.boolean(),
    quantity: z.number(),
  })
  .strict();

export const saleInfoSchema = pizzasOrderAndCartSchema.omit({ pizzaId: true }).strict();

export const orderSchema = z
  .object({
    cartId: z.string(),
    pizzas: z.array(pizzasOrderAndCartSchema),
  })
  .strict();

export const cartSchema = z
  .object({
    pizzas: z.array(pizzasOrderAndCartSchema),
  })
  .strict();

export const cartItemSchema = z
  .object({
    cartId: z.string(),
    item: pizzasOrderAndCartSchema,
  })
  .strict();

export const pizzaSchema = z
  .object({
    flavor: z.string(),
    type: z.enum(["Sweet", "Savory"]),
    price: z.number(),
    ingredients: z.array(z.string()),
    img: z.string(),
  })
  .strict();

export const pizzaUpdateSchema = z
  .object({
    id: z.string(),
    flavor: z.string(),
    type: z.enum(["Sweet", "Savory"]),
    price: z.number(),
    ingredients: z.array(z.string()),
    img: z.string(),
  })
  .strict();

