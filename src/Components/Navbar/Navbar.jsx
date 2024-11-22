import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul className="navbar-menu">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact Me</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div class="main">
        <h3>Hello, Everyone. I am </h3>
        <h1>MOHD TALIB</h1>
        <h3>Web Developer</h3>
      </div>
    </div>
  );
};

export default Navbar;
