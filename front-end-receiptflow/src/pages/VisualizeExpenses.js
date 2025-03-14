import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import './assets/style/VisualizeExpenses.css';
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import ExpenseImage from "./assets/images/maquette_desktrop/expense-details.jpg"; // Import the image

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const VisualizeExpenses = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showOtherExpenses, setShowOtherExpenses] = useState(false);
  const navigate = useNavigate();

  // Data for the chart
  const data = {
    labels: ['Rent', 'Parking', 'Electricity/Gas', 'Internet', 'Mobile', 'Spotify', 'Gym', 'Insurance', 'Health Insurance', 'Loan 1', 'Loan 2', 'Bank', 'Private School'],
    datasets: [
      {
        label: 'Expenses (€)',
        data: [350, 30, 30, 12, 9, 0, 0, 50, 30, 0, 10, 0, 0],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF', '#FFCD56', '#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
        ],
        borderColor: [
          '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data for the table
  const expenses = [
    { category: 'Rent / Mortgage', amount: 350.00, percentage: '60.4%' },
    { category: 'Parking', amount: 30.00, percentage: '5.2%' },
    { category: 'Electricity / Gas', amount: 30.00, percentage: '5.2%' },
    { category: 'Internet Subscription', amount: 12.00, percentage: '2.7%' },
    { category: 'Mobile Subscription', amount: 9.00, percentage: '6.6%' },
    { category: 'Spotify Subscription', amount: 0.00, percentage: '0%' },
    { category: 'Gym Subscription', amount: 0.00, percentage: '0%' },
    { category: 'Insurance (Car, Home)', amount: 50.00, percentage: '8.67%' },
    { category: 'Health Insurance', amount: 30.00, percentage: '5.2%' },
    { category: 'Loan Repayment 1', amount: 0.00, percentage: '0%' },
    { category: 'Loan Repayment 2', amount: 10.00, percentage: '1.7%' },
    { category: 'Bank', amount: 0.00, percentage: '0%' },
    { category: 'Private School', amount: 0.00, percentage: '0%' },
  ];

  // Mock data for other expenses
  const otherExpenses = [
    { id: 1, category: 'Food', amount: 50, date: '10/10/2023' },
    { id: 2, category: 'Transportation', amount: 30, date: '09/10/2023' },
    { id: 3, category: 'Hobbies', amount: 20, date: '08/10/2023' },
    { id: 4, category: 'Other', amount: 50, date: '07/10/2023' },
  ];

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  const handleGoHome = () => {
    navigate('/');
  };

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

  return (
    <div className="visualize-expenses">
      <Header />
      <div className="visualize-container">
        <h1><span style={{ fontFamily: "Pacifico, cursive" }}>Visualize Expenses</span></h1>

        {/* Chart Section */}
        <div className="chart-section">
          <h2>Expenses by Category</h2>
          <div className="chart-container">
            <Pie data={data} />
          </div>
        </div>

        {/* Table Section */}
        <div className="table-section">
          <h2>Expense Details</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.category}</td>
                  <td>{expense.amount.toFixed(2)} €</td>
                  <td>{expense.percentage}</td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="total-row">
                <td><strong>Total</strong></td>
                <td><strong>{totalExpenses.toFixed(2)} €</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons for navigation and actions */}
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
            className="action-button go-home-button"
            onClick={handleGoHome}
          >
            Go to Home
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

export default VisualizeExpenses;