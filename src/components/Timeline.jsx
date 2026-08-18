import "../styles/Timeline.css";

function Timeline() {
const timeline = [
    {
    year: "2025",
    title: "B.Tech Graduation",
    status: "completed",
    link: "#education"
    },

    {
    year: "2026",
    title: "AI Engineer Intern",
    status: "completed",
    link: "#iplairan"
    },

    {
    year: "2026",
    title: "ML Intern",
    status: "current",
    link: "#flyrank"
    },

    {
    year: "Future",
    title: "AI Engineer",
    status: "future"
    }
];

return (
    <section
    id="timeline"
    className="timeline-section"
    >
    <h2>Career Journey</h2>

    <p className="timeline-subtitle">
        Scroll to see the destination →
    </p>

    <div className="timeline-scroll">
        <div className="timeline-line">
        {timeline.map(
            (item, index) => (
            <div
                key={index}
                className="timeline-item"
            >
                {item.link ? (
                <a href={item.link}>
                    <div
                    className={`timeline-dot ${item.status}`}
                    ></div>
                </a>
                ) : (
                <div
                    className={`timeline-dot ${item.status}`}
                ></div>
                )}

                <h3>{item.year}</h3>

                <p>{item.title}</p>
            </div>
            )
        )}
        </div>
    </div>
    </section>
);
}

export default Timeline;