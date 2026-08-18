import profileImage from "../assets/profile.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "../styles/Hero.css";

function Hero() {
return (
    <section className="hero">
    <div className="hero-container">
        <div className="hero-image">
        <img
            src={profileImage}
            alt="Sathish Kanthi"
        />
        </div>

        <p className="hero-subtitle">
        MACHINE LEARNING • COMPUTER VISION • GENERATIVE AI
        </p>

        <h1>SATHISH KANTHI</h1>

        <h2 className="typing-text">
        AI/ML ENGINEER
        </h2>

        <p className="hero-text">
        Building intelligent systems using Machine Learning,
        Deep Learning, Computer Vision, RAG, Agentic AI,
        Semantic Search, and Large Language Models.
        </p>

        <div className="hero-buttons">
        <a href="#projects">
            <button className="hero-button">
            View Projects
            </button>
        </a>

        <a href="/resume.pdf" download>
            <button className="hero-button">
            Download Resume
            </button>
        </a>
        </div>

        <div className="hero-socials">
        <a
            href="https://github.com/77sathish"
            target="_blank"
            rel="noreferrer"
        >
            <FaGithub />
        </a>

        <a
            href="https://www.linkedin.com/in/sathish-kanthi-60b9b7226/"
            target="_blank"
            rel="noreferrer"
        >
            <FaLinkedin />
        </a>

        <a href="mailto:kanthi.sathish777@gmail.com">
            <MdEmail />
        </a>
        </div>
    </div>
    </section>
);
}

export default Hero;