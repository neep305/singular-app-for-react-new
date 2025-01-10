import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';
import logo from './singular-logo.png';

const Navigation = () => {
    const [mobileNavOpened, setMobileNavOpened] = useState(false);
    const toggleMobileNav = () => {
        setMobileNavOpened(!mobileNavOpened);
    }

    return (
        <nav className={mobileNavOpened ? 'dropdown-opened' : ''}>
            <div className="logo-and-app-name">
                <a className="logo" href="/">
                    <img src={logo} alt="Singular Logo" />
                </a>
                <h1 className="app-name">Singular React</h1>
            </div>
            <button className="mobile-dropdown-toggle" onClick={toggleMobileNav} aria-controls="dropdown-links" aria-expanded={mobileNavOpened}>
                {mobileNavOpened ? <FaTimes size={24} color="#fff"/> : <FaBars size={24} color="#fff"/>} 
            </button>
            <div className={`dropdown-link-container${mobileNavOpened ? ' dropdown-opened' : ''}`}>
                <a href="/">Home</a>
                <a href="/deeplink">Deeplink</a>
                <a href="/event">Event</a>
                <a href="/webtoapp">Web to App</a>
                <a href="/gtm">GTM</a>
            </div>
        </nav>
    )
}

export default Navigation;