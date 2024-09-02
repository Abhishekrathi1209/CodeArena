const express = require('express');
const router = express.Router();
const { getProblem, getProblems } = require('../database/getproblem');

// Controller to handle the request to get a specific problem
const getProblemById = async (req, res) => {
    try {
        const { problemId } = req.params;
        const problem = await getProblem(problemId);

        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }

        res.json(problem);
    }
    catch (error) {
        console.error('Error fetching problem:', error);
        res.status(500).json({ error: 'hii Internal server error' });
    }
};

// Controller to handle the request to get all problems
const getAllProblems = async (req, res) => {
    try {
        const problems = await getProblems();
        res.json(problems);
    }
    catch (error) {
        console.error('Error fetching problem:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Define the routes and attach the controllers
router.get('/:problemId', getProblemById);
router.get('/', getAllProblems);

module.exports = router;
