import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer-content">
      <footer>
        <h4>Connect with me here</h4>
        <div className="footer-social-media">
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
        </div>
        <p>
          I don't own any videos copyright owns to the respective content
          creators.
        </p>
        <p>Just used it for educational purpose</p>
      </footer>
    </div>
  );
}
