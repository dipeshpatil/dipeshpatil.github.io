import {about} from "../data/portfolio.json";
import {motion} from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="about-clay relative w-full mx-auto px-4 sm:px-8 md:px-10 py-10 text-typo overflow-hidden mt-2"
    >
      <div className="about-clay-blob about-clay-blob--lg hidden sm:block" />
      <div className="about-clay-blob about-clay-blob--sm hidden sm:block" />

      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="font-extrabold text-3xl sm:text-4xl mb-6 leading-none tracking-tight"
      >
        About&nbsp;
        <span className="about-clay-pill">Me</span>
      </motion.h2>

      <motion.p
        initial={{x: -20, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay: 0.05, type: "spring", stiffness: 200, damping: 18}}
        viewport={{once: true}}
        className="text-base sm:text-lg leading-relaxed tracking-wide"
      >
        {about}
      </motion.p>
    </section>
  );
};

export default About;
