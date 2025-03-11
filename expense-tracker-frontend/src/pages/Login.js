import React, { useState } from "react";
import "./assets/style/Login.css";
import connexionImage from "./assets/images/maquette_desktrop/img1_connexion.png";
import "./assets/Fonts/fonts.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu vas appeler l'API de connexion plus tard
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
            {" "}
            <span style={{ color: "green",fontSize: "37px" }}>Receipt</span>
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
