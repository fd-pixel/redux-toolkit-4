import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "../login/LoginSlice";

const rootReducer = combineReducers({
  loginReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
