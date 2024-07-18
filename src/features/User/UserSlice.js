// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            user: null,
            token: null, 
            localId: null,
            email: null, // Añadido el campo email
            password: null,
            imageCamera: null
        }
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.value.user = payload.email;
            state.value.token = payload.idToken;
            state.value.localId = payload.localId;
            state.value.email = payload.email; // Asignar email al estado
            state.value.password = payload.password; // Asignar email al estado
        },
        clearUser: (state) => {
            state.value.user = null;
            state.value.token = null;
            state.value.localId = null;
            state.value.email = null; // Limpiar email del estado
            state.value.password = null; 
            state.value.imageCamera = null;
        },
        setCameraImage: (state, { payload }) => {
            state.value.imageCamera = payload;
        }
    }
});

export const { setUser, clearUser, setCameraImage } = authSlice.actions;
export default authSlice.reducer;
