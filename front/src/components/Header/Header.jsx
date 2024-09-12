import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-and-title-chat">
        <img src="/src/assets/2H9mNjaD_400x400.jpg" alt="" />
        <h4>La Messineta</h4>
      </div>

      <div className="options">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};
