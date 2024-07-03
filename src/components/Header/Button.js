import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";

export function Button() {
  return (
    <NavLink to="/kontakt">
      <button className="btn-nav btn-res">Kontakt</button>
    </NavLink>
  );
}
