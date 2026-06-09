const projects = [
  {
    title: "Desi Stayz",
    description:
      "Travel booking platform with maps, authentication, reviews, and property listings.",
    tech: ["React", "MongoDB", "Express"],
    github: "https://github.com/naitiksharma014/Major-Project--Desi-Stayz",
    demo: "https://desi-stayz.onrender.com/listings",
  },
  {
    title: "Resume Analyzer",
    description:
      "AI-powered resume analysis tool that evaluates resumes and provides improvement suggestions.",
    tech: ["React", "Node.js", "AI"],
    github: "https://github.com/naitiksharma014/AI-Resume-Analyser-with-REACT-and-Tailwand",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and achievements.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/naitiksharma014/Portfolio-Website",
    demo: "https://naitik-web.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-500 uppercase tracking-widest">
          Projects
        </p>

        <h2 className="text-6xl font-bold mt-4 mb-20">
          Featured Work
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition"
            >
              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-5 py-2 border border-gray-700 rounded-lg"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="px-5 py-2 bg-blue-500 rounded-lg"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}