import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaTwitter,
FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector("button[type='submit']");
    const status = form.querySelector(".feedback-status");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    status.textContent = "";
    status.className = "feedback-status";

    try {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const responseText = await response.text();
    let result = {};

    try {
        result = responseText ? JSON.parse(responseText) : {};
    } catch {
        throw new Error(`Server returned an invalid response (${response.status}).`);
    }

    if (!response.ok) {
        throw new Error(result.error || `Unable to send your message (${response.status}).`);
    }

    status.textContent = "Thanks! Your message has been sent successfully.";
    status.className = "feedback-status success";
    form.reset();
    } catch (error) {
    status.textContent = error.message || "Something went wrong. Please try again.";
    status.className = "feedback-status error";
    } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
    }
};

return (
    <section id="contact" className="contact-section">
    <div className="contact-card">
        <p className="contact-label">GET IN TOUCH</p>
        <h2>Let's Connect</h2>
        <h3>Sathish Kanthi</h3>

        <div className="contact-location">
        <FaMapMarkerAlt />
        <span>Himayat Nagar, Hyderabad</span>
        </div>

        <div className="social-links">
        <a href="mailto:Kanthi.sathish777@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
            <span>Email</span>
        </a>
        <a href="https://github.com/77sathish" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/sathish-kanthi-60b9b7226/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
        </a>
        <a href="https://x.com/Sathish77ai" target="_blank" rel="noreferrer">
            <FaTwitter />
            <span>Twitter</span>
        </a>
        </div>

        <div className="feedback-form-wrapper">
        <div className="feedback-heading">
            <p className="feedback-label">FEEDBACK & SUPPORT</p>
            <h3>How can I help?</h3>
            <p>Share feedback, ask for help, or report a problem with my work.</p>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="feedback-field-row">
            <div className="feedback-field">
                <label htmlFor="feedback-name">Name</label>
                <input id="feedback-name" name="name" type="text" placeholder="Your name" maxLength="100" autoComplete="name" required />
            </div>
            <div className="feedback-field">
                <label htmlFor="feedback-email">Email</label>
                <input id="feedback-email" name="email" type="email" placeholder="you@example.com" maxLength="254" autoComplete="email" required />
            </div>
            </div>

            <div className="feedback-field">
            <label htmlFor="feedback-type">What do you need?</label>
            <select id="feedback-type" name="type" defaultValue="Feedback" required>
                <option value="Feedback">Feedback</option>
                <option value="Need Help">Need Help</option>
                <option value="Report a Problem">Report a Problem</option>
            </select>
            </div>

            <div className="feedback-field">
            <label htmlFor="feedback-message">Message</label>
            <textarea id="feedback-message" name="message" rows="6" placeholder="Write your feedback, problem, or what you need help with..." maxLength="3000" required />
            </div>

            <button className="feedback-submit" type="submit">Send Message</button>
            <p className="feedback-status" role="status" aria-live="polite"></p>
        </form>
        </div>
    </div>
    </section>
);
}

export default Contact;
