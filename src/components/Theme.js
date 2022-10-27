import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../store/features/theme/ThemeSlice";

const Theme = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Theme</h2>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(setTheme(color));
        }}
      >
        Set Color
      </button>
    </div>
  );
};

export default Theme;
