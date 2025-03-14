import React from "react";
import "../assets/style/Footer.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa"; // Icônes FontAwesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Liens utiles */}
        <div className="footer-links">
          <Link to="/PrivacyPolicy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/TermsOfUse" className="footer-link">
            Terms of Use
          </Link>
          <Link to="/Assistance" className="footer-link">
            Support
          </Link>
        </div>

        {/* Informations de contact */}
        <div className="footer-contact">
          <p>Email : support@receiptflow.com</p>
          <p>© 2023 ReceiptFlow. Tous droits réservés.</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <a
            href="https://www.ftsafe.com/Support/Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/FEITIAN_Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/feitian-technologies-co.-ltd./"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;