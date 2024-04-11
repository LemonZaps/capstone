import Nav from "./Nav";
import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import HamburgerMenu from "./Hamburger";


const Header = () => {
    return (
        <div id="header-area">
            <Logo id="top-logo" alt="Logo" />
            <HamburgerMenu />
            <div id="header-menu">
            <Nav />
            </div>

        </div>
    );
};

export default Header;
