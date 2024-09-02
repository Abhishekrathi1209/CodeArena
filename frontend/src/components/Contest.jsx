// import React, { useEffect, useState } from 'react';
// import { getContest } from '../app/db/contest';
// import { ContestClock } from './ContestClock';
// import { ContestProblemsTable } from './ContestProblemsTable';
// import '../styles/Contest.css'; // Import the CSS file

// export function Contest({ id }) {
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     async function fetchContest() {
//       const contestData = await getContest(id);
//       setContest(contestData);
//     }

//     fetchContest();
//   }, [id]);

//   if (!contest) {
//     return <div>Contest not found</div>;
//   }

//   return (
//     <div className="contest-container">
//       <div className="problems-section">
//         <ContestProblemsTable contest={contest} />
//       </div>
//       <div className="sidebar">
//         <div className="clock-section">
//           <ContestClock endTime={contest.endTime} />
//         </div>
//         <div className="points-section">
//           <ContestPoints
//             points={contest.contestSubmissions.reduce(
//               (acc, curr) => acc + curr.points,
//               0,
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
