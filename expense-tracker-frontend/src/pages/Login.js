import React, { useState } from "react";
import "./assets/style/Login.css";
import connexionImage from "./assets/images/maquette_desktrop/img1_connexion.png";
import "./assets/Fonts/fonts.css";
import api from "../api"; // Importez l'instance Axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Pour afficher les erreurs

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Appeler l'API de connexion
      const response = await api.post("/login", {
        email,
        password,
      });

      // Si la connexion réussit, stocker le token dans le localStorage
      localStorage.setItem("authToken", response.data.token);
      console.log("Connexion réussie:", response.data);

      // Rediriger l'utilisateur vers la page d'accueil ou le tableau de bord
      window.location.href = "/dashboard"; // Remplacez par la route souhaitée
    } catch (error) {
      // Gérer les erreurs de connexion
      setError("Email ou mot de passe incorrect");
      console.error("Erreur lors de la connexion:", error.response?.data);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={connexionImage} alt="Connexion" />
      </div>
      <div className="login-box">
        <h2>
          Sign In to{" "}
          <span style={{ fontFamily: "Pacifico, cursive" }}>
            <span style={{ color: "green", fontSize: "37px" }}>Receipt</span>
            <span style={{ color: "#1653EE", fontSize: "37px" }}>Flow</span>
          </span>
        </h2>
        <button className="social-button google-button">
          Sign in with Google
        </button>
        <button className="social-button facebook-button">
          Sign in with Facebook
        </button>
        <div className="or-divider">or sign in with email</div>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="Username or Email"
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

          {/* Afficher les erreurs */}
          {error && <div className="error-message">{error}</div>}

          {/* Ajout du lien Forgot Password */}
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;