
import { useState, useEffect } from "react";

import "../styles/Navbar.css";

function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle(
            "light-mode",
            !darkMode
        );
    }, [darkMode]);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="sk-logo">SK</div>

                <h1 className="logo">
                    Sathish Kanthi
                </h1>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

                <li><a href="#profile" onClick={() => setMenuOpen(false)}>Profile</a></li>

                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

                <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>

                <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>

                <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>

                <li><a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a></li>

                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>

            <label className="theme-switch">
                <input
                    type="checkbox"
                    checked={!darkMode}
                    onChange={() =>
                        setDarkMode(!darkMode)
                    }
                />

                <span className="slider"></span>
            </label>
        </nav>
    );
}

export default Navbar;

