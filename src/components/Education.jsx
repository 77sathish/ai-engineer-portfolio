import "../styles/Education.css";


function Education() {
return (
    <section id="education" className="education-section">
    <div className="education-container">

        <div className="education-heading">
        <p className="section-label">EDUCATION</p>

        <h2>
            Academic <span>Journey</span>
        </h2>

        <p className="education-intro">
            Building a strong foundation in Artificial Intelligence,
            Machine Learning, and modern computing.
        </p>
        </div>

        <div className="education-timeline">

          {/* Bachelor's Degree */}
        <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
            <div className="education-year">
                2021 — 2025
            </div>

            <h3>Bachelor's Degree</h3>

            <h4>
                Vidya Jyothi Institute Of Technology
            </h4>

            <p className="education-field">
                Artificial Intelligence
            </p>

            <div className="education-meta">
                <span>
                CGPA
                <strong>8.19</strong>
                </span>
            </div>
            </div>
        </div>

          {/* Intermediate */}
        <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
            <div className="education-year">
                2018 — 2020
            </div>

            <h3>Intermediate</h3>

            <h4>
                Nano Junior College
            </h4>

            <div className="education-meta">
                <span>
                Percentage
                <strong>86.3%</strong>
                </span>
            </div>
            </div>
        </div>

        </div>
    </div>
    </section>
);
}

export default Education;