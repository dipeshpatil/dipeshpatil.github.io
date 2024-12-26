const experiences = [
  {
    company: "Imprimo Business Solutions",
    role: "Software Engineer Intern",
    duration: "Apr 2019 - Sep 2019",
    description:
      "Worked as a Junior Developer to build the Imprimo Product Website from scratch for their products",
    bullets: [
      "Developed and maintained the website for Imprimo Business Solutions, ensuring functionality and user-friendliness.",
      "Designed and implemented new features, ensured website security, and provided ongoing maintenance and support.",
      "Collaborated with the management team to translate their vision into a visually appealing and user-friendly platform",
    ],
    accentColor: "exp-imprimo",
  },
  {
    company: "Reliance Jio",
    role: "Graduate Trainee",
    duration: "Nov 2020 - Apr 2021",
    description: "Developed internal tools enhancing team collaboration.",
    bullets: [
      "Worked on various tools and technologies like ReactJS and NodeJS and developed internal tools like Reporting Dashboard and Management Systems.",
      "Worked with Android Team in building MyJio App using technologies like React Native, Redux, Expo, NodeJS, ExpressJS and MongoDB",
    ],
    accentColor: "exp-jio",
  },
  {
    company: "BrowserStack",
    role: "Software Development Engineer",
    duration: "Apr 2021 - Dec 2022",
    description:
      "Worked in Device Features Team, built scalable applications, reducing customer-reported issues by 20%.",
    bullets: [
      "Worked as a FullStack Developer in Device Features Engineering team along with Product and Design managers to release new product features requested by customers on the basis of support ticket frequency.",
      "Migrated component library from jQuery to ReactJS which is currently used as the main UI Library for developing web applications in the product.",
      "Implemented Parallel Execution of tests on Multiple Devices using concurrency, Integrated in existing WDIO Framework and thereby reduced queuing of tests and execution time by 80%.",
      "Implemented a safe-lock mechanism which prevented read-write file errors in concurrent environment.",
    ],
    accentColor: "exp-browserstack",
  },
  {
    company: "Morningstar",
    role: "Software Engineer",
    duration: "May 2023 - Sep 2024",
    description:
      "Worked as a Software Engineer in Commodities and Energy - Product Dev Team.",
    bullets: [
      "Designed and developed intuitive frontend interfaces with Vue.js for seamless user experiences.",
      "Implemented scalable, secure, and high-performance backend solutions using Java Spring Boot.",
      "Collaborated with cross-functional teams to translate client requirements into actionable tasks, delivering solutions that exceed expectations.",
      "Modified and optimized workflow formulas using JavaScript to enhance efficiency for clients.",
      "Conducted thorough testing and debugging to ensure reliable, error-free software delivery.",
      "Provided ongoing support, maintenance, and updates for Workflow Manager, incorporating user feedback for continuous improvement.",
    ],
    accentColor: "exp-morningstar",
  },
].reverse();

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
          <div className="exp-duration mt-1">{exp.duration}</div>
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
