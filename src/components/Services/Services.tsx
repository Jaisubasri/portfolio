import { services } from "../../data/services";
import { FaArrowLeft } from "react-icons/fa6";
import "./services.css";
import { FaArrowRight } from "react-icons/fa6";


const Services = () => {
    return (
        <section className="services">
            <div style={{ padding: "2rem 8rem 2rem" }}>
                <span>
                    <p style={{ color: "#2D2F37", fontSize: "13px", fontWeight: "bold" }}>&nbsp;&nbsp;_______&nbsp;&nbsp;&nbsp;MY SERVICES?</p>
                </span>
                <div className="section-header">
                    <div style={{ marginTop: "1%", fontSize: "27px" }}>
                        <p style={{ fontSize: "50px", fontWeight: "700", color: "#2D2F37" }}>WHAT I'M</p>
                        <p style={{ fontSize: "50px", fontWeight: "700", color: "#2D2F37" }}>OFFERING</p>
                    </div>
                    <div>
                        <p className="section-header-description">I transform data into actionable insights with a strong focus on clean analysis, meaningful visualizations, and real-world business impact.</p>
                    </div>
                    <button className="primary"><p style={{ fontSize: "20px", color: "#ffffff" }}>All Service</p></button>
                </div>
            </div>
            <div className="section-content">
                <div className="section-content-left">
                    <div style={{ alignItems: "center", justifyContent: "center" }}>
                        <div className="arrow-background">
                            <FaArrowLeft style={{ fontSize: "25px", color: "#ffffff" }} />
                        </div>
                    </div>
                    <div style={{ height: "1.3px", minWidth: "70px", backgroundColor: "#2D2F37" }}></div>
                    <div>
                        <p>SCROLL DOWN</p>
                    </div>
                </div>
                <div>
                    <div className="service-grid">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="card-flip-container"
                            >
                                <div className="card-flip-wrapper">
                                    {/* Front of card */}
                                    <div className={`card ${index === 0 ? "active" : ""}`}>
                                        <img src={item.img} alt="Service Icon" style={item.style} />
                                        <h3 style={{ paddingTop: "2.5rem", fontSize: "25px", fontFamily: "Bahnschrift Light" }}>{item.title}</h3>
                                        <p style={{ paddingTop: "1rem" }}>{item.category}</p>
                                        <div style={{ display: "flex", alignItems: "center", paddingTop: "3rem" }}>
                                            <p>HOVER TO FLIP</p>
                                            <FaArrowRight style={{ paddingTop: "0.5rem", paddingLeft: "0.5rem", fontSize: "23px" }} />
                                        </div>
                                    </div>
                                    {/* Back of card */}
                                    <div className={`card card-back ${index === 0 ? "active" : ""}`}>
                                        <p style={{ fontSize: "15px", lineHeight: "1.8" }}>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;