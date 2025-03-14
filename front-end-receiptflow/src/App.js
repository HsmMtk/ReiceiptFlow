import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from  './pages/ForgetPassword'
import Dashboard from './pages/Dashboard';
import Assistance from './pages/Assistance';
import Profile from './pages/Profile ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ReceiptUploader from './pages/ReceiptUploader';
import ExpenseDetails from './pages/ExpenseDetails';
import VisualizeExpenses from './pages/VisualizeExpenses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Assistance" element={<Assistance />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/upload-receipts" element={<ReceiptUploader />} />
        <Route path="/see-expenses" element={<ExpenseDetails />} />
        <Route path="/visualize-expenses" element={<VisualizeExpenses />} />
        <Route path="/" element={<Login />} /> {/* Par défaut, redirige vers la page de connexion */}
      </Routes>
    </Router>
  );
}

export default App;