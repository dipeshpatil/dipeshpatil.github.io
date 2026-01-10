import {greetings} from "../data/greetings.json";
import TypewriterHero from "./TypewriterHero";

const SHOW_TYPEWRITER = false;

const Hero = () => {
  return (
    <section className="bg-primary relative w-full max-w-full px-4 sm:px-8 md:px-10 py-24 text-center text-typo border-b-8 border-black shadow-[0_6px_0_0_rgba(0,0,0,1)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-6 left-6 w-16 h-16 bg-accent border-4 border-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] rotate-3 hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-10 h-10 bg-accent border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] -rotate-2 hidden sm:block" />

      {/* Name Block */}
      {SHOW_TYPEWRITER && (
        <h1 className="inline-block p-4">
          <TypewriterHero
            greetings={greetings}
            langs={Object.keys(greetings)}
          />
        </h1>
      )}

      {/* Subtext */}
      <p className="text-2xl leading-loose mt-6 text-typo px-2 sm:px-0">
        I believe life is a lot like{" "}
        <span className="hero-js font-semibold">JS</span>—sometimes{" "}
        <span className="hero-unpredictable font-semibold">unpredictable</span>,
        occasionally{" "}
        <span className="hero-asynchronous font-semibold">asynchronous</span>,
        but always worth{" "}
        <span className="hero-console-log font-semibold">console logging</span>.
      </p>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center">
        <a
          href="mailto:dipeshpatil.contact@gmail.com"
          className="bg-secondary border-4 text-3xl border-black px-6 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
