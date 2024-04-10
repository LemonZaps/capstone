import Nav from "./Nav";
import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg"; // Adjusted import path

const Header = () => {
    return (
        <div id="header-area">
            <Logo id="top-logo" alt="Logo" /> {/* Use the Logo component directly */}
            <Nav />
        </div>
    );
};

export default Header;
