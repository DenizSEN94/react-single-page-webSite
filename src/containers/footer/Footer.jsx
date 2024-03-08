import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div id="footer" className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in on the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={logo} alt="Gpt-3 Logo" />
          <p>Lorem Ipsun Lorem Ipsun Lorem...</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Get in touch</h4>
          <p>Lorem Ipsun Lorem Ipsun</p>
          <p>0123654789522</p>
          <p>info@info.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2024 &copy;</p>
      </div>
    </div>
  );
};

export default Footer;
