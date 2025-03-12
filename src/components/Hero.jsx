const Hero = () => {
  return (
    <section className="bg-primary p-8 text-center pt-28">
      <h1 className="font-bold p-2 inline-block">
        <span className="text-9xl roboto-slab-hero">
          <span className="text-orange-500">न</span>
          <span className="text-white">म</span>
          <span className="text-green-600">स्ते</span>
        </span>
        <br />
        <br />
        <span className="text-5xl roboto-slab-thin">I&apos;m&nbsp;</span>
        <span className="text-5xl skill-dp28 roboto-slab-hero">DP28</span>
        <br />
        <br />
      </h1>
      <p className="text-lg text-center mt-4 text-gray-700 dark:text-gray-100">
        I believe life is a lot like <span className="hero-js">JS</span>
        —sometimes <span className="hero-unpredictable">unpredictable</span>
        &nbsp;occasionally{" "}
        <span className="hero-asynchronous">asynchronous</span> but always worth{" "}
        <span className="hero-console-log">console logging</span>
      </p>
      <br />
      <div className="mt-4 flex justify-center items-center space-x-4">
        <a
          href="mailto:dipeshpatil.contact@gmail.com"
          className="button-contact"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
