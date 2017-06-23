import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <nav className="navbar navbar-inverse header-nav">
      <div className="container">
          <div className="navbar-header">
            <span className="navbar-brand logo-container">
                <Link to="/" className='logo-link'>BeFit</Link>
            </span>
          </div>
      </div>
    </nav>
)

export default Header;
