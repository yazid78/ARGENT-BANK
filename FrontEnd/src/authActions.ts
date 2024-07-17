import axios from 'axios';
import { AppDispatch } from './store';
import { setToken, setError } from './store';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
        const { token } = response.data.body;
        dispatch(setToken(token));
        // Stockage du token dans le local storage ou sessionStorage si nécessaire
        localStorage.setItem('token', token);
        // Redirection vers la page de profil ou autre page après la connexion réussie
        console.log('Token:', token);

    } catch (error) {
        dispatch(setError('Adresse e-mail ou mot de passe incorrect'));
        console.error('Error logging in:', error);
        throw error;
    }
};
