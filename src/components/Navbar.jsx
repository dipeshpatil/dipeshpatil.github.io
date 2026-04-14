import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const links = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Education", href: "#education"},
  {label: "Experience", href: "#experience"},
  {label: "Projects", href: "#projects"}
];

const USE_GITHUB_PROFILE = import.meta.env.VITE_APP_USE_GITHUB_DATA === "true";

if (USE_GITHUB_PROFILE) {
  links.push(
    {label: "Repos", href: "#github-repos"},
    {label: "Stats", href: "#github-stats"},
    {label: "Profile", href: "#github-profile"}
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-glass sticky top-0 left-0 w-full z-50 py-3 px-4">
      <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-extrabold nav-glass-brand roboto-slab-hero tracking-tight">
          DP28
        </h1>

        <ul className="flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-glass-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex md:hidden justify-between items-center">
        <h1 className="text-lg font-extrabold nav-glass-brand roboto-slab-hero">
          DP28
        </h1>
        <button
          className="nav-glass-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{type: "spring", stiffness: 500, damping: 40}}
            className="flex flex-col gap-2 mt-4 md:hidden"
          >
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-glass-link nav-glass-link--mobile"
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
