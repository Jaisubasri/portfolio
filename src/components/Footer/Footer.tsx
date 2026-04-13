import "./footer.css";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Gmail",
      url: "mailto:jaisu17k@gmail.com",
      Icon: MdMail
    },
    {
      name: "GitHub",
      url: "https://github.com/Jaisubasri",
      Icon: FaGithub
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaisubasri-karthikeyan-648a81259/",
      Icon: FaLinkedin
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jaisu_karthik/",
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
