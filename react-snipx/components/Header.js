import React from 'react';
import styles from './styles.module.css';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to SnipX</h1>
      <p>Manage and explore your code snippets effortlessly.</p>
      <a href="#loginPopUp">
        <button className="Btn-Container">
          <span className="text">Get Started</span>
          <span className="icon-Container">
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none">
              {/* SVG Path details here */}
            </svg>
          </span>
        </button>
      </a>
    </header>
  );
};

export default Header;
