"use server";

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signInSchema, registerUserSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { formatError } from "../utils";
import { RegisterUser } from "@/types";

type ActionState = {
  success: boolean;
  message: string;
};

export const signInWithCredentials = async (
  prevState: ActionState,
  formData: FormData
) => {
  try {
    const user = signInSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return { success: false, message: "Invalid email or password" };
  }
};

export const signOutUser = async () => {
  await signOut({ redirectTo: "/" });
};

export const registerUser = async (data: RegisterUser) => {
  try {
    const user = registerUserSchema.parse(data);

    const plainPassword = user.password;
    user.password = hashSync(plainPassword, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return {
      success: true,
      message: encodeURIComponent(`User ${user.name} registered successfully`),
    };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return { success: false, message: formatError(error) };
  }
};
