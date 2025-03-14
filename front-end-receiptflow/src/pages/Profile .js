import React, { useState } from "react";
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import "./assets/style/Profile.css";

const Profile = () => {
  // États pour les informations de l'utilisateur
  const [user, setUser] = useState({
    name: "55",
    email: "55@gmail.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  });

  // États pour la gestion des sections de modification
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    oldPassword: '',
    newPassword: '',
  });

  // Fonction pour mettre à jour la photo de profil
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonctions pour gérer l'ouverture et la fermeture des sections
  const toggleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const toggleChangePassword = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    setUser({ ...user, name: formData.name, email: formData.email });
    setIsEditingProfile(false); // Fermer la section d'édition
  };

  const handlePasswordChange = () => {
    // Logique pour changer le mot de passe (validation ou appel API)
    console.log("Mot de passe changé :", formData.newPassword);
    setIsChangingPassword(false); // Fermer la section de changement de mot de passe
  };

  return (
    <div className="profile-page">
      {/* En-tête */}
      <Header />

      {/* Section Photo de Profil */}
      <div className="profile-section">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile" />
          <label htmlFor="profile-picture-upload" className="edit-icon" style={{ zIndex: 0 }}>
            ✏️
          </label>
          <input
            type="file"
            id="profile-picture-upload"
            accept="image/*"
            onChange={handleProfilePictureChange}
            style={{ display: "none" }}
          />
        </div>

        {/* Informations Utilisateur */}
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Boutons d'Actions */}
      <div className="action-buttons">
        <button className="edit-profile-button" onClick={toggleEditProfile}>
          {isEditingProfile ? "Close" : "Edit Your Profile"}
        </button>
        <button className="change-password-button" onClick={toggleChangePassword}>
          {isChangingPassword ? "Close" : "Change password"}
        </button>
      </div>

      {/* Section Modifier le Profil */}
      {isEditingProfile && (
        <div className="edit-profile-section">
          <h3>Edit Your Profile</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nom"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <button className="save-changes-button" onClick={handleSaveChanges}>
            Save changes
          </button>
        </div>
      )}

      {/* Section Changer le Mot de Passe */}
      {isChangingPassword && (
        <div className="change-password-section">
          <h3>Change Your Password</h3>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleInputChange}
            placeholder="Old Password"
          />
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="New Password"
          />
          <button className="change-password-submit" onClick={handlePasswordChange}>
            Change password
          </button>
        </div>
      )}

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default Profile;