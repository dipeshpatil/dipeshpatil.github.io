import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <div className="px-4 pt-3 pb-6 bg-primary">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
