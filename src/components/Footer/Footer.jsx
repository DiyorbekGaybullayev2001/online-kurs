import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footers">
        <span className="footer-text">
          &copy; {new Date().getFullYear()} All rights reserved <a href="https://www.limsa.uz/en" className="limsa">Limsa</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
