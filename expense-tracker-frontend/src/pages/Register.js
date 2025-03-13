import React, { useState } from "react";
import "./assets/style/Register.css";
import inscriptionImage from "./assets/images/maquette_desktrop/img1_inscription.png"; // Importe l'image
import "./assets/Fonts/fonts.css";
import { Link } from "react-router-dom";
import api from "../api"; // Importez l'instance Axios

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(""); // Pour afficher les erreurs
  const [successMessage, setSuccessMessage] = useState(""); // Pour afficher un message de succès

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que l'utilisateur a accepté les termes
    if (!agreeTerms) {
      setError("Vous devez accepter les termes et conditions.");
      return;
    }

    try {
      // Appeler l'API d'inscription
      const response = await api.post("/register", {
        name,
        username,
        email,
        password,
      });

      // Si l'inscription réussit, afficher un message de succès
      setSuccessMessage("Inscription réussie ! Redirection en cours...");
      setError("");

      // Rediriger l'utilisateur vers la page de connexion après 2 secondes
      setTimeout(() => {
        window.location.href = "/login"; // Remplacez par la route souhaitée
      }, 2000);
    } catch (error) {
      // Gérer les erreurs d'inscription
      setError(error.response?.data?.message || "Erreur lors de l'inscription");
      setSuccessMessage("");
      console.error("Erreur lors de l'inscription:", error.response?.data);
    }
  };

  return (
    <div className="register-container">
      <div className="register-image">
        <img src={inscriptionImage} alt="Inscription" />
      </div>
      <div className="register-box">
        <h2>
          <span style={{ fontSize: "35px" }}>Sign Up to{" "}</span>
          <span style={{ fontFamily: "Pacifico, cursive" }}>
            {" "}
            <span style={{ color: "green", fontSize: "37px" }}>Receipt</span>
            <span style={{ color: "#1653EE", fontSize: "37px" }}>Flow</span>
          </span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            minLength={6}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="terms">
            <input
              required
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agreeTerms">
              I agree with ReceiptFlow's Terms of Service, Privacy Policy, and
              default Notification Settings
            </label>
          </div>

          {/* Afficher les messages d'erreur et de succès */}
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;