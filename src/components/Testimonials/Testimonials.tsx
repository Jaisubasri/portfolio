import "./Testimonals.css";
import cross from "../../assets/case-study-cross.svg";
import female_avatar from "../../assets/female_avatar.jpeg";
import male_avatar from "../../assets/male_avatar.jpeg";
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
                        <img src={female_avatar} alt="profile 1" />
                    </div>
                </div>
                <div className="feedback-member-section">
                    <div>
                        <h4>Ankit Jain</h4>
                        <p className="sub">Mentor, Cleo Software Solutions</p>
                        <img src={underline} style={{ paddingTop: "0.8rem" }} alt="underline" />
                    </div>
                    <div className="image-stack">
                        <img src={male_avatar} alt="profile 1" />
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