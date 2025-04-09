"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

export const getAllRedWines = async () => {
  const wines = await prisma.wine.findMany({
    where: {
      category: "red",
    },
  });

  return wines;
};

export const getAllWhiteWines = async () => {
  const wines = await prisma.wine.findMany({
    where: {
      category: "white",
    },
  });

  return wines;
};

export const getWineBySlug = async (slug: string) => {
  const wine = await prisma.wine.findFirst({
    where: {
      slug,
    },
  });

  return convertToPlainObject(wine);
};
