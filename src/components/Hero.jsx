import {greetings} from "../data/greetings.json";
import TypewriterHero from "./TypewriterHero";
import {motion} from "framer-motion";

const SHOW_TYPEWRITER = false;

const Hero = () => {
  return (
    <section className="hero-glass relative w-full max-w-full px-4 sm:px-8 md:px-10 py-28 text-center overflow-hidden">
      {SHOW_TYPEWRITER && (
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="inline-block p-4"
        >
          <TypewriterHero
            greetings={greetings}
            langs={Object.keys(greetings)}
          />
        </motion.h1>
      )}

      <motion.p
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, delay: 0.1}}
        className="text-xl sm:text-2xl leading-relaxed mt-6 text-slate-300 px-2 sm:px-0 max-w-3xl mx-auto"
      >
        I believe life is a lot like{" "}
        <span className="hero-glass-keyword hero-js font-semibold">JS</span>—sometimes{" "}
        <span className="hero-glass-keyword hero-unpredictable font-semibold">unpredictable</span>,
        occasionally{" "}
        <span className="hero-glass-keyword hero-asynchronous font-semibold">asynchronous</span>,
        but always worth{" "}
        <span className="hero-glass-keyword hero-console-log font-semibold">console logging</span>.
      </motion.p>

      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.3}}
        className="mt-10 flex justify-center"
      >
        <a
          href="mailto:dipeshpatil.contact@gmail.com"
          className="hero-glass-btn text-lg sm:text-xl"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
