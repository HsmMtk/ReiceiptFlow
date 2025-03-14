import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './assets/style/ExpenseDetails.css';
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import ExpenseImage from "./assets/images/maquette_desktrop/expense-details.jpg"; // Import the image

const ExpenseDetails = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showOtherExpenses, setShowOtherExpenses] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Hide the section if it's already open
    } else {
      setActiveSection(section); // Show the section
    }
  };

  const handleViewOtherExpenses = () => {
    setShowOtherExpenses(!showOtherExpenses); // Toggle the display of other expenses
  };

  // Function to navigate to the Visualize Expenses page
  const handleVisualizeExpenses = () => {
    navigate('/visualize-expenses'); // Navigate to the Visualize Expenses page
  };



  // Mock data for other expenses
  const otherExpenses = [
    { id: 1, category: 'Food', amount: 50, date: '10/10/2023' },
    { id: 2, category: 'Transportation', amount: 30, date: '09/10/2023' },
    { id: 3, category: 'Hobbies', amount: 20, date: '08/10/2023' },
    { id: 4, category: 'Other', amount: 50, date: '07/10/2023' },
  ];

  return (
    <div className="expense-details">
      <Header />
      <div className="details-container">
        <h1><span style={{ fontFamily: "Pacifico, cursive" }}>Expense Details</span></h1>
        <img src={ExpenseImage} alt="Expense Details" className="expense-image" />
        <div className="expense-summary">
          <h2>Total Expenses: 500 €</h2>
          <ul>
            <li>Food: 200 €</li>
            <li>Transportation: 150 €</li>
            <li>Hobbies: 100 €</li>
            <li>Other: 50 €</li>
          </ul>
        </div>
        <div className="expense-history">
          <h3>Expense History</h3>
          <ul>
            <li>10/10/2023: Food - 50 €</li>
            <li>09/10/2023: Transportation - 30 €</li>
            <li>08/10/2023: Hobbies - 20 €</li>
          </ul>
        </div>
        <div className="action-buttons">
          <button
            className="action-button download-button"
            onClick={() => handleButtonClick('download')}
          >
            Download your expense
          </button>
          <button
            className="action-button edit-button"
            onClick={() => handleButtonClick('edit')}
          >
            Edit Your Expense
          </button>
          <button
            className="action-button delete-button"
            onClick={() => handleButtonClick('delete')}
          >
            Delete Your Expense
          </button>
          <button
            className="action-button view-expenses-button"
            onClick={handleViewOtherExpenses}
          >
            {showOtherExpenses ? 'Hide Other Expenses' : 'View Other Expenses'}
          </button>
          <button
            className="action-button visualize-expenses-button"
            onClick={handleVisualizeExpenses}
          >
            Visualize Your Expenses
          </button>
        </div>

        {/* Download Section */}
        {activeSection === 'download' && (
          <div className="action-section">
            <h3>Download Your Expense</h3>
            <p>Choose the download format:</p>
            <button className="action-button">Download as PDF</button>
            <button className="action-button">Download as CSV</button>
          </div>
        )}

        {/* Edit Section */}
        {activeSection === 'edit' && (
          <div className="action-section">
            <h3>Edit Your Expense</h3>
            <form>
              <label>
                Category:
                <input type="text" placeholder="Category" />
              </label>
              <label>
                Amount:
                <input type="number" placeholder="Amount" />
              </label>
              <button type="submit" className="action-button">Save Changes</button>
            </form>
          </div>
        )}

        {/* Delete Section */}
        {activeSection === 'delete' && (
          <div className="action-section">
            <h3>Delete Your Expense</h3>
            <p>Are you sure you want to delete this expense?</p>
            <button className="action-button delete-button">Confirm Deletion</button>
          </div>
        )}

        {/* Other Expenses Section */}
        {showOtherExpenses && (
          <div className="other-expenses-section">
            <h3>Other Expenses</h3>
            <ul>
              {otherExpenses.map((expense) => (
                <li key={expense.id}>
                  <span>{expense.date}: {expense.category} - {expense.amount} €</span>
                  <button className="action-button view-details-button">View Details</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ExpenseDetails;