import {about} from "../portfolio.json";

const About = () => {
  return (
    <section id="about" className="p-8 bg-secondary">
      <h2 className="text-3xl font-bold mb-4 section-font">About Me</h2>
      <p>{about}</p>
    </section>
  );
};

export default About;
