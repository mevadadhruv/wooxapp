import React from "react";
import img from "../Photos/logo.png";
function NavLogo() {
  return (
    <div className="nav-logo">
      <img src={img} className="logo" alt="logo" />
    </div>
  );
}

export default NavLogo;
