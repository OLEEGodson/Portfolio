import { developer } from "../data/Portfolio";
import heroImage from "../assets/hero.png";

function Hero() {
  function scrollToProjects(e) {
    e.preventDefault();
    document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact(e) {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__label">
          <span className="hero__label-line" />
          Front-End Developer. Uyo, Nigeria
        </p>

        <h1 className="hero__name">
          {developer.name.split(" ").map((word, i) => (
            <span key={i} className="hero__name-word">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero__tagline">{developer.tagline}</p>

        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn--primary"
            onClick={scrollToProjects}
          >
            View Work
          </a>

          <a
            href="#contact"
            className="btn btn--ghost"
            onClick={scrollToContact}
          >
            {" "}
            Get In Touch
          </a>
        </div>

        <div className="hero__media">
          <img
            src={heroImage}
            alt="Develper Portrait"
            className="hero__image"
          />
        </div>

        <div className="hero__scroll-hint">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-label">Scroll</span>
        </div>
      </div>
      <span className="hero__bg-text" aria-hidden="true">
        {developer.name.split(" ")[0]}
      </span>
    </section>
  );
}

export default Hero;
