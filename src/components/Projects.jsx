import { useState } from "react";
import { projects } from "../data/Portfolio";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Image */}
      <div className="project-card__img-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__img"
          loading="lazy"
        />
        <div className="project-card__img-overlay" />
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc"> {project.description}</p>

        {/* Tags */}
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {" "}
              {tag}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="project-card__links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--primary"
          >
            Live Site
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--primary"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <p className="section__label">Projects</p>
        <h2 className="section__heading"> Things I've built.</h2>

        <div className="projects__grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* show more/less toggle */}
        {projects.length > 2 && (
          <div className="projects__more">
            <button
              className="btn btn--ghost"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "show less" : `Show All ${projects.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
