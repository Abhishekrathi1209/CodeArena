// const express = require('express');
// const router = express.Router();
// const {
//     getContest,
//     getUpcomingContests,
//     getExistingContests,
// } = require('../database/getcontest');
// const { getProblem } = require('../database/getproblem');

// // Handler to get a contest by its ID
// const getContestByID = async (req, res) => {
//     const { contestId } = req.params;
//     try {
//         const contest = await getContest(contestId);

//         if (!contest) {
//             return res.status(404).json({ error: 'Contest not found' });
//         }

//         res.json(contest);
//     } catch (error) {
//         console.error('Error fetching contest:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Handler to get a problem by its ID within a contest
// const getContestProblemById = async (req, res) => {
//     const { contestId, problemId } = req.params;
//     try {
//         const problem = await getProblem(problemId, contestId);

//         if (!problem) {
//             return res.status(404).json({ error: 'Problem not found' });
//         }

//         res.json(problem);
//     } catch (error) {
//         console.error('Error fetching problem:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Handler to get upcoming contests
// const getUpcoming = async (req, res) => {
//     try {
//         const upcomingContests = await getUpcomingContests();

//         if (!upcomingContests || upcomingContests.length === 0) {
//             return res.status(404).json({ error: 'No upcoming contests found' });
//         }

//         res.json(upcomingContests);
//     } catch (error) {
//         console.error('Error fetching upcoming contests:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Handler to get existing (past) contests
// const getExisting = async (req, res) => {
//     try {
//         const existingContests = await getExistingContests();

//         if (!existingContests || existingContests.length === 0) {
//             return res.status(404).json({ error: 'No past contests found' });
//         }

//         res.json(existingContests);
//     } catch (error) {
//         console.error('Error fetching existing contests:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Define routes with consistent parameter naming
// router.get('/upcoming', getUpcoming);
// router.get('/past', getExisting);
// router.get('/:contestId', getContestByID);
// router.get('/:contestId/problems/:problemId', getContestProblemById);

// // Export the router to be used in other parts of the application
// module.exports = router;
