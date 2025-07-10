import {skills} from "../portfolio.json";
import {motion} from "framer-motion";

/*
  ------------------------------
  Neue‑Brutalist Skills Section
  ------------------------------
  – Big chunky skill chips
  – Grid layout with harsh contrast
  – Responsive + animated entrance
*/

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full mx-auto px-4 sm:px-8 md:px-10 py-10 bg-primary text-black border-4 border-black rounded-none shadow-[8px_8px_0_0_rgba(0,0,0,1)] mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="font-extrabold text-3xl sm:text-4xl mb-6 tracking-tight"
      >
        <span className="inline-block bg-secondary px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none">
          Skills
        </span>
      </motion.h2>

      <motion.ul
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.1, duration: 0.4}}
        viewport={{once: true}}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
      >
        {skills.map((s, index) => (
          <li
            key={index}
            className={`text-sm sm:text-base font-semibold text-center px-3 py-2 ${s.accent} border-4 border-black rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}
          >
            {s.skill}
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
