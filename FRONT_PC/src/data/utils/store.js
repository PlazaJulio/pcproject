// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        jwtToken: null,
    },
    reducers: {
        setJwtToken: (state, action) => {
            state.jwtToken = action.payload;
        },
    },
});

export const { setJwtToken } = authSlice.actions;

export default configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});
