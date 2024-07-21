import axios from 'axios';
import { AppDispatch } from './store';
import { setToken, setError } from './store';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
        const { token } = response.data.body;
        dispatch(setToken(token));
        console.log('Token:', token);

    } catch (error) {
        dispatch(setError('Adresse e-mail ou mot de passe incorrect'));
        console.error('Error logging in:', error);
        throw error;
    }
};

/* export const userName = ()=> async(dispatch: AppDispatch)=>{
    
} */

export const logOut = () => async (dispatch: AppDispatch) => {
    dispatch(setToken(''))
    console.log('disconnection');


}