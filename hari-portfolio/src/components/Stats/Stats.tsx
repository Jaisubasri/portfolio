import "./Stats.css";
import checklist from "../../assets/checklist.png";
import client from "../../assets/clients.png";
import team from "../../assets/team.png";
import workingHours from "../../assets/working-hours.png";

const Stats = () => {
    const stats = [
        { img: checklist, value: "6", label: "Project Completed", style: { width: "54px", height: "54px" }, borderstyle: { border: "1px solid #969698", borderLeft: "none", borderRight:"none" } },
        { img: client, value: "432", label: "Satisfied Clients", style: { width: "64px", height: "64px" }, borderstyle: { border: "1px solid #969698" } },
        { img: team, value: "11", label: "Team Members", style: { width: "64px", height: "64px" }, borderstyle: { border: "1px solid #969698", borderLeft: "none" } },
        { img: workingHours, value: "2790", label: "Working Hours", style: { width: "54px", height: "54px" }, borderstyle: { border: "1px solid #969698", borderLeft: "none", borderRight:"none" } },
    ];

    return (
        <section className="stats">
            {stats.map((item, idx) => (
                <div className="stat" key={idx} style={item.borderstyle}>
                    <img src={item.img} style={item.style}/>
                    <p style={{fontSize:"2rem", fontWeight:"600"}}>{item.value}</p>
                    <span>{item.label}</span>
                </div>
            ))}
        </section>
    );
};

export default Stats;