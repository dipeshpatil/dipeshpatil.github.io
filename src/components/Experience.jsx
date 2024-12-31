import {experience} from "../portfolio.json";

const experiences = experience.reverse();

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-primary">
      <h2 className="text-3xl font-bold mb-4 section-font">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">
            <span
              className={`${exp.accentColor} px-2 py-1 border-2 border-black dark:border-white`}
            >
              {exp.company}
            </span>{" "}
            - {exp.role}
          </h3>
          <div className="exp-duration mt-2">{exp.duration}</div>
          <p className="exp-desc mt-1">{exp.description}</p>
          {exp.bullets && (
            <ul className="list-disc list-inside space-y-2 mt-2 exp-bullets">
              {exp.bullets.map((bullet, index) => (
                <li key={index} className="pl-2">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
