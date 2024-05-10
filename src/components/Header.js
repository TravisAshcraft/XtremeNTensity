// Header.js
import React from "react";
import "../styles/Header.css"; // Import the CSS for styling

function Header() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/xtrementensityvector.png" alt="Logo"/>
                    <h1>Xtreme-N-Tensity</h1>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#why-join-us">Why Join Us?</a></li>
                    <li><a href="#plan">Plan</a></li>
                    <li><a href="#coaches">Coaches</a></li>
                    <li><a href="#visit-our-gym">Visit our Gym</a></li>
                </ul>
                <button className="register-btn">Register</button>
            </nav>
        </div>
    );
}

export default Header;
