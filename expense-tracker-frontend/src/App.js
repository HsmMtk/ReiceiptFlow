import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from  './pages/ForgetPassword'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} /> {/* Par défaut, redirige vers la page de connexion */}
      </Routes>
    </Router>
  );
}

export default App;