const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();
const { getSession } = require('express-session'); // You'll need to use a session library for user authentication

// Get contest by ID with user-specific contest submissions
const getContest = async (contestId) => {
    //   const session = getSession(req); // Replace this with actual session retrieval logic

    try {
        const contest = await db.contest.findFirst({
            where: {
                id: contestId,
                hidden: false,
            },
            include: {
                problems: {
                    include: {
                        problem: true,
                    },
                },
                contestSubmissions: {
                    where: {
                        userId: session?.user?.id,
                    },
                },
            },
        });

        if (!contest) {
            return null;
        }

        return contest;
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contest' });
    }
};


// Get upcoming contests
const getUpcomingContests = async () => {
    try {
        const contests = await db.contest.findMany({
            where: {
                hidden: false,
                endTime: {
                    gt: new Date(),
                },
            },
            orderBy: {
                startTime: 'asc',
            },
        });
        return contests;
    } catch (error) {
        return ("Dikkat ho gya");
    }
};

// Get existing contests
const getExistingContests = async () => {
    try {
        const contests = await db.contest.findMany({
            where: {
                hidden: false,
                endTime: {
                    lt: new Date(),
                },
            },
            orderBy: {
                startTime: 'asc',
            },
        });
        return contests;
    } catch (error) {
        return ("Dikkat ho gya");
    }
};

module.exports = {
    getContest,
    getUpcomingContests,
    getExistingContests,
};
