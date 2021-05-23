import React from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar__logo">
                    <h1>Pizzeria</h1>
                </div>
                <div className="navbar__hamburger">
                    <FaBars />
                </div>
                <ul className="navbar__links">
                    <li className="navbar__links--link">
                        <a href="#locations">Locations</a>
                    </li>
                    <li className="navbar__links--link">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="navbar__links--link order-now">
                        <a href="#order-now">Order Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}