"use server";

import { prisma } from "@/db/prisma";

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
