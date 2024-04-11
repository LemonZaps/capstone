import Nav from "./Nav";
import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import HamburgerMenu from "./Hamburger";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import Home from "./Home";


const Header = () => {
    return (
        <div id="header-area">
            <Logo id="top-logo" alt="Logo" />
            <HamburgerMenu />
            <div id="header-menu">
            <Nav />
            </div>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/order-online" element={<OrderOnline />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            </Routes>
        </div>
    );
};

export default Header;
