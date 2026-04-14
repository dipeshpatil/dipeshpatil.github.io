import {education} from "../data/portfolio.json";
import {motion} from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="edu-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">Academic</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 tracking-tight text-white">
          Education
        </h2>
      </motion.div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: index * 0.1, duration: 0.4}}
            viewport={{once: true}}
            className="edu-timeline-item"
          >
            <div className="edu-timeline-dot" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {edu.university}
            </h3>
            <h4 className="text-lg font-semibold edu-college">{edu.college}</h4>
            <p className="edu-degree text-base">
              <span className="font-medium">{edu.degree}</span> | Grade:{" "}
              <span className="font-medium text-cyan-400">{edu.cgpa}</span>
            </p>
            <p className="edu-desc text-sm sm:text-base mt-1">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
