const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const problem = await prisma.problem.create({
    data: {
      title: "Two Sum",
      description: "## Two sum\n\nFind the sum of two given intezers\n\n#### Test case 1\n\n**Input**\n\n```\n6,7\n```\n\n**Output**\n\n```\n13\n```\n\n#### Test case 2\n\n**Input**\n\n```\n2,4\n```\n\n**Output**\n\n```\n6\n```",
      difficulty: "MEDIUM",
      testCases: {
        create: [
          {
            input: "6,7",
            expectedOutput: "13",
          },
          {
            input: "2,4",
            expectedOutput: "6",
          },
        ],
      },
    },
  });

  console.log('Created problem:', problem);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
