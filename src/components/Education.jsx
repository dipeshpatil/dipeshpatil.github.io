const Education = () => {
  const education = [
    {
      college: "Xavier Institute of Engineering",
      university: "University of Mumbai",
      degree: "Bachelor of Engineering in Computer Science",
      cgpa: "A",
      description:
        "Focused on core computer science subjects such as Data Structures, Algorithms, and Databases. Participated in various coding competitions and developed a strong foundation in software development.",
    },
    {
      college: "Nirmala Memorial Foundation college of Science and Commerce",
      university: "Maharashtra Board of Higher Education",
      degree: "Higher Secondary School",
      cgpa: "A",
      description:
        "Explored mathematics and science, building a strong analytical mindset and problem-solving abilities.",
    },
  ];

  return (
    <section id="education" className="p-8 bg-secondary">
      <h2 className="text-3xl font-bold mb-4 edu-title section-font">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border-l-4 border-gray-700 pl-4 space-y-2"
          >
            <h3 className="text-xl font-semibold edu-uni">{edu.university}</h3>
            <h3 className="text-lg font-semibold edu-college">{edu.college}</h3>
            <p className="edu-degree">
              <span className="font-medium">{edu.degree}</span> | Grade:{" "}
              <span className="font-medium">{edu.cgpa}</span>
            </p>
            <p className="edu-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
