import "./hero.css";
import profile from "../../assets/profile.png";
import resume from "../../assets/Harinethesh_Resume.pdf";
import { FaCheck } from "react-icons/fa6";
import HeroFooter from "./HeroFooter";
import { MdArrowDownward } from "react-icons/md";

const Hero = () => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Harinethesh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>

            <section className="hero">
                <div className="hero-left">
                    <h1 style={{ marginBottom: "1rem", color: "#2D2F37" }}>
                        Hello! I’m <span style={{ color: "#2D2F37" }}>Harinethesh</span>
                    </h1>
                    <div className="job-title">
                        <div className="subtitle-line"></div>
                        <p className="subtitle">Software Developer</p>
                    </div>
                    <p className="hero-description">
                        Hello! I’m Harinethesh — <b>a software engineer, system thinker, and builder of clean, scalable solutions</b>, driven by logic and curiosity.
                    </p>

                    <ul className="feature-list">
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "0.5rem" }}>
                            <FaCheck style={{ fontSize: "15px" }} />
                            <li>Building scalable web apps with React & APIs</li>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "0.5rem" }}>
                            <FaCheck style={{ fontSize: "15px" }} />
                            <li>Writing clean, reusable, high-performance code</li>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "0.5rem" }}>
                            <FaCheck style={{ fontSize: "15px" }} />
                            <li>Strong in problem-solving and system design</li>
                        </div>
                    </ul>

                    <div className="buttons">
                        <button className="primary" style={{ backgroundColor: "#2D2F37", fontSize: "17px" }} onClick={scrollToContact}>Let's Talk</button>
                        <button className="secondary" style={{ fontSize: "18px" }} onClick={downloadResume}>
                            <div className="button-text-wrapper">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className="button-text">Download CV</span>
                                    <MdArrowDownward style={{ paddingLeft: "0.3rem", fontSize: "30px" }} />
                                </div>
                                <span className="button-underline"></span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="dot-2"></div>
                    <div className="decorations">
                        <div className="decor-circle" aria-label="hello-circle">
                            <span>Hello</span>
                        </div>
                        <svg className="dash-svg" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="hero-circle-clip">
                                    <circle cx="130" cy="130" r="90" />
                                </clipPath>
                            </defs>
                            <line x1="18" y1="18" x2="175" y2="205" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            <line x1="18" y1="18" x2="175" y2="205" stroke="#fff" strokeWidth="2" strokeLinecap="round" clipPath="url(#hero-circle-clip)" />
                        </svg>
                    </div>

                    <div className="portrait">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="hero-right-designs">
                        <div className="plus"></div>
                        <div className="dot-top"></div>
                        <div className="dot-1"></div>
                        <svg className="arc" width="70" height="130" viewBox="0 0 70 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 20 8 C 55 25, 62 65, 55 90 C 48 112, 30 122, 18 128" stroke="#a0a098" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                        </svg>
                        <div className="dot-bottom"></div>
                    </div>
                </div>
            </section>
            <HeroFooter />
        </div>
    );
};

export default Hero;