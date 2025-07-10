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
      <div className="p-4">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
