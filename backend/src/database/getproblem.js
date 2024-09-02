const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

// Function to get a specific problem by ID
const getProblem = async (problemId, contestId) => {
    if (contestId) {
        const contest = await db.contest.findFirst({
            where: {
                id: contestId,
                hidden: false,
            },
        });

        if (!contest) {
            return null;
        }

        const problem = await db.problem.findFirst({
            where: {
                id: problemId,
                contests: {
                    some: {
                        contestId: contestId,
                    },
                },
            },
            // include: {
            //     defaultCode: true,
            // },
        });
        return problem;
    }

    const problem = await db.problem.findFirst({
        where: {
            id: problemId,
        },
    });
    return problem;
};

// Function to get all problems
const getProblems = async () => {
    const problems = await db.problem.findMany({
        where: {
            hidden: false,
        },
    });
    return problems;
};

module.exports = {
    getProblems,
    getProblem,
};