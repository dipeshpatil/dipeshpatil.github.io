import {greetings} from "../data/greetings.json";
import TypewriterHero from "./TypewriterHero";

const SHOW_TYPEWRITER = false;

const Hero = () => {
  return (
    <section className="hero-clay relative w-full max-w-full px-4 sm:px-8 md:px-10 py-24 text-center text-typo overflow-hidden">
      <div className="hero-clay-blob hero-clay-blob--lg absolute top-8 left-8 hidden sm:block" />
      <div className="hero-clay-blob hero-clay-blob--sm absolute bottom-8 right-8 hidden sm:block" />

      {SHOW_TYPEWRITER && (
        <h1 className="inline-block p-4">
          <TypewriterHero
            greetings={greetings}
            langs={Object.keys(greetings)}
          />
        </h1>
      )}

      <p className="text-2xl leading-loose mt-6 text-typo px-2 sm:px-0">
        I believe life is a lot like{" "}
        <span className="hero-js font-semibold">JS</span>—sometimes{" "}
        <span className="hero-unpredictable font-semibold">unpredictable</span>,
        occasionally{" "}
        <span className="hero-asynchronous font-semibold">asynchronous</span>,
        but always worth{" "}
        <span className="hero-console-log font-semibold">console logging</span>.
      </p>

      <div className="mt-10 flex justify-center">
        <a
          href="mailto:dipeshpatil.contact@gmail.com"
          className="hero-clay-btn text-3xl font-bold"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
