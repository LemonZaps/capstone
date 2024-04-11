import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';
import { Link } from "react-router-dom";


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="hamburger" onClick={toggleMenu}>☰</div>
            <nav className={isOpen ? 'nav open' : 'nav'}>
            <div>
            <nav id="hamburger-menu">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/reservations" className="nav-item">Reservations</Link>
            <Link to="/order-online" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
            </nav>
        </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
