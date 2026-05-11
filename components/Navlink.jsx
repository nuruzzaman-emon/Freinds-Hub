import React from "react";
import { Link, useLocation } from "react-router";

const Navlink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link className={`btn  btn-xs ${isActive ? "btn-primary" : "btn-ghost"}`}>
      {children}
    </Link>
  );
};

export default Navlink;
