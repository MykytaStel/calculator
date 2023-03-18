import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace with your desired icon */}
        <span role="img" aria-label="logo">
          🔰
        </span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/profile">Profile</a>
          </li>
          <li className="nav-item">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
