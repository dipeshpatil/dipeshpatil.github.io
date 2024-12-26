const projects = [
  {
    name: "VideoMania",
    skills: [
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
        skill: "Express.js",
        accent: "skill-express",
      },
      {
        skill: "AWS S3",
        accent: "skill-aws",
      },
    ],
    description:
      "Developed a full-stack video service application with RESTful APIs using Node.js, Express, and MongoDB, enabling video upload, trimming, merging, and sharing functionalities. Implemented Multer middleware for robust file handling, integrated permissions and credit-based access control system, and designed secure user authentication. Built the frontend using Vue.js, employing reusable components and state management for seamless user experience. Focused on error handling, scalability, and performance optimization to deliver a reliable solution",
    links: [
      {
        text: "Backend",
        link: "https://github.com/dipeshpatil/videomania-backend",
      },
      {
        text: "Frontend",
        link: "https://github.com/dipeshpatil/videomania-client",
      },
    ],
  },
  {
    name: "Algorithms Visualiser",
    skills: [
      {
        skill: "React",
        accent: "skill-react",
      },
    ],
    description:
      "Algorithms Visualiser is an opensource project made using ReactJS. Visualise Algorithms on Sorting, Pathfinding, Searching, Word Search, Backtracking.",
    links: [
      {
        text: "Source Code",
        link: "https://github.com/dipeshpatil/algorithms-visualiser",
      },
      {
        text: "Live Demo",
        link: "https://dipeshpatil.github.io/algorithms-visualiser/#/",
      },
    ],
  },
  {
    name: "SyncPhonic - An Online Music Streaming Website",
    skills: [
      {
        skill: "PHP",
        accent: "skill-php",
      },
      {
        skill: "MySQL",
        accent: "skill-sql",
      },
    ],
    description:
      "A music streaming web application. Users have the option to create personalized playlists. SyncPhonic provides lyrics and visual effects as well. SyncPhonic is built on PHP & MySQL",
    links: [
      {
        text: "Source Code",
        link: "https://github.com/dipeshpatil/SyncPhonic",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-secondary">
      <h2 className="text-3xl font-bold mb-4 section-font">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
          <ul className="mt-1 list-none flex flex-wrap gap-1">
            {project.skills.map((s, index) => (
              <li
                key={index}
                className={`${s.accent} border-2 border-black dark:border-white`}
              >
                {s.skill}
              </li>
            ))}
          </ul>
          <p className="project-desc mt-2">{project.description}</p>
          <h3 className="text-xl font-semibold mt-2">Links:</h3>
          {project.links &&
            project.links.map((l, idx) => (
              <a
                key={idx}
                target="_blank"
                href={l.link}
                className="project-link"
              >
                {l.text}
              </a>
            ))}
        </div>
      ))}
    </section>
  );
};

export default Projects;
