import emotionImage from "../assets/emotion-project.png";
import ragImage from "../assets/Rag Portal.png";

import "../styles/Project.css";

function Projects() {
const projects = [
    {
    title: "Real-Time Emotion Detection System",

    image: emotionImage,

    github:
        "https://github.com/77sathish/emotionAi",

    description: [
        "Real-time facial emotion recognition",

        "CNN-based deep-learning model",

        "OpenCV-based image processing",

        "Emotion classification dashboard"
    ],

    technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Pandas",
        "Matplotlib"
    ],
    Datasets: ["FER-2013",
                "RAVDESS"],
    },

    {
    title: "AI Knowledge Application(Agent+RAG)",

    image: ragImage,

    github:
        "https://github.com/77sathish/intership_ipalrani",

    description: [
        "Retrieval-Augmented Generation system",

        "LangChain-based AI agents",

        "Vector database integration",

        "Semantic document search"
    ],

    technologies: [
        "Python",
        "LangChain",
        "RAG",
        "LLMs",
        "SQL",
        "FAISS",
        "Ollama",
        "FastAPI",
    ],
    Datasets: ["Hands-On-Machine-Learning-with-Scikit-Learn-and-TensorFlow"],
    reverse: true
    }
];

return (
    <section
    id="projects"
    className="projects-section"
    >
    <h2>Projects</h2>

    {projects.map((project) => (
        <div
        key={project.title}
        className={`project-card ${
            project.reverse
            ? "reverse"
            : ""
        }`}
        >
        <div className="project-image">
            <img
            src={project.image}
            alt={project.title}
            />
        </div>

        <div className="project-content">
            <h3>{project.title}</h3>

            <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            >
            GitHub Repository
            </a>

            <ul>
            {project.description.map(
                (item) => (
                <li key={item}>
                    {item}
                </li>
                )
            )}
            </ul>

            <div className="technologies">
            <strong>
                Technologies:
            </strong>

            <p>
                {project.technologies.join(
                " • "
                )}
            </p>
            </div>
        </div>
        </div>
    ))}
    </section>
);
}

export default Projects;