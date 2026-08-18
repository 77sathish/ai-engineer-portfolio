import "../styles/Experience.css";

import company1 from "../assets/company1.png";
import company2 from "../assets/company2.jpg";

function Experience() {
return (
    <section
    id="experience"
    className="experience-section"
    >
    <h2>Experience</h2>

    <div className="experience-container">

        {/* FlyRank.AI */}

        <div
    id="flyrank"
    className="experience-card"
>
        <div className="experience-header">

            <img
            src={company1}
            alt="FlyRank.AI"
            className="company-logo"
            />

            <div className="experience-title">
            <h3>
                Machine Learning Intern
            </h3>

            <h4>FlyRank.AI</h4>
            </div>

            <span className="experience-duration">
            Jun 2026 - Present
            </span>

        </div>

        <ul>
            <li>
            Building NLP pipelines for semantic search,
            keyword extraction, and content relevance
            scoring.
            </li>

            <li>
            Developing machine learning solutions for
            search-ranking optimization.
            </li>

            <li>
            Researching SERP feature optimization,
            including featured snippets and structured
            data.
            </li>

            <li>
            Processing and analyzing structured and
            unstructured data.
            </li>

            <li>
            Building Python data pipelines and feature
            engineering workflows.
            </li>

            <li>
            Collaborating with engineering teams using
            Git and Python.
            </li>

            <li>
            Technologies: Python, NLP, Scikit-learn,
            Search APIs, Data Pipelines, Git.
            </li>
        </ul>
        </div>

        {/* iPlairan.AI */}

        <div
        id="iplairani.ai"
        className="experience-card"
        >

        <div className="experience-header reverse">

            <span className="experience-duration">
            Jun 2026 - Aug 2026
            </span>

            <div className="experience-title">
            <h3>
                AI Engineer Intern
            </h3>

            <h4>iPlairan.AI</h4>
            </div>

            <img
            src={company2}
            alt="iPlairan.AI"
            className="company-logo"
            />

        </div>

        <ul>
            <li>
            Built an AI Knowledge Application using
            Retrieval-Augmented Generation (RAG).
            </li>

            <li>
            Developed multi-step AI agents using
            LangChain.
            </li>

            <li>
            Designed document chunking, embedding, and
            vector retrieval pipelines.
            </li>

            <li>
            Engineered prompts and retrieval strategies
            to improve answer quality.
            </li>

            <li>
            Built semantic search pipelines integrating
            SQL and vector databases.
            </li>

            <li>
            Optimized inference using INT8 and INT4
            quantization.
            </li>

            <li>
            Worked collaboratively using Git for
            version control.
            </li>

            <li>
            Technologies: Python, LangChain, RAG,
            LLMs, Prompt Engineering, Vector Databases,
            SQL, Quantization, Git.
            </li>

        </ul>

        </div>

    </div>
    </section>
);
}

export default Experience;