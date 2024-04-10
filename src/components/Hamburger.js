import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';

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
                <ul>
                    <li><a className="ham-menu" href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a className="ham-menu" href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a className="ham-menu" href="#reservations" onClick={toggleMenu}>Reservations</a></li>
                    <li><a className="ham-menu" href="#orderonline" onClick={toggleMenu}>Order Online</a></li>
                    <li><a className="ham-menu" href="#Login" onClick={toggleMenu}>Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
