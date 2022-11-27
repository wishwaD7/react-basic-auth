import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    userToken
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userToken = null
            localStorage.removeItem('userToken')
        },
        login: (state, action) => {
            state.userToken = action.payload
            localStorage.setItem('userToken', action.payload)
        }
    }
});

// Action creators are generated for each case reducer function
export const { logout, login } = authSlice.actions;

export default authSlice.reducer;