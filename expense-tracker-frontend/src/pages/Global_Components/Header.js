import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><span style={{ fontFamily: "Pacifico, cursive" }}>
            <span style={{ color: "green", fontSize: "37px" }}>Receipt</span>
            <span style={{ color: "#1653EE", fontSize: "37px" }}>Flow</span>
          </span></Link>
      </div>

      {/* Bouton du menu hamburger */}
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={toggleMenu}>Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/expenses" onClick={toggleMenu}>Expenses</Link>
          </li>
          <li className="nav-item">
            <Link to="/assistance" onClick={toggleMenu}>Assistance</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" onClick={toggleMenu}>Profie</Link>
          </li>
        </ul>
      </nav>

      {/* Boutons d'authentification */}
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">Sign-In</Link>
        <Link to="/register" className="auth-button">Sign-Up</Link>
      </div>
    </header>
  );
};

export default Header;