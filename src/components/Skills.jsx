const skills = [
  {
    skill: "JavaScript",
    accent: "skill-javascript",
  },
  {
    skill: "React",
    accent: "skill-react",
  },
  {
    skill: "Vue.js",
    accent: "skill-vue",
  },
  {
    skill: "Node.js",
    accent: "skill-node",
  },
  {
    skill: "MongoDB",
    accent: "skill-mongo",
  },
  {
    skill: "MySQL",
    accent: "skill-sql",
  },
  {
    skill: "AWS",
    accent: "skill-aws",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-primary">
      <h2 className="text-3xl font-bold mb-4 section-font">Skills</h2>
      <ul className="list-none flex flex-wrap gap-1">
        {skills.map((s, index) => (
          <li
            key={index}
            className={`${s.accent} border-2 border-black dark:border-white`}
          >
            {s.skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
