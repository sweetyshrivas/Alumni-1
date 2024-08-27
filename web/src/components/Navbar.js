// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">AlumniPlatform</Link>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link to="/profile" className="nav-links" onClick={toggleMenu}>Profile</Link>
              </li>
              <li className="nav-item">
                <button className="nav-links btn-logout" onClick={handleLogout}>Logout</button>
              </li>
              <li className="nav-item">
                <div className="profile-menu" onClick={() => setIsProfileOpen(prev => !prev)}>
                  <img src={user.profilePicture} alt={user.name} className="profile-pic" />
                  {isProfileOpen && (
                    <div className="profile-dropdown">
                      <Link to="/settings">Settings</Link>
                      <Link to="/logout" onClick={handleLogout}>Logout</Link>
                    </div>
                  )}
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-links" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-links" onClick={toggleMenu}>Register</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <button className="nav-links btn-dark-mode" onClick={toggleDarkMode}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
