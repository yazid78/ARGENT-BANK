import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    error: string | null;
    firstName: string | null;
}

const initialState: AuthState = {
    token: null,
    error: null,
    firstName: null,
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
        setFirstName: (state, action: PayloadAction<string | null>) => {
            state.firstName = action.payload;
        },
    },
});

export const { setToken, setError, setFirstName } = authSlice.actions;
export const authReducer = authSlice.reducer;

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
