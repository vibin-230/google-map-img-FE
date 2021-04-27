import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  const onSignOutClick = () => {
    window.location.reload();
  };
  return (
    <nav>
      <span className="logo">snaptrude</span>
      <button onClick={onSignOutClick}>Sign Out</button>
    </nav>
  );
};
