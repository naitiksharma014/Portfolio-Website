export default function Achievements() {
  const achievements = [
    "Solved 300+ DSA problems",
    "Problem Solver",
    "Active GitHub Contributor",
    "Learning MERN Stack Development",
  ];

  return (
    <section
      id="achievements"
      className="py-32 px-8 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-500 uppercase tracking-widest">
          Achievements
        </p>

        <h2 className="text-6xl font-bold mt-4 mb-16">
          Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 duration-300"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}