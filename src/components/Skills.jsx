const skills = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Problem Solving",
    items: ["DSA", "LeetCode", "Codeforces"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-500 uppercase tracking-widest">
          Skills
        </p>

        <h2 className="text-6xl font-bold mt-4 mb-20">
          Technologies I work with
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8"
            >
              <h3 className="uppercase tracking-widest text-gray-400 mb-8">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-lg"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}