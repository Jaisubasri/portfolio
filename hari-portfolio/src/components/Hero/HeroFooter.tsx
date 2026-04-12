import "./hero-footer.css"
import { HiSparkles } from "react-icons/hi2";

const HeroFooter = () => {
    return (
        <div className="hero-footer">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>Web Design</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>Developer</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>API Integration</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>Web Flow</h1>
            </div>
        </div>
    );
};

export default HeroFooter;