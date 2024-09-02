import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeBanner.css';
import logo from "../assets/logo.jpeg"

export default function HomeBanner() {
  return (
    <section className="home-banner">
      <div className="home-banner-container">
        <div className="home-banner-content">
          <div className="home-banner-text">
            <h1 className="home-banner-title">Welcome to CodeArena</h1>
            <p className="home-banner-description">
              CodeArena is your go-to platform for honing your programming skills. Dive into a wide range of coding problems, sharpen your problem-solving abilities.
            </p>
            <div className="home-banner-buttons">
              <Link to="/contests" className="home-banner-button home-banner-button-primary">
                View Contests
              </Link>
              <Link to="/problems" className="home-banner-button home-banner-button-secondary">
                Solve Problems
              </Link>
            </div>
          </div>
          <div className="home-banner-image-container">
            <img
              src={logo}
              alt="Code100x"
              className="home-banner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
