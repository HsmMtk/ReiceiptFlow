import { useState } from "react";
import "./assets/style/ForgetPassword.css";
import ForgetPasswordImage from "./assets/images/maquette_desktrop/images.png";
import api from "../api"; // Importez l'instance Axios

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Appeler l'API de réinitialisation de mot de passe
      const response = await api.post("/forgot-password", { email });

      // Si la requête réussit, afficher un message de succès
      setMessage("Un lien de réinitialisation de mot de passe a été envoyé à votre email.");
    } catch (error) {
      // Gérer les erreurs
      setMessage(error.response?.data?.message || "Une erreur s'est produite. Veuillez réessayer.");
      console.error("Erreur lors de la réinitialisation du mot de passe:", error.response?.data);
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-image">
        <img src={ForgetPasswordImage} alt="Forgot Password" className="max-w-md md:max-w-lg" />
      </div>
      <div className="forget-password-form-container">
        <h2 className="forget-password-title">Forgot Password</h2>
        <p className="forget-password-description">
          Enter your email to receive a password reset link.
        </p>
        {message && <p className="forget-password-message">{message}</p>}
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