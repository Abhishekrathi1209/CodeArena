// import React, { useEffect, useState } from 'react';
// import { parseClock } from '../app/lib/time';
// import '../styles/ContestClock.css'; // Import the CSS file

// export const ContestClock = ({ endTime }) => {
//   const [currentTimeLeft, setCurrentTimeLeft] = useState(
//     endTime.getTime() - Date.now(),
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTimeLeft((prevTimeLeft) =>
//         Math.max(0, prevTimeLeft - 1000),
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [endTime]);

//   return (
//     <main className="clock-container">
//       <div className="clock-time">
//         {currentTimeLeft > 0 ? (
//           <div>{parseClock(currentTimeLeft / 1000)}</div>
//         ) : null}
//       </div>
//     </main>
//   );
// };
