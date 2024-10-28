import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, user: null },
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
    const response = await axios.post('http://localhost:5000/api/users/login', credentials);
    dispatch(setAuth({ token: response.data.token, user: response.data.user }));
};

export default authSlice.reducer;
