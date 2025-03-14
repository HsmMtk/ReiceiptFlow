import React, { useState } from "react";
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import "./assets/style/Assistance.css";

const Assistance = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the data to the server or perform further actions here
    console.log(formData);
  };

  return (
    <div className="assistance-page">
      <Header />

      <div className="assistance-hero">
        <h1>Assistance ReceiptFlow</h1>
        <p>We are here to help! Check out our FAQ or contact us directly.</p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-content">
          <div className="faq-item">
            <h3>How can I upload my receipts?</h3>
            <p>To upload your receipts, go to the "Upload Receipts" section and follow the instructions.</p>
          </div>
          <div className="faq-item">
            <h3>How does ReceiptFlow categorize my expenses?</h3>
            <p>ReceiptFlow uses AI to analyze your receipts and automatically categorize your expenses.</p>
          </div>
          <div className="faq-item">
            <h3>Can I try ReceiptFlow for free?</h3>
            <p>Yes, you can join our waiting list to access the free beta version.</p>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Assistance;
