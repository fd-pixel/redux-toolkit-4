import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../store/features/login/LoginSlice";

const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserSurName, setNewUserSurName] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.value);
  return (
    <div style={{ color: theme }}>
      <h2>Login</h2>
      name:{" "}
      <input type="text" onChange={(e) => setNewUserName(e.target.value)} />
      surname:{" "}
      <input type="text" onChange={(e) => setNewUserSurName(e.target.value)} />
      <button
        onClick={() => {
          dispatch(loginAction({ name: newUserName, surname: newUserSurName }));
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
