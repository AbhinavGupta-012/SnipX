import React from 'react';
import styles from './styles.module.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="bi bi-code-square text-success"></i> SnipX
        </a>
        <input type="checkbox" id="menu-toggle" />
        <label className="hamburger" htmlFor="menu-toggle">
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Snippets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <button id="darkModeToggle" className="dark-mode-btn">
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
