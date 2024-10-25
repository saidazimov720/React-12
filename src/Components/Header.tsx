import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
