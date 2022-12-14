import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.loginReducer.value);
  const theme = useSelector((state) => state.themeReducer.value);
  return (
    <div style={{ color: theme }}>
      <h2>Profile</h2>
      <h2>Name: {user.name}</h2>
      <h2>Surname: {user.surname}</h2>
    </div>
  );
};

export default Profile;
