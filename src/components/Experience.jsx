import {experience} from "../portfolio.json";
import {motion} from "framer-motion";

const experiences = experience.reverse();

/*
  ------------------------------
  Neue‑Brutalist Experience Timeline
  ------------------------------
  – Animated stacked cards with strong borders
  – Company badge, role, bullets
*/

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full mx-auto px-4 sm:px-8 md:px-10 py-10 bg-primary text-black border-4 border-black rounded-none shadow-[8px_8px_0_rgba(0,0,0,1)] mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
      >
        <span className="inline-block bg-accent px-3 py-1 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] rounded-none">
          Experience
        </span>
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1, type: "spring", stiffness: 200}}
            viewport={{once: true}}
            className="border-4 border-black rounded-none p-5 shadow-[6px_6px_0_rgba(0,0,0,1)] bg-secondary"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              <span
                className={`${exp.accentColor} px-2 py-1 border-4 border-black rounded-none shadow-[2px_2px_0_rgba(0,0,0,1)]`}
              >
                {exp.company}
              </span>{" "}
              - {exp.role}
            </h3>

            <div className="mt-3 font-medium text-sm sm:text-base text-gray-800">
              {exp.duration}
            </div>

            <p className="mt-2 text-sm sm:text-base text-gray-800">
              {exp.description}
            </p>

            {exp.bullets && (
              <ul className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
