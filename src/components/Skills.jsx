import {skills} from "../data/portfolio.json";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-clay w-full mx-auto px-4 sm:px-8 md:px-10 py-10 text-typo mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="font-extrabold text-3xl sm:text-4xl mb-6 tracking-tight"
      >
        <span className="skills-clay-pill">Skills</span>
      </motion.h2>

      <motion.ul
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.1, duration: 0.4}}
        viewport={{once: true}}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4"
      >
        {skills.map((s, index) => (
          <li key={index} className={`skill-chip ${s.accent}`}>
            {s.skill}
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
