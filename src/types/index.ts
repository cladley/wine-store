import {
  registerUserSchema,
  cartItemSchema,
  insertIntoCartSchema,
} from "@/lib/validators";
import { z } from "zod";

export type Wine = {
  id: string;
  image: string | null;
  name: string;
  slug: string;
  category: string;
  region: string;
  description: string;
  price: string;
  rating: string;
  isFeatured: boolean;
};

export type RegisterUser = z.infer<typeof registerUserSchema>;

export type Cart = z.infer<typeof insertIntoCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type AddToCartItem = z.infer<typeof cartItemSchema>;
