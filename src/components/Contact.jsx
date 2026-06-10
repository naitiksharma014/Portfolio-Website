import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


;

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_h629apf",
        "template_b33799m",
        form.current,
        "cBrcXkWzMVv9CdUec"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-32 px-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-16">
          Let's work together
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Got a project in mind?
            </h3>

            <p className="text-gray-400 text-xl leading-relaxed mb-10">
              Let's Build it together! Whether you have a clear vision or just a rough idea, I'm here to help bring your project to life. Feel free to reach out for collaborations, freelance work, or just to say hi!
            </p>

            <div className="space-y-6">
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex items-center gap-5">
                <FaEnvelope size={28} className="text-blue-500" />
                <div>
                  <p className="text-gray-400">Email</p>
                   <a
                    href="naitiksharma014@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-blue-400"
                  >
                    naitiksharma014@gmail.com
                  </a>

                </div>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex items-center gap-5">
                <FaGithub size={28} className="text-blue-500" />
                <div>
                  <p className="text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/naitiksharma014"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-blue-400"
                  >
                    github.com/naitiksharma014
                  </a>
                </div>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex items-center gap-5">
                <FaLinkedin size={28} className="text-blue-500" />
                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/naitik-sharma-0b74b2317/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-blue-400"
                  >
                    Connect With Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-8">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-300">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#1a2238] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Your Email *
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#1a2238] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Subject *
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration"
                  required
                  className="w-full bg-[#1a2238] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message *
                </label>

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-[#1a2238] border border-gray-700 rounded-xl p-4 resize-none outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}