import React from "react";
import footerLogo from "../assets/footerLogo.jpg";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={footerLogo} alt="Company Logo" width="150px" />
      <nav id="nav-footer">
        <Nav />
      </nav>
      <address>
        Address information <br />
        123 Address Street
      </address>
      <p>Social Media</p>
    </footer>
  );
};

export default Footer;
