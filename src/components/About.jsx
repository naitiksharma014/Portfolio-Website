import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold mb-20">
          Who I am
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <p className="text-gray-400 text-2xl leading-relaxed">
             I'm a Computer Science student passionate about web development and problem solving. I enjoy building responsive and user-friendly applications while continuously learning modern technologies.
            </p>

            <p className="text-gray-400 text-2xl leading-relaxed mt-8">
              My current focus is on React, JavaScript, Node.js, and the MERN stack, where I turn ideas into practical projects and improve my development skills through hands-on experience.
            </p>

            <p className="text-gray-400 text-2xl leading-relaxed mt-8">
              Beyond web development, I regularly practice Data Structures and Algorithms to strengthen my problem-solving abilities and prepare for software engineering opportunities.
            </p>

            <div className="flex gap-16 mt-16">

              <div>
                <h3 className="text-6xl font-bold text-blue-500">
                  8+
                </h3>
                <p className="text-gray-400 mt-2">
                  Repositories
                </p>
              </div>

              <div>
                <h3 className="text-6xl font-bold text-blue-500">
                  3+
                </h3>
                <p className="text-gray-400 mt-2">
                  Platforms
                </p>
              </div>

              <div>
                <h3 className="text-6xl font-bold text-blue-500">
                  10+
                </h3>
                <p className="text-gray-400 mt-2">
                  Technologies
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-10">

            <h3 className="uppercase tracking-widest text-gray-400 mb-10">
              Find Me Online
            </h3>

            <div className="space-y-8">

              <a
                href="https://github.com/naitiksharma014"
                target="_blank"
                className="flex items-center justify-between border-b border-gray-800 pb-6"
              >
                <div className="flex gap-4 items-center">
                  <FaGithub size={30} />
                  <div>
                    <h4 className="font-semibold text-2xl">
                      GitHub
                    </h4>
                    <p className="text-gray-400">
                      naitiksharma014
                    </p>
                  </div>
                </div>

                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/naitik-sharma-0b74b2317/"
                target="_blank"
                className="flex items-center justify-between border-b border-gray-800 pb-6"
              >
                <div className="flex gap-4 items-center">
                  <FaLinkedin size={30} />
                  <div>
                    <h4 className="font-semibold text-2xl">
                      LinkedIn
                    </h4>
                    <p className="text-gray-400">
                      naitik-sharma
                    </p>
                  </div>
                </div>

                <span>↗</span>
              </a>

              <a
                href="mailto:naitiksharma014@gmail.com"
                className="flex items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <FaEnvelope size={30} />
                  <div>
                    <h4 className="font-semibold text-2xl">
                      Email
                    </h4>
                    <p className="text-gray-400">
                      naitiksharma014@gmail.com
                    </p>
                  </div>
                </div>

                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}