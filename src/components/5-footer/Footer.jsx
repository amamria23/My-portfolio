import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <nav>
        <a rel="stylesheet" href="About">
          About
        </a>
        <a rel="stylesheet" href="Projects">
          Projects
        </a>
        <a rel="stylesheet" href="Speaking">
          Speaking
        </a>
        <a rel="stylesheet" href="Uses">
          Uses
        </a>
      </nav>
      <div>
        <p>© 2024 Spencer Sharp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
