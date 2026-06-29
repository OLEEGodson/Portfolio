import { developer } from "../data/Portfolio";
import logo from "../assets/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          <img src={logo} alt="portfolio logo" className="footer__logo-img" />
        </span>

        <p className="footer__copy">
          ©{year} {developer.name}. Built With React
        </p>

        <div className="footer__links">
          <a
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Github
          </a>

          <a
            href={developer.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>

          <a href={`mailto: ${developer.email}`} className="footer__link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
