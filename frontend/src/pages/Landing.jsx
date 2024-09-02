import React from 'react';
import Contests from '../components/Contests';
import HomeBanner from '../components/HomeBanner';
// import { Problems } from '../components/Problems';
import '../styles/Landing.css';

export default function Landing() {
  return (
    <div className="landing-container">
      <main className="landing-main">
        <HomeBanner />
        <Contests />
        {/* <section className="problems-section">
          <div className="problems-container">
            <Problems />
          </div>
        </section> */}
      </main>
    </div>
  );
}
