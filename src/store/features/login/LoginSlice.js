import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: " ", surname: " " };

export const LoginSlice = createSlice({
  name: "Login",
  initialState: { value: initialState },
  reducers: {
    loginAction: (state, action) => (state.value = action.payload),
    logoutAction: (state) => (state.value = initialState),
  },
});

export const loginReducer = LoginSlice.reducer;
export const { logoutAction, loginAction } = LoginSlice.actions;
