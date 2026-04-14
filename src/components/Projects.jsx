import {projects} from "../data/portfolio.json";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="proj-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">Portfolio</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-white">
          Projects
        </h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.08, duration: 0.4}}
            viewport={{once: true}}
            className="proj-glass-card"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              {project.name}
            </h3>

            <ul className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((s, i) => (
                <li key={i} className={`proj-skill-chip ${s.accent}`}>
                  {s.skill}
                </li>
              ))}
            </ul>

            <p className="text-slate-300/80 mb-3 text-sm sm:text-base">
              {project.description}
            </p>

            {project.links && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-glass-link"
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
