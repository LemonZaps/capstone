import Nav from "./Nav";
import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg"; // Adjusted import path
import HamburgerMenu from "./Hamburger";

const Header = () => {
    return (
        <div id="header-area">
            <Logo id="top-logo" alt="Logo" /> {/* Use the Logo component directly */}
            <HamburgerMenu />
            <Nav />
        </div>
    );
};

export default Header;
