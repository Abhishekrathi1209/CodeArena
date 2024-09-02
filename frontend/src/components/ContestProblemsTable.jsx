// import React from 'react';
// import Link from 'next/link';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import CheckIcon from '@mui/icons-material/Check';
// import '../styles/ContestProblemsTable.css';

// // Removed type annotations
// export const ContestProblemsTable = ({ contest }) => {
//   return (
//     <div className="contest-problems-container">
//       <main className="contest-main">
//         <div className="container">
//           <section>
//             <div className="header">
//               <h2 className="contest-title">{contest.title}</h2>
//             </div>
//             <TableContainer component={Paper} className="problems-table-container">
//               <Table aria-label="contest problems table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Problem</TableCell>
//                     <TableCell>Difficulty</TableCell>
//                     <TableCell>Solved</TableCell>
//                     <TableCell>Your status</TableCell>
//                     <TableCell>Solve</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {contest.problems.map(({ problem }) => (
//                     <ProblemRow
//                       points={
//                         contest.contestSubmissions.find(
//                           (submission) => submission.problemId === problem.id,
//                         )?.points || 0
//                       }
//                       contestId={contest.id}
//                       key={problem.id}
//                       id={problem.id}
//                       title={problem.title}
//                       difficulty={problem.difficulty}
//                       submissionCount={problem.solved}
//                     />
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// // Removed type annotations
// function ProblemRow({
//   id,
//   title,
//   difficulty,
//   submissionCount,
//   contestId,
//   points,
// }) {
//   return (
//     <TableRow>
//       <TableCell>
//         <div className="problem-title">{title}</div>
//       </TableCell>
//       <TableCell>
//         <div className="problem-difficulty">{difficulty}</div>
//       </TableCell>
//       <TableCell>
//         <div className="problem-submissions">{submissionCount}</div>
//       </TableCell>
//       <TableCell>
//         <div className="problem-status">
//           {points ? <CheckIcon className="status-icon" color="success" /> : null}
//         </div>
//       </TableCell>
//       <TableCell>
//         <Link href={`/contest/${contestId}/problem/${id}`}>
//           <Button variant="contained" color="primary" className="solve-button">
//             Solve
//           </Button>
//         </Link>
//       </TableCell>
//     </TableRow>
//   );
// }
