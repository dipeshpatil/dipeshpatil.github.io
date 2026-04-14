import {experience} from "../data/portfolio.json";
import {motion} from "framer-motion";

const experiences = experience.reverse();

const Experience = () => {
  return (
    <section
      id="experience"
      className="exp-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">Career</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-white">
          Experience
        </h2>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.08, duration: 0.4}}
            viewport={{once: true}}
            className="exp-glass-card"
          >
            <h3 className="text-xl font-bold text-white leading-relaxed">
              <span className={`exp-company-badge ${exp.accentColor}`}>
                {exp.company}
              </span>{" "}
              <span className="text-slate-300">— {exp.role}</span>
            </h3>

            <div className="mt-2 font-medium text-sm text-slate-400">
              {exp.duration}
            </div>

            <p className="mt-2 text-slate-300/80 text-sm sm:text-base">
              {exp.description}
            </p>

            {exp.bullets &&
              exp.bullets.map((bullet, i) => (
                <span className="exp-glass-bullet" key={i}>
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
