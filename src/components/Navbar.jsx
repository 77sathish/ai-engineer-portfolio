import { useState, useEffect } from "react";

import "../styles/Navbar.css";

function Navbar() {
const [darkMode, setDarkMode] = useState(true);

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

    <ul className="nav-links">
        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#profile">Profile</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#experience">Experience</a></li>

        <li><a href="#education">Education</a></li>

        <li><a href="#certifications">Certifications</a></li>

        <li><a href="#timeline">Timeline</a></li>

        <li><a href="#contact">Contact</a></li>
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