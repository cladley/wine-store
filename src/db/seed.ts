import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.test.deleteMany();
  await prisma.wine.deleteMany();
  await prisma.user.deleteMany();

  await prisma.wine.createMany({
    data: sampleData.wines,
  });

  await prisma.user.createMany({
    data: sampleData.users,
  });

  console.log("Database seeding finished");
}

main();
