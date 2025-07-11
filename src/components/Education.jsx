import {education} from "../portfolio.json";
import {motion} from "framer-motion";

/*
  ------------------------------
  Neue‑Brutalist Education Timeline
  ------------------------------
  – Bold vertical timeline with chunky connectors
  – Flat design, sharp edges, heavy emphasis
*/

const Education = () => {
  return (
    <section
      id="education"
      className="w-full mx-auto px-4 sm:px-8 md:px-10 py-10 bg-secondary text-black border-4 border-black rounded-none shadow-[8px_8px_0_rgba(0,0,0,1)] mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
      >
        <span className="inline-block bg-accent px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none">
          Education
        </span>
      </motion.h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: index * 0.1, type: "spring", stiffness: 180}}
            viewport={{once: true}}
            className="relative pl-6 border-l-4 border-black"
          >
            <div className="absolute -left-[13px] top-1 w-5 h-5 bg-accent border-4 border-black rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)]"></div>
            <h3 className="text-xl sm:text-2xl font-bold edu-uni">
              {edu.university}
            </h3>
            <h4 className="text-lg font-semibold edu-college">{edu.college}</h4>
            <p className="edu-degree text-base">
              <span className="font-medium">{edu.degree}</span> | Grade:{" "}
              <span className="font-medium">{edu.cgpa}</span>
            </p>
            <p className="edu-desc text-sm sm:text-base text-gray-800">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
