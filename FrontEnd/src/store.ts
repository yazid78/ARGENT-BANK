import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    error: string | null;
    firstName: string | null;
    lastName: string | null;
}

const initialState: AuthState = {
    token: null,
    error: null,
    firstName: null,
    lastName: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.error = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.token = null;
        },
        //setperson creer un objet
        setPerson: (state, action: PayloadAction<{ firstName: string, lastName: string }>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});

export const { setToken, setError, setPerson } = authSlice.actions;
export const authReducer = authSlice.reducer;

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
