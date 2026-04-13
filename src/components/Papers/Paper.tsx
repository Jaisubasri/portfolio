import { experience } from "../../data/papers";
import { Sunburst } from "../Sunburst/Sunburst";
import "./papers.css";

const Paper = () => {
    return (
        <section className="experience">
            <div className="section-header-experience">
                <Sunburst />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{flex: "1"}}>
                        <p style={{ fontSize: "50px", fontWeight: "700", color: "#2D2F37", paddingBottom: "1.5rem" }}>PAPERS PUBLISHED</p>
                        <p style={{ paddingBottom: "1.5rem" }}>From exploratory data analysis to predictive modeling, my work reflects a strong focus on <br></br>uncovering insights, statistical rigor, and translating complex data into actionable business intelligence.</p>
                    </div>
                </div>
            </div>

            <div className="exp-list">
                {experience.map((item, index) => (
                    <div key={index} className="exp-card" style={item.style}>
                        <div className="exp-left">
                            <span className="index" style={item.indexstyle}>{index + 1}</span>
                            <div>
                                <p style={{ fontSize: "25px", fontWeight: "700" }}>{item.role}</p>
                                <p>{item.company}</p>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="divider" style={item.style1}></div>
                            <a href={item.link} className="paper-link">
                            <span className="duration" style={{ fontWeight: "500" }}>Details - Click here</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Paper;