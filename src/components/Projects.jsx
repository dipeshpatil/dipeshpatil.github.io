import {projects} from "../data/portfolio.json";
import {motion} from "framer-motion";

/*
  ------------------------------
  Neue‑Brutalist Projects Section
  ------------------------------
  – Skill tags, description blocks, external links
  – Sharp card layout with strong shadows
*/

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full mx-auto px-4 sm:px-8 md:px-10 py-10 bg-secondary text-typo border-4 border-black rounded-none shadow-[8px_8px_0_rgba(0,0,0,1)] mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
      >
        <span className="inline-block bg-primary px-3 py-1 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] rounded-none">
          Projects
        </span>
      </motion.h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1, type: "spring", stiffness: 200}}
            viewport={{once: true}}
            className="border-4 border-black rounded-none p-5 bg-primary shadow-[6px_6px_0_rgba(0,0,0,1)]"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>

            <ul className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((s, i) => (
                <li
                  key={i}
                  className={`text-sm px-3 py-1 ${s.accent} border-2 border-black rounded-none shadow-[2px_2px_0_rgba(0,0,0,1)]`}
                >
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
                    className="inline-block text-sm font-bold px-4 py-2 bg-accent border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] rounded-none hover:scale-105 transition-transform"
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
