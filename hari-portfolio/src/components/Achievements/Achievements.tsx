import { achievements } from "../../data/achievements";
import "./achievements.css";

const Achievements = () => {
    return (
        <section className="achievements">
            <div className="achievements-header">
                <h2 className="achievements-title">ACHIEVEMENTS</h2>
            </div>

            <div className="achievements-timeline">
                {achievements.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-left">
                            <span className="timeline-date">{item.date}</span>
                        </div>
                        <div className="timeline-right">
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-issuer">{item.issuer}</p>
                            <p className="achievement-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
