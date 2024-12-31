import {education} from "../portfolio.json";

const Education = () => {
  return (
    <section id="education" className="p-8 bg-secondary">
      <h2 className="text-3xl font-bold mb-4 edu-title section-font">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border-l-4 border-[#1c1c1c] pl-4 space-y-2"
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
