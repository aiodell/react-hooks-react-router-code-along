// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  // NavBar component
  function NavBar() {
    return(
      <div>
        <NavLink
        to="/"
        // set exact so it knows to only set activeSTyle when route is deeply equal to link
        exact// add styling to NavLink
        style={linkStyles}
        // add prop for actlyStyle
        activeStyle={{
          background: "darkblue",
        }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    )
  }
  
export default NavBar;