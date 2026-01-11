import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import GithubProfile from "./components/GithubProfile";
import GithubRepos from "./components/GithubRepos";
import GithubStats from "./components/GithubStats";

const USE_GITHUB_PROFILE = import.meta.env.VITE_APP_USE_GITHUB_DATA === "true";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      {/* <Hero /> */}
      <div className="px-4 pt-3 pb-6 bg-primary">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        {USE_GITHUB_PROFILE && (
          <>
            <GithubRepos />
            <GithubStats />
            <GithubProfile />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
