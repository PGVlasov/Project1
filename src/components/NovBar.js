import React, { fragment } from "react";
import { NavLink } from "react-router-dom";
//@import "~bootstrap/scss/bootstrap";

const styles = {
  novbar: {
    background: "MediumAquamarine",
    color: "#fff",
    justifyContent: "space-between",
    fontSize: "40px"
  },
  navbarbrend: {
    justifyContent: "center"
  },
  navbarnav: {
    display: "flex",
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
    fontSize: "20px"
  }
};

export const NavBar = () => (
  <nav style={styles.novbar}>
    <div className="navbar-brend" style={styles.navbarbrend}>
      Shopping list
    </div>
    <ul className="navbar-nav" style={styles.navbarnav}>
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Main
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/.NewList">
          NextTime
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/.archive">
          Archive
        </NavLink>
      </li>
    </ul>
  </nav>
);
