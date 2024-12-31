import {projects} from "../portfolio.json";

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-secondary">
      <h2 className="text-3xl font-bold mb-4 section-font">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
          <ul className="mt-1 list-none flex flex-wrap gap-1">
            {project.skills.map((s, index) => (
              <li
                key={index}
                className={`${s.accent} border-2 border-black dark:border-white`}
              >
                {s.skill}
              </li>
            ))}
          </ul>
          <p className="project-desc mt-2">{project.description}</p>
          <h3 className="text-xl font-semibold mt-2">Links:</h3>
          {project.links &&
            project.links.map((l, idx) => (
              <a
                key={idx}
                target="_blank"
                href={l.link}
                className="project-link"
              >
                {l.text}
              </a>
            ))}
        </div>
      ))}
    </section>
  );
};

export default Projects;
