import "dotenv/config";
import { prisma } from "./src/database/prisma.js";

async function main() {
  const deleted = await prisma.card.delete({
    where: {
      id: "cmuad8ge00000e0uripb7akm6",
    },
  });

  console.log({
    deletedCardId: deleted.id,
  });

  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
