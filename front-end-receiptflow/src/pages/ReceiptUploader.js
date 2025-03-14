import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './assets/style/ReceiptUploader.css';
import Header from "./Global_Components/Header";
import Footer from "./Global_Components/Footer";
import ReceiptUploaderImage from "./assets/images/maquette_desktrop/receipts-onthego-p-1080.jpeg"; // Importe l'image

const ReceiptUploader = () => {
  const { register, handleSubmit } = useForm();
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showActions, setShowActions] = useState(false); // Pour afficher les boutons supplémentaires

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('receipt', data.receipt[0]);

    setUploading(true);
    try {
      await axios.post('/api/upload-receipt', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadSuccess(true);
      setShowActions(true); // Afficher les boutons après le succès
    } catch (error) {
      console.error('Error uploading receipt:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="receipt-uploader">
      <Header />
      <div className="uploader-container">
        <h1>Upload Your Receipt</h1>
        <img src={ReceiptUploaderImage} alt="Upload Icon" className="upload-icon" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="file"
            {...register('receipt')}
            accept="image/*"
            required
            className="file-input"
          />
          <div className="button-group">
            <button type="submit" disabled={uploading} className="upload-button">
              {uploading ? 'Uploading...' : 'Analyze Your File'}
            </button>
            {showActions && (
              <div className="action-buttons">
                <button className="action-button">See Your Expenses</button>
                <button className="action-button">Visualize Your Expenses</button>
              </div>
            )}
          </div>
        </form>
        {uploadSuccess && <p className="success-message">Receipt uploaded successfully!</p>}
      </div>
      <Footer />
    </div>
  );
};

export default ReceiptUploader;