// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Remplacez par l'URL de votre backend Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur pour ajouter le token d'authentification aux requêtes
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;