import {skills} from "../data/portfolio.json";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">Tech Stack</span>
        <h2 className="font-extrabold text-3xl sm:text-4xl mb-6 tracking-tight text-white">
          Skills
        </h2>
      </motion.div>

      <motion.ul
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.1, duration: 0.5}}
        viewport={{once: true}}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3"
      >
        {skills.map((s, index) => (
          <motion.li
            key={index}
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{delay: index * 0.03, duration: 0.3}}
            viewport={{once: true}}
            className={`skill-chip ${s.accent}`}
          >
            {s.skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
