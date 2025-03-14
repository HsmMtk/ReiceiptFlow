import React from "react";
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import './assets/style/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <Header />
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>

        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>ReceiptFlow</strong>. We are committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, and protect your information when you use our application.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect the following information when you use our app:
        </p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, and other details you provide during registration.</li>
          <li><strong>Transaction Data:</strong> Information about the expenses you record, including uploaded receipts.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device used, and other technical information.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Process your transactions and categorize your expenses.</li>
          <li>Send you notifications and updates.</li>
          <li>Analyze app usage to improve user experience.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties, except in the following cases:
        </p>
        <ul>
          <li>With your explicit consent.</li>
          <li>To comply with legal obligations.</li>
          <li>To protect our rights or property.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal data.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Object to the processing of your data.</li>
        </ul>
        <p>
          To exercise these rights, contact us at: <a href="mailto:support@receiptflow.com">support@receiptflow.com</a>.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at: <a href="mailto:support@receiptflow.com">support@receiptflow.com</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;