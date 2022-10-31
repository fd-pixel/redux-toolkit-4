import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../store/features/login/LoginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.value);
  return (
    <div style={{ color: theme }}>
      <h2>Login</h2>
      <button
        onClick={() => {
          dispatch(loginAction({ name: "F", surname: "D" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
