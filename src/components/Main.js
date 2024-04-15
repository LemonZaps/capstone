

import React from 'react';
import { Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Home from "./Home";
import About from "./About";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";


const Main = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <HeroSection />
            <Specials />
        </>
    );
};

export default Main;
