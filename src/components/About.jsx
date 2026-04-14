import {about} from "../data/portfolio.json";
import {motion} from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="about-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">About</span>
        <h2 className="font-extrabold text-3xl sm:text-4xl mb-6 leading-none tracking-tight text-white">
          About Me
        </h2>
      </motion.div>

      <motion.p
        initial={{opacity: 0, y: 15}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.1, duration: 0.5}}
        viewport={{once: true}}
        className="text-base sm:text-lg leading-relaxed text-slate-300/90"
      >
        {about}
      </motion.p>
    </section>
  );
};

export default About;
