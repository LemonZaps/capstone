import Nav from "./Nav";
import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import HamburgerMenu from "./Hamburger";

const Header = () => {
    return (
        <div id="header-area">
            <Logo id="top-logo" alt="Logo" />
            <HamburgerMenu />
            <Nav />
        </div>
    );
};

export default Header;
