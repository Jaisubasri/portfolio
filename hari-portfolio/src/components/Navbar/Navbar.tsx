import "./navbar.css";
import { MdArrowOutward } from "react-icons/md";


const Navbar = () => {
  return (
    <header className="site-navbar">
      <div className="brand">it&apos;s me</div>
      <nav className="nav-links">
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdArrowOutward />
          <a href="#home">Home</a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdArrowOutward />
          <a href="#services">Service</a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdArrowOutward />
          <a href="#experience">Experience</a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdArrowOutward />
          <a href="#case-study">Case Study</a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdArrowOutward />
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
