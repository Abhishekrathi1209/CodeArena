const express = require('express');
const router = express.Router();
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createSubmission = async (req, res) => {

    const { problemId, userId, sourceCode, languageId } = req.body;
    console.log("problemId: ", problemId)
    console.log("userId: ", userId)
    console.log("sourceCode: ", sourceCode)
    console.log("language: ", languageId)


    const testCases = await prisma.testCase.findMany({
        where: { problemId },
    });
    console.log("test case: ", testCases)

    let submissionStatus = 'AC'; // AC = Accepted
    let failedTestCase = null;
    let result = 'Accepted';


    for (const testCase of testCases) {
        const options = {
            method: 'POST',
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            params: {
                base64_encoded: 'true',
                wait: 'true',
                fields: '*',
            },
            headers: {
                'x-rapidapi-key': 'ec77846853msh562aef909f15241p15d7adjsn1dbbe11b91d6',
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            data: {
                language_id: languageId,
                source_code: Buffer.from(sourceCode).toString('base64'),
                stdin: Buffer.from(testCase.input).toString('base64'),
                expected_output: Buffer.from(testCase.expectedOutput).toString('base64'),
            },
        };

        try {
            const response = await axios.request(options);
            // console.log('Judge0 API response:', response.data);

            // //another way of doing it
            // const { status_id, stdout, stderr } = response.data;
            // const output = Buffer.from(stdout, 'base64').toString();
            // const expectedOutput = Buffer.from(testCase.expectedOutput, 'base64').toString();

            // if (status_id != 3 || output.trim() !== expectedOutput.trim()) {
            //     submissionStatus = 'REJECTED';
            //     failedTestCase = testCase;
            //     result = stderr || 'Output does not match expected result';
            //     break;
            // }

            const { status_id } = response.data;
            if (status_id != 3) {
                submissionStatus = 'REJECTED';
                failedTestCase = testCase;
                result = response.data.status.description;
                break;
            }

        } catch (error) {
            // result = "Incorrect Input"
            console.error('Error during submission:', error);
            submissionStatus = 'REJECTED';
            break;
        }
    }

    // await prisma.submission.create({
    //     data: {
    //         problemId,
    //         userId,
    //         code: sourceCode,
    //         status: submissionStatus,
    //     },
    // });


    res.json({
        status: result,
        failedTestCase: result === 'REJECTED' ? failedTestCase : null,
    });
};


router.post('/', createSubmission);

module.exports = router;
