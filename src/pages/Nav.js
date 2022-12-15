import React from "react";

import navProps from "../components/Data/NavData";
import NavLogo from "../components/Navigation/NavLogo";
import NavMenu from "../components/Navigation/NavMenu";
import { useState } from "react";

function Nav() {
  const [Nav, setNav] = useState(navProps);

  return (
    <div className="nav">
      <NavLogo />
      <div className="nav-menu">
        {Nav.map((d) => (
          <NavMenu item={d.menuItem} />
        ))}
      </div>
    </div>
  );
}

export default Nav;
