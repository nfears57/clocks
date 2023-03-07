import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" activeclassname="active">Home</Link>
        </li>
        <li>
          <Link to="/stopwatch" activeclassname="active">Stopwatch</Link>
        </li>
        <li>
          <Link to="/timer" activeclassname="active">Timer</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

