import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.error = null; // Réinitialiser l'erreur en cas de réussite
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.token = null; // Réinitialiser le token en cas d'erreur
        },
    },
});

export const { setToken, setError } = authSlice.actions;
export const authReducer = authSlice.reducer;

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
