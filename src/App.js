import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Ensures everything is within the Router */}
        <Header />  {/* Static Header */}
        <Main> {/* Main content area */}
          <Routes> {/* Routes go inside Main if Main is meant to wrap routed content */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>
        <Footer /> {/* Static Footer */}
      </div>
    </Router>
  );
}

export default App;
