import "../styles/Skills.css";

function Skills() {
const aiFrameworks = [
    { name: "Computer Vision", rating: 5 },
    { name: "Deep Learning", rating: 4 },
    { name: "LLMs", rating: 4 },
    { name: "RAG", rating: 4 },
    { name: "LangChain", rating: 4 },
    { name: "Agentic AI", rating: 4 },
    { name: "NLP", rating: 4 }
];

const programming = [
    { name: "Python", rating: 5 },
    { name: "TensorFlow", rating: 4 },
    { name: "Scikit-learn", rating: 5 },
    { name: "OpenCV", rating: 4 },
    { name: "SQL", rating: 4 },
    { name: "Pandas", rating: 5 },
    { name: "NumPy", rating: 4 },
    { name: "Matplotlib", rating: 4 }
];

const tools = [
    { name: "Git Bash", rating: 4 },
    { name: "GitHub", rating: 4 },
    { name: "Vector DB", rating: 3 },
    { name: "Big Data", rating: 3 },
    { name: "VS Code", rating: 4 }
];

const renderSkills = (skills) =>
    skills.map((skill) => (
    <div
        className="skill-card"
        key={skill.name}
    >
        <div className="skill-header">
        <h3>{skill.name}</h3>

        <span className="skill-rating">
            {"●".repeat(skill.rating)}
            {"○".repeat(5 - skill.rating)}
        </span>
        </div>
    </div>
    ));

return (
    <section id="skills" className="skills-section">
    <h2>Technical Skills</h2>

    <div className="skills-category">
        <h3>🤖 AI & Frameworks</h3>

        <div className="skills-grid">
        {renderSkills(aiFrameworks)}
        </div>
    </div>

    <div className="skills-category">
        <h3>💻 Programming & Data Science</h3>

        <div className="skills-grid">
        {renderSkills(programming)}
        </div>
    </div>

    <div className="skills-category">
        <h3>🛠️ Tools & Platforms</h3>

        <div className="skills-grid">
        {renderSkills(tools)}
        </div>
    </div>
    </section>
);
}

export default Skills;