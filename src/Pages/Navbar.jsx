import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>My blog</h2>
      <ul>
        <NavLink to='/home'>
          <li>HOME</li>
        </NavLink>
        <NavLink to='/createpost'>
          <li>CREATEPOST</li>
        </NavLink>
        <NavLink to='/mypost'>
          <li>MYPOST</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
