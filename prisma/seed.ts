import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.post.create({
    data: {
      title: "Nuxt 3 is awesome",
      content: "Just tried Nuxt 3 with Vue and it feels so smooth! Highly recommend.",
    },
  });

  console.log("Database has been seeded");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
