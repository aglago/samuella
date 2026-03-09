const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Java",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <span
              key={index}
              className="bg-white/50 text-secondary px-4 py-2 rounded-md text-sm border border-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
