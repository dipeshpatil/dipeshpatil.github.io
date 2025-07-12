import {about} from "../data/portfolio.json";
import {motion} from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="p-4 relative w-full mx-auto px-4 sm:px-8 md:px-10 py-10 bg-secondary text-typo border-4 border-black rounded-none shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden mt-2"
    >
      {/* Decorative accents (hidden on very small screens to prevent clipping) */}
      <div className="hidden xs:block absolute -top-4 -right-4 w-14 xs:w-16 h-14 xs:h-16 bg-accent border-4 border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-2" />
      <div className="hidden xs:block absolute -bottom-4 -left-4 w-8 xs:w-10 h-8 xs:h-10 bg-accent border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] -rotate-3" />

      {/* Heading */}
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="font-extrabold text-3xl sm:text-4xl mb-6 leading-none tracking-tight"
      >
        About&nbsp;
        <span className="inline-block bg-primary text-typo px-2 sm:px-3 py-0.5 sm:py-1 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          Me
        </span>
      </motion.h2>

      {/* Content */}
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
