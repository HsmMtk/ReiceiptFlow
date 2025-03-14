import React from "react";
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import "./assets/style/TermsOfUse.css"; // Importe le fichier CSS

const TermsOfUse = () => {
  return (
    <div className="terms-of-use-page">
      <Header />
      <div className="terms-of-use-content">
        <h1>Terms of Use</h1>
        

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using <strong>ReceiptFlow</strong>, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Use of the Service</h2>
        <p>
          You may use ReceiptFlow to track and manage your expenses, upload receipts, and analyze your spending habits. You agree to use the service only for lawful purposes and in accordance with these terms.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          You are responsible for:
        </p>
        <ul>
          <li>Providing accurate and complete information when using the service.</li>
          <li>Maintaining the confidentiality of your account credentials.</li>
          <li>Complying with all applicable laws and regulations.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content and materials available on ReceiptFlow, including but not limited to text, graphics, logos, and software, are the property of ReceiptFlow and are protected by intellectual property laws.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          ReceiptFlow shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the service.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on this page.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at: <a href="mailto:support@receiptflow.com">support@receiptflow.com</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;