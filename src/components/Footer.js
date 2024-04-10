import React from "react";
import footerLogo from "../assets/footerLogo.jpg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={footerLogo} alt="Company Logo" width="150px" />
      <nav>
        <ul id="footer-menu">
          <li>Home</li>
          <li>About</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
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
