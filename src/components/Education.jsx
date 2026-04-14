import {education} from "../data/portfolio.json";
import {motion} from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="edu-clay w-full mx-auto px-4 sm:px-8 md:px-10 py-10 text-typo mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-4xl font-extrabold mb-6 tracking-tight"
      >
        <span className="edu-clay-pill">Education</span>
      </motion.h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: index * 0.1, type: "spring", stiffness: 180}}
            viewport={{once: true}}
            className="edu-timeline-item"
          >
            <div className="edu-timeline-dot" />
            <h3 className="text-xl sm:text-2xl font-bold">{edu.university}</h3>
            <h4 className="text-lg font-semibold edu-college">{edu.college}</h4>
            <p className="edu-degree text-base">
              <span className="font-medium">{edu.degree}</span> | Grade:{" "}
              <span className="font-medium">{edu.cgpa}</span>
            </p>
            <p className="edu-desc text-sm sm:text-base text-typo">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
