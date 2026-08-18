import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaTwitter,
FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
return (
    <section
    id="contact"
    className="contact-section"
    >
    <div className="contact-card">
        <p className="contact-label">
        GET IN TOUCH
        </p>

        <h2>Let's Connect</h2>

        <h3>Sathish Kanthi</h3>

        <div className="contact-location">
        <FaMapMarkerAlt />

        <span>
            Himayat Nagar, Hyderabad
        </span>
        </div>

        <div className="social-links">

        <a
            href="mailto:Kanthi.sathish777@gmail.com"
            target="_blank"
            rel="noreferrer"
        >
            <FaEnvelope />

            <span>Email</span>
        </a>

        <a
            href="https://github.com/77sathish"
            target="_blank"
            rel="noreferrer"
        >
            <FaGithub />

            <span>GitHub</span>
        </a>

        <a
            href="https://www.linkedin.com/in/sathish-kanthi-60b9b7226/"
            target="_blank"
            rel="noreferrer"
        >
            <FaLinkedin />

            <span>LinkedIn</span>
        </a>

        <a
            href="https://x.com/Sathish77ai"
            target="_blank"
            rel="noreferrer"
        >
            <FaTwitter />

            <span>Twitter</span>
        </a>

        </div>
    </div>
    </section>
);
}

export default Contact;