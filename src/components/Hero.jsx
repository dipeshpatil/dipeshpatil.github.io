const Hero = () => {
  return (
    <section className="bg-primary relative w-full max-w-full px-4 sm:px-8 md:px-10 py-24 text-center text-typo border-b-8 border-black shadow-[0_6px_0_0_rgba(0,0,0,1)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-6 left-6 w-16 h-16 bg-secondary border-4 border-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] rotate-3 hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-10 h-10 bg-secondary border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] -rotate-2 hidden sm:block" />

      {/* Name Block */}
      <h1 className="inline-block p-4">
        <span className="text-9xl sm:text-9xl font-extrabold leading-tight tracking-tight roboto-slab-hero">
          <span className="text-orange-500">न</span>
          <span className="text-blue-600">म</span>
          <span className="text-green-600">स्ते</span>
        </span>
        <br />
        {/* <span className="text-3xl sm:text-5xl mt-4 inline-block font-light roboto-slab-thin">
          I&apos;m&nbsp;
          <span className="skill-dp28 font-extrabold">DP28</span>
        </span> */}
      </h1>

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
