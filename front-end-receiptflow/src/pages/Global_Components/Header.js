import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../assets/style/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); // Logout confirmation state
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    console.log("User logged out");
    navigate("/login"); // Redirect to login
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span className="logo-text">
            <span className="logo-receipt">Receipt</span>
            <span className="logo-flow">Flow</span>
          </span>
        </Link>
      </div>

      {/* Hamburger Button (visible only on mobile) */}
      <div className="menu-and-profile">
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Profile Icon (visible only on mobile) */}
        <FaUserCircle className="profile-icon mobile-profile-icon" onClick={toggleUserMenu} />
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/Dashboard" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/see-expenses" onClick={toggleMenu}>
              Expenses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Assistance" onClick={toggleMenu}>
              Assistance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Profile" onClick={toggleMenu}>
              Profil
            </Link>
          </li>
        </ul>
      </nav>

      {/* Profile Icon (visible only on desktop) */}
      <div className="desktop-profile">
        <FaUserCircle className="profile-icon" onClick={toggleUserMenu} />
      </div>

      {/* Profile & Logout */}
      {isUserMenuOpen && (
        <div className="dropdown-menu">
          <Link to="/Profile" className="dropdown-item" onClick={toggleUserMenu}>
            My Profil
          </Link>
          <button className="dropdown-item logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="logout-modal">
          <div className="logout-modal-content">
            <h3>Are you sure?</h3>
            <p>Do you really want to log out?</p>
            <div className="logout-buttons">
              <button className="cancel-btn" onClick={() => setShowLogoutConfirm(false)}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for open menu */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;