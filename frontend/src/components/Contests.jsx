import React, { useEffect, useState } from 'react';
// import { ContestCard } from './ContestCard';
import '../styles/Contests.css';

// async function fetchContests() {
//   const [upcomingResponse, pastResponse] = await Promise.all([
//     fetch('/api/contests/upcoming'),
//     fetch('/api/contests/past')
//   ]);
//   const [upcomingContests, pastContests] = await Promise.all([
//     upcomingResponse.json(),
//     pastResponse.json()
//   ]);
//   return { upcomingContests, pastContests };
// }

export default function Contests() {
  //   const [upcomingContests, setUpcomingContests] = useState([]);
  //   const [pastContests, setPastContests] = useState([]);
  //   useEffect(() => {
  //     fetchContests().then(data => {
  //       setUpcomingContests(data.upcomingContests);
  //       setPastContests(data.pastContests);
  //     });
  //   }, []);

  return (
    <div className="contests-container">
      <section className="contests-section">
        <div className="contests-content">
          <div className="contests-header">
            <h2 className="contests-title">Upcoming Contests</h2>
            <p className="contests-description">
              There is no Upcoming Contests as of now.
            </p>
          </div>
          <div className="contests-grid">
            {/* {upcomingContests.map(contest => (
              <ContestCard
                key={contest.id}
                title={contest.title}
                id={contest.id}
                startTime={contest.startTime}
                endTime={contest.endTime}
              />
            ))} */}
          </div>
        </div>
      </section>
      <section className="contests-section">
        <div className="contests-content">
          <div className="contests-header">
            <h2 className="contests-title">Previous Contests</h2>
            <p className="contests-description">
              There is no Previous Contests as of now.
            </p>
          </div>
          <div className="contests-grid">
            {/* {pastContests.map(contest => (
              <ContestCard
                key={contest.id}
                title={contest.title}
                id={contest.id}
                startTime={contest.startTime}
                endTime={contest.endTime}
              />
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
}
