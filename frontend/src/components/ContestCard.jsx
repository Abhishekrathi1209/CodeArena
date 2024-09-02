// import React from 'react';
// import { Button, Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
// import { parseFutureDate, parseOldDate } from '../lib/time';
// import '../styles/ContestCard.css';

// export function ContestCard({ title, id, startTime, endTime }) {
//   const duration = `${(new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60 * 60)} hours`;
//   const isActive = startTime.getTime() < Date.now() && endTime.getTime() > Date.now();

//   return (
//     <Card className="contest-card">
//       <CardHeader
//         title={title}
//         action={
//           <div>
//             {startTime.getTime() < Date.now() && endTime.getTime() < Date.now() ? (
//               <Typography color="error">Ended</Typography>
//             ) : null}
//             {isActive ? <Typography color="success">Active</Typography> : null}
//             {endTime.getTime() < Date.now() ? (
//               <Typography color="error">Ended</Typography>
//             ) : null}
//           </div>
//         }
//       />
//       <CardContent>
//         <div className="contest-details">
//           <div>
//             <Typography variant="body2" color="textSecondary">
//               {startTime.getTime() < Date.now() ? 'Started' : 'Starts in'}
//             </Typography>
//             <Typography variant="body1">
//               {startTime.getTime() < Date.now()
//                 ? parseOldDate(new Date(startTime))
//                 : parseFutureDate(new Date(startTime))}
//             </Typography>
//           </div>
//           <div>
//             <Typography variant="body2" color="textSecondary">
//               Duration
//             </Typography>
//             <Typography variant="body1">{duration}</Typography>
//           </div>
//         </div>
//       </CardContent>
//       <CardActions>
//         <Button
//           size="small"
//           color="primary"
//           href={`/contest/${id}`}
//         >
//           {isActive ? 'Participate' : 'View Contest'}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
