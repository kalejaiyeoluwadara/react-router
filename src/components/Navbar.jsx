import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React Router Tutorial
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/users" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Users
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

