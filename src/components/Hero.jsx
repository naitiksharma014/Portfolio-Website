import { HiOutlineMail, HiDocumentText } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 max-w-7xl mx-auto pt-32">
      <div>
        <p className="text-blue-500 uppercase tracking-widest mb-6">
          Developer
        </p>

        <h1 className="text-7xl font-bold leading-tight">
          Hi, I'm
          <span className="text-blue-500"> Naitik.</span>
        </h1>

        <p className="text-gray-400 text-2xl mt-8 max-w-3xl leading-relaxed">
          Aspiring Full-Stack Developer focused on React, JavaScript, and modern web technologies. Currently exploring backend development, DSA, and building projects that solve real problems.
        </p>

        <div className="flex gap-5 mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold">
            <a href="#projects">
              View Projects
            </a>
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-xl flex items-center gap-2">
            <HiOutlineMail />
            <a href="#contact">
              Get In Touch
            </a>
          </button>

          <button className="bg-blue-500 px-6 py-3 rounded-lg flex items-center gap-2">
            <HiDocumentText size={20} />
            <a
              href="https://drive.google.com/uc?export=download&id=1CrXRGOKpYVY4oh161evOHM2NXF5ojgzc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>

        </div>
      </div>
    </section>
  );
}