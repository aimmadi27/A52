import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-logo">A52</div>
      <ul className="navbar-links">
        <li><button onClick={() => navigate('/dashboard')} className="nav-button">Dashboard</button></li>
        <li><button onClick={() => navigate('/summary')} className="nav-button">Summary</button></li>
        <li><button onClick={() => navigate('/reports')} className="nav-button">Reports</button></li>
        <li><button onClick={onLogout} className="nav-button logout-button" aria-label="Logout">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;