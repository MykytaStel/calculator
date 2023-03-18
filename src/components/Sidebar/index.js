import React, { useState } from 'react';
import './styles.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Courses',
    'Indicators',
    'TST Inner Circle',
    'CSA',
    'SSO System',
    'My Top 5 Trade Setups',
    'ETF Edge Portfolio',
    'Slingshot Traders Playbook',
    'Trade of the Decade 2.0',
    '10 for 10',
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
