import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary z-50 p-4 flex justify-between items-center">
      <h1 className="text-2xl skill-dp28 roboto-slab-hero">DP28</h1>
      <button
        className="block md:hidden text-3xl -mt-2 -ml-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex md:space-x-4 roboto-slab-hero flex-col md:flex-row space-y-2 md:space-y-0 absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-secondary md:bg-transparent z-10 p-4 md:p-0`}
      >
        <li>
          <a href="#about" className="nav-link ">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#education" className="nav-link">
            Education
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
