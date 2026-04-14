import {projects} from "../data/portfolio.json";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="proj-clay w-full mx-auto px-4 sm:px-8 md:px-10 py-10 text-typo mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
      >
        <span className="proj-clay-pill">Projects</span>
      </motion.h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1, type: "spring", stiffness: 200}}
            viewport={{once: true}}
            className="proj-clay-card"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>

            <ul className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((s, i) => (
                <li key={i} className={`proj-skill-chip ${s.accent}`}>
                  {s.skill}
                </li>
              ))}
            </ul>

            <p className="text-typo mb-3">{project.description}</p>

            {project.links && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-clay-link"
                  >
                    {l.text}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
