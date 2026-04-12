import { experience } from "../../data/experience";
import { Sunburst } from "../Sunburst/Sunburst";
import "./experience.css";
// import expHeaderCircle from "../../assets/exp-header-circle.svg";

const Experience = () => {
    return (
        <section className="experience">
            <div className="section-header-experience">
                <Sunburst />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{flex: "1"}}>
                        <p style={{ fontSize: "50px", fontWeight: "700", color: "#2D2F37", paddingBottom: "1.5rem" }}>MY JOURNEY</p>
                        <p style={{ paddingBottom: "1.5rem" }}>From building responsive user interfaces to designing backend systems, my work reflects a strong focus on <br></br>problem-solving, performance, and creating meaningful digital experiences.</p>
                    </div>
                    {/* <div style={{ flexShrink: 0, }}>
                        <img src={expHeaderCircle} style={{ fill:"#383b43", height:"150px", width:"100px", maxWidth:"100%", transform:"rotate(30deg)" }}/>
                    </div> */}
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
                            <span className="duration" style={{ fontWeight: "500" }}>JOB DURATION - {item.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;