import "./hero-footer.css"
import { HiSparkles } from "react-icons/hi2";

const HeroFooter = () => {
    return (
        <div className="hero-footer">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>Data Analysis</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>AI & ML </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>Dashboard Design</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HiSparkles />
                <h1>Business Intelligence</h1>
            </div>
        </div>
    );
};

export default HeroFooter;