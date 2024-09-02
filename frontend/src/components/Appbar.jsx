import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../AuthContext';
import '../styles/Appbar.css';

export default function Appbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="appbar">
      <Link to="/" className="appbar-link">
        <span className="appbar-title">CodeKar</span>
      </Link>
      <nav className="appbar-nav">
        <Link to="/contests" className="appbar-nav-link">Contests</Link>
        <Link to="/problems" className="appbar-nav-link">Problems</Link>
        <Link to="#" className="appbar-nav-link">Standings</Link>
      </nav>
      <nav className="appbar-nav">
        {isLoggedIn ? (
          <span onClick={handleLogout} className="appbar-nav-link">Logout</span>
        ) : (<Link to="/login" className="appbar-nav-link">Login</Link>)}
      </nav>
    </header>
  );
}
