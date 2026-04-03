import { projects } from "../../data/projects";
import { Sunburst } from "../Sunburst/Sunburst";
import "./projects.css";

const CaseStudies = () => {
    return (
        <section className="projects">
            <div className="section-header-projects">
                <Sunburst />
                <div className="header-content">
                    <h2 className="section-title">CASE STUDY</h2>
                    <p className="section-description">
                        A selection of projects where I've designed and developed scalable, 
                        high-performance applications, focusing on clean architecture, 
                        performance, and real-world impact.
                    </p>
                </div>
            </div>

            <div className="project-grid">
                {projects.map((proj, i) => (
                    <article key={i} className={`project-card ${i === 0 ? "featured" : ""}`}>
                        <div className="card-image-wrapper">
                            <img src={proj.image} alt={proj.title} className="card-image" />
                            <div className="card-overlay"></div>
                        </div>
                        <div className="card-content">
                            <span className="card-category">{proj.category || "Web Design"}</span>
                            <h3 className="card-title">{proj.title}</h3>
                            <a href="#" className="card-link">
                                See Details
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 13L13 3M13 3H4M13 3V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            {proj.award && <span className="award-badge">{proj.award}</span>}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;