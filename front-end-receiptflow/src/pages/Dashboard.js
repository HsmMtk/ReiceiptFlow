import React from "react";
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import "./assets/style/Dashboard.css";
import { Link } from "react-router-dom";

// Importez les images (assurez-vous que les chemins sont corrects)
import uploadReceiptImage from "./assets/images/maquette_desktrop/images.jpeg";
import seeExpensesImage from "./assets/images/maquette_desktrop/téléchargement 2.jpeg";
import visualizeExpensesImage from "./assets/images/maquette_desktrop/graphe.avif";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* En-tête */}
      <Header />

      {/* Section Hero (Bienvenue) */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to the Expense Tracker <strong>ReceiptFlow</strong>
          </h1>
          <p>Track your expenses with ReceiptFlow by FEITIAN</p>
          <div className="cta-buttons">
            <button className="start-button">
              <Link to="/upload-receipts" style={{ textDecoration: "none", color: "inherit" }}>
                Start
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Section des Services */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          {/* Carte 1 : Upload Receipts */}
          <div className="service-card">
            <img
              src={uploadReceiptImage}
              alt="Upload Receipts"
              className="service-image"
            />
            <h3>Upload Your Receipts</h3>
            <p>
              Easily upload images of your receipts and let ReceiptFlow do the
              rest.
            </p>
            <Link to="/upload-receipts">
              <button className="service-button">See the service</button>
            </Link>
          </div>

          {/* Carte 2 : Visualize Expenses (déplacée ici) */}
          <div className="service-card">
            <img
              src={visualizeExpensesImage}
              alt="Visualize Expenses"
              className="service-image"
            />
            <h3>Visualize Your Expenses</h3>
            <p>
              Get clear insights into your spending habits with interactive
              charts.
            </p>
            <Link to="/visualize-expenses">
              <button className="service-button">See the service</button>
            </Link>
          </div>

          {/* Carte 3 : See our other services */}
          <div className="service-card">
            <img
              src={seeExpensesImage}
              alt="See Expenses"
              className="service-image"
            />
            <h3>See our other services</h3>
            <p>
            By FEITIAN. Discover more about our innovative solutions.
            </p>
            <a href="https://www.ftsafe.com/identity" target="_blank" rel="noopener noreferrer">
              <button className="service-button">Visit FEITIAN</button>
            </a>
          </div>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-content">
          <div className="faq-item">
            <h3>What is ReceiptFlow?</h3>
            <p>
              ReceiptFlow is a web application that allows users to upload
              images of receipts, automatically categorize expenses, and
              calculate totals for automated expense management.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I use it to manage my personal expenses?</h3>
            <p>
              Yes, the app is designed for both professional and personal
              expense management. You can upload receipts, categorize expenses,
              and visualize your spending habits.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is the app secure?</h3>
            <p>
              Yes, the app uses secure authentication systems for user
              management and ensures data security during the storage and
              processing of receipt images.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I try the app before committing?</h3>
            <p>
              Yes, you can join the waitlist to access a beta version of the app
              and test it before the official release.
            </p>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default Dashboard;