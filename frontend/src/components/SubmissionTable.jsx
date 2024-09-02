// import React from "react";
// import { Card, CardContent } from "@mui/material";
// import { Check as CheckIcon, AccessTime as ClockIcon, Cancel as CircleX } from "@mui/icons-material";
// import "./SubmissionTable.css"; // Import the CSS file

// function getColor(status) {
//   switch (status) {
//     case "AC":
//       return "text-green";
//     case "FAIL":
//     case "TLE":
//     case "COMPILATION_ERROR":
//     case "REJECTED":
//       return "text-red";
//     case "PENDING":
//       return "text-yellow";
//     default:
//       return "text-gray";
//   }
// }

// function getIcon(status) {
//   switch (status) {
//     case "AC":
//       return <CheckIcon className="icon" />;
//     case "FAIL":
//     case "REJECTED":
//     case "COMPILATION_ERROR":
//       return <CircleX className="icon" />;
//     case "TLE":
//     case "PENDING":
//       return <ClockIcon className="icon" />;
//     default:
//       return <ClockIcon className="icon" />;
//   }
// }

// export function SubmissionTable({ submissions }) {
//   return (
//     <div className="overflow-x-auto">
//       <Card>
//         <CardContent>
//           <table className="submission-table">
//             <thead>
//               <tr>
//                 <th>Submission ID</th>
//                 <th>Result</th>
//                 <th>Tests Passed</th>
//                 <th>Time</th>
//                 <th>Memory</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submissions.map((submission) => (
//                 <tr key={submission.id}>
//                   <td>{submission.id.substr(0, 8)}</td>
//                   <td className={getColor(submission.status)}>
//                     {getIcon(submission.status)}
//                   </td>
//                   <td>
//                     {
//                       submission.testcases.filter(
//                         (testcase) => testcase.status === "AC",
//                       ).length
//                     }
//                     /{submission.testcases.length}
//                   </td>
//                   <td>{submission.time}</td>
//                   <td>{submission.memory}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

