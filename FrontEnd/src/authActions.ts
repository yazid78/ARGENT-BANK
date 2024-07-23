import axios from 'axios';
import store, { AppDispatch } from './store';
import { setToken, setError, setPerson } from './store';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
        const { token } = response.data.body;
        dispatch(setToken(token))

        console.log('Token:', token);
    } catch (error) {
        dispatch(setError('Adresse e-mail ou mot de passe incorrect'));
        console.error('Error logging in:', error);
        throw error;
    }
};

export const getUserProfile = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
            headers: { Authorization: `Bearer ${store.getState().auth.token}` },
        });
        const { firstName, lastName } = response.data.body;
        console.log(response.data);
        dispatch(setPerson({ firstName, lastName }));
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};

export const updateUserProfile = (firstName: string, lastName: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.put('http://localhost:3001/api/v1/user/profile', { firstName, lastName }, {
            headers: { Authorization: `Bearer ${store.getState().auth.token}` },
        });
        dispatch(setPerson({ firstName, lastName }));
    } catch (error) {
        console.error('Error updating user profile:', error);
    }
};

export const logOut = () => async (dispatch: AppDispatch) => {
    dispatch(setToken(''));
    dispatch(setPerson({ firstName: '', lastName: '' }));
    console.log('disconnection');
};
