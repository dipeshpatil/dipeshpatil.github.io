import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const links = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Education", href: "#education"},
  {label: "Experience", href: "#experience"},
  {label: "Projects", href: "#projects"}
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-secondary border-b-8 border-black z-50 py-3 px-4 shadow-[0_4px_0_rgba(0,0,0,1)]">
      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold skill-brand roboto-slab-hero">
          DP28
        </h1>

        {/* Links */}
        <ul className="flex space-x-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border-2 font-bold border-black px-4 py-2 rounded-none bg-primary text-typo shadow-[4px_4px_0_rgba(0,0,0,1)] hover:scale-105 inline-block hover:text-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden justify-between items-center">
        <h1 className="text-xl font-extrabold skill-brand roboto-slab-hero">
          DP28
        </h1>
        <button
          className="text-3xl font-bold border-black px-2 py-0.5 bg-primary border-2 shadow-[2px_2px_0_rgba(0,0,0,1)] rounded-none text-typo"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{type: "spring", stiffness: 500, damping: 40}}
            className="flex flex-col space-y-3 mt-4 md:hidden"
          >
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="border-2 border-black font-bold px-4 py-2 rounded-none bg-primary text-typo shadow-[4px_4px_0_rgba(0,0,0,1)] inline-block w-full text-center hover:text-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
