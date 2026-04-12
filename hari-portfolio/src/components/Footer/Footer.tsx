import "./footer.css";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Gmail",
      url: "mailto:hnethesh@gmail.com",
      Icon: MdMail
    },
    {
      name: "GitHub",
      url: "https://github.com/BlackDeViL1906",
      Icon: FaGithub
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harinethesh/",
      Icon: FaLinkedin
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_hx_nxtxh._/",
      Icon: FaInstagram
    }
  ];

  return (
    <footer className="site-footer">
      <div className="social-links">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="social-link"
          >
            <link.Icon className="social-icon" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <p>CopyRight © 2026</p>
    </footer>
  );
};

export default Footer;
