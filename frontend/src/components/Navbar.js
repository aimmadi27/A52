import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => (
  <nav aria-label="Main navigation">
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/summary">Summary</Link></li>
      <li><Link to="/reports">Reports</Link></li>
      <li><button onClick={onLogout} aria-label="Logout">Logout</button></li>
    </ul>
  </nav>
);

export default Navbar;