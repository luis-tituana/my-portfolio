export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Autonomous Harvesting Robot",
      description:
        "Trajectory optimization, perception, and embedded control for autonomous crop harvesting.",
      tech: ["ROS2", "MPC", "Python", "C++"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Neural Network Control Framework",
      description:
        "Suboptimal neural-network-based control framework with stability guarantees.",
      tech: ["PyTorch", "CasADi", "Optimization"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Autonomous Mobile Robot",
      description:
        "Integrated sensing, localization, planning, and motor control for autonomous navigation.",
      tech: ["SLAM", "Embedded Systems", "Computer Vision"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const skills = [
    "Robotics",
    "Model Predictive Control",
    "Optimization",
    "Machine Learning",
    "Computer Vision",
    "Embedded Systems",
    "ROS2",
    "Python",
    "C++",
    "MATLAB",
    "Linux",
    "Trajectory Planning",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Luis Tituaña</h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-6">
              Robotics Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Building Intelligent Autonomous Systems
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              Portfolio showcasing robotics, controls, optimization,
              embedded systems, and machine learning projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop"
                alt="Robotics"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={project.video}
                    title={project.title}
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 transition"
                    >
                      GitHub →
                    </a>

                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 transition"
                    >
                      Case Study →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Skills</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-black border border-white/10 hover:border-cyan-400/40 hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
              alt="Engineering"
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">
              About Me
            </p>

            <h2 className="text-4xl font-black mb-6">
              Engineering Intelligent Systems
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              I work on robotics, controls, optimization, and machine
              learning systems with a strong focus on real-world deployment.
              My projects combine software, embedded systems, and advanced
              algorithms to build reliable autonomous platforms.
            </p>

            <p className="text-gray-300 leading-relaxed">
              This portfolio highlights research, engineering projects,
              embedded control systems, and autonomous robotics work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12">
          <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let’s Build Something Interesting
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Interested in robotics, autonomous systems, controls, or machine
            learning collaborations? Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500 text-sm">
        © 2026 Luis Tituaña — Robotics & Autonomous Systems Portfolio
      </footer>
    </div>
  );
}
