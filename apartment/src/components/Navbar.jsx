import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/flat">Flats</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Navbar;
