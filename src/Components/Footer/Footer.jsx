import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer-content">
      <footer>
        <h4>Connect with me here</h4>
        <div className="footer-social-media">
          <a href="https://www.instagram.com/vvaibhav_desai/"><i><FaInstagram  className="fa-icons" /></i></a>
          <a href="https://www.linkedin.com/in/vvaibhavdesai/"><i><FaLinkedin className="fa-icons" /></i></a>
          <a href="https://twitter.com/vvaibhav_desai"><i ><FaTwitter className="fa-icons"/></i></a>
        </div>
      </footer>
    </div>
  );
}
