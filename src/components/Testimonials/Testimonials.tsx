import "./Testimonals.css";
import cross from "../../assets/case-study-cross.svg";
import arjeet from "../../assets/arjeet.jpeg";
import mahesh from "../../assets/mahesh.jpeg";
import underline from "../../assets/feedback-member-wave-underline.svg";
import waves from "../../assets/feedback-member-waves.svg";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1rem" }}>
                <p className="testimonals-heading">CLIENT FEEDBACK</p>
                <img src={cross} alt="Cross" style={{ height: "40px", width: "40px" }} />
            </div>
            <section >
                <p className="quote">
                    "An exceptional data analyst who transforms complex datasets into actionable insights with meticulous attention to detail, powerful visualizations, and profound business impact."
                </p>
                <div className="feedback-member-section">
                    <div>
                        <h4>Arjeet Samal</h4>
                        <p className="sub">Professor, IMSc</p>
                        <img src={underline} style={{ paddingTop: "0.8rem" }} alt="underline" />
                    </div>
                    <div className="image-stack">
                        <img src={arjeet} alt="profile 1" />
                    </div>
                </div>
                <div className="feedback-member-section">
                    <div>
                        <h4>Mahesh Rajasekharan</h4>
                        <p className="sub">President and CEO, Cleo Software Solutions</p>
                        <img src={underline} style={{ paddingTop: "0.8rem" }} alt="underline" />
                    </div>
                    <div className="image-stack">
                        <img src={mahesh} alt="profile 1" />
                    </div>
                </div>
                <div style={{ width: "40%", justifyContent: "center", alignItems: "center", display: "flex" }}>

                    <img src={waves} style={{ height: "100px", width: "100px" }} alt="waves" />
                </div>
            </section>
        </div>
    );
};

export default Testimonials;