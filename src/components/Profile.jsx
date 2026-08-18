import "../styles/Profile.css";

function Profile() {
const skills = [
    {
    title: "Machine Learning",
    rating: "★★★★★"
    },
    {
    title: "Computer Vision",
    rating: "★★★★★"
    },
    {
    title: "Generative AI",
    rating: "★★★★☆"
    },
    {
    title: "RAG Systems",
    rating: "★★★★☆"
    },
    {
    title: "Problem Solving",
    rating: "★★★★★"
    }
];

return (
    <section id="profile" className="profile-section">
    <p className="profile-label">
        PROFILE
    </p>

    <h2>AI Engineer Profile</h2>

    <p className="profile-description">
        Passionate about building intelligent systems using
        Machine Learning, Computer Vision, Generative AI,
        Retrieval-Augmented Generation, and modern AI
        technologies to solve real-world problems.
    </p>

    <div className="profile-grid">
        {skills.map((skill) => (
        <div
            className="profile-card"
            key={skill.title}
        >
            <h3>{skill.title}</h3>

            <div className="skill-rating">
            {skill.rating}
            </div>
        </div>
        ))}
    </div>
    </section>
);
}

export default Profile;