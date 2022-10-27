import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./features/login/LoginSlice";
import { themeReducer } from "./features/theme/ThemeSlice";

const rootReducer = combineReducers({
  loginReducer,
  themeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
