import "../styles/Certificates.css";
function Certifications() {
const certificates = [
    
    "Machine Learning - AWS Academy",
    "Data Engineering - AWS Academy",
    "Neural Network and Deep Learning - GreatLearning",
    "AI Foundation & Advanced - Hexart.ai",
    "Introduction to C Programming - IIT Bombay",
    "Python Basics - HackerRank"
];

return (
    <section id="certifications">
    <h2>Certifications</h2>

    <div className="certificate-grid">
        {certificates.map((certificate) => (
        <div
            key={certificate}
            className="certificate-card"
        >
            {certificate}
        </div>
        ))}
    </div>
    </section>
);
}

export default Certifications;