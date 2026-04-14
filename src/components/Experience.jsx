import {experience} from "../data/portfolio.json";
import {motion} from "framer-motion";

const experiences = experience.reverse();

const Experience = () => {
  return (
    <section
      id="experience"
      className="exp-clay w-full mx-auto px-4 sm:px-8 md:px-10 py-10 text-typo mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
      >
        <span className="exp-clay-pill">Experience</span>
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1, type: "spring", stiffness: 200}}
            viewport={{once: true}}
            className="exp-clay-card"
          >
            <h3 className="text-xl font-bold text-typo leading-loose">
              <span className={`exp-company-badge ${exp.accentColor}`}>
                {exp.company}
              </span>{" "}
              - {exp.role}
            </h3>

            <div className="mt-3 font-medium text-sm sm:text-base text-typo">
              {exp.duration}
            </div>

            <p className="mt-2 text-lg sm:text-base text-typo">
              {exp.description}
            </p>

            {exp.bullets &&
              exp.bullets.map((bullet, i) => (
                <span className="exp-clay-bullet" key={i}>
                  {bullet}
                </span>
              ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
