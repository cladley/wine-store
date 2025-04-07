import { registerUserSchema } from "@/lib/validators";
import { z } from "zod";

export type Wine = {
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
