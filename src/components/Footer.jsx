const Footer = () => {
  return (
    <footer className="bg-secondary relative w-full text-center py-6 text-typo border-t-8 border-black shadow-[0_-6px_0_rgba(0,0,0,1)]">
      <div className="absolute left-4 bottom-4 w-6 h-6 bg-accent border-2 border-black rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] rotate-2 hidden sm:block" />
      <div className="absolute right-4 top-4 w-4 h-4 bg-accent border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] -rotate-3 hidden sm:block" />

      <p className="text-sm sm:text-base font-medium">
        <span className="text-primary">&copy;</span>
        <span className="">&nbsp;{new Date().getFullYear()}&nbsp;</span>
        <span className="skill-brand roboto-slab-hero font-bold">
          DP28
        </span>{" "}
        &nbsp;— All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
