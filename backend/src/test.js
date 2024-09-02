// const axios = require('axios');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// const jwt = require('jsonwebtoken');s

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.userId = user.userId;
//         next();
//     });
// }

// const createSubmission = async (req, res) => {
//   const { problemId, userId, sourceCode, languageId } = req.body;


//   const testCases = await prisma.testCase.findMany({
//     where: { problemId },
//   });

//   let submissionStatus = 'AC'; // AC = Accepted
//   let failedTestCase = null;
//   let result = 'Accepted';


//   for (const testCase of testCases) {
//     const options = {
//       method: 'POST',
//       url: 'https://judge0-ce.p.rapidapi.com/submissions',
//       params: {
//         base64_encoded: 'true',
//         wait: 'true',
//         fields: '*',
//       },
//       headers: {
//         'x-rapidapi-key': 'ec77846853msh562aef909f15241p15d7adjsn1dbbe11b91d6',
//         'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//         'Content-Type': 'application/json',
//       },
//       data: {
//         language_id: languageId,
//         source_code: Buffer.from(sourceCode).toString('base64'),
//         stdin: Buffer.from(testCase.input).toString('base64'),
//         expected_output: Buffer.from(testCase.expectedOutput).toString('base64'),
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       console.log('Judge0 API response:', response.data);
      
//       //another way of doing it
//       // const { stdout } = response.data;
//       // const output = Buffer.from(stdout, 'base64').toString();
//       // console.log('Decoded output:', output);
//       // const expectedOutput = testCase.expectedOutput.trim();
//       // console.log('Expected output:', expectedOutput);

//       // // Compare stdout with expected output
//       // if (output.trim() !== expectedOutput) {
//       //   submissionStatus = 'REJECTED';
//       //   failedTestCase = testCase;
//       //   break;
//       // }

//       const { status_id } = response.data;
//       if (status_id != 3) {
//         submissionStatus = 'REJECTED';
//         failedTestCase = testCase;
//         result = response.data.status.description;
//         break;
//       }

//     } catch (error) {
//       console.error('Error during submission:', error);
//       submissionStatus = 'REJECTED';
//       break;
//     }
//   }

//   const submission = await prisma.submission.create({
//     data: {
//       problemId,
//       userId,
//       code: sourceCode,
//       status: submissionStatus,
//     },
//   });

//   res.json({
//     status: result,
//     failedTestCase: result === 'REJECTED' ? failedTestCase : null,
//   });
// };

// const express = require('express');
// const app = express();
// const cors = require('cors')

// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Allow requests from this origin
// }));

// app.post('/api/submit',authenticateToken, createSubmission);

// const PORT = process.env.PORT || 6000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
