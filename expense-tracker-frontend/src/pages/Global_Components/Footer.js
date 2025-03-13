import React from 'react';
import '../assets/style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Liens utiles */}
        <div className="footer-links">
          <a href="/privacy">Politique de confidentialité</a>
          <a href="/terms">Conditions d'utilisation</a>
          <a href="/support">Support</a>
        </div>

        {/* Informations de contact */}
        <div className="footer-contact">
          <p>Email : support@receiptflow.com</p>
          <p>© 2023 ReceiptFlow. Tous droits réservés.</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <a href="https://facebook.com/receiptflow" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com/receiptflow" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com/company/receiptflow" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;