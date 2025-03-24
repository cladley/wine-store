import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.test.deleteMany();
  await prisma.wine.deleteMany();

  await prisma.test.create({
    data: {
      name: "Colin",
    },
  });
  await prisma.wine.createMany({
    data: sampleData.wines,
  });

  console.log("Database seeding finished");
}

main();
