import React, { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Home from "./Home";
import About from "./About";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

export function timesReducer(state, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        case 'UPDATE_TIMES':
            return action.payload;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

const Main = () => {
    const [availableTimes, dispatchTimes] = useReducer(timesReducer, initializeTimes());

    const updateTimes = (selectedDate) => {

        dispatchTimes({
            type: 'UPDATE_TIMES',
            payload: ['18:00', '20:00', '22:00']
        });
    };

    return (
        <>
            <HeroSection />
            <Specials />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatchTimes={dispatchTimes} updateTimes={updateTimes} initializeTimes={initializeTimes} />} />

                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default Main;
