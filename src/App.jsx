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
    <div className="relative min-h-screen font-sans text-typo overflow-hidden">
      <div className="bg-orb bg-orb--purple" />
      <div className="bg-orb bg-orb--cyan" />
      <div className="bg-orb bg-orb--pink" />
      <div className="bg-orb bg-orb--blue" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
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
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
