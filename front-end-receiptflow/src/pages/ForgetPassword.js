import { useState } from "react";
import "./assets/style/ForgetPassword.css";
import ForgetPasswordImage from "./assets/images/maquette_desktrop/images.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulation d'une requête de réinitialisation de mot de passe
    if (email) {
      setMessage("Un lien de réinitialisation de mot de passe a été envoyé à votre email.");
    } else {
      setMessage("Veuillez entrer un email valide.");
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-image">
        <img src={ForgetPasswordImage} alt="Forgot Password" className="forget-password-img" />
      </div>
      <div className="forget-password-form-container">
        <h2 className="forget-password-title">Forgot Password</h2>
        <p className="forget-password-description">
          Enter your email to receive a password reset link.
        </p>
        {message && (
          <p className={`forget-password-message ${message.includes("Un lien") ? "success" : "error"}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            className="forget-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forget-password-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
