import { useState, useEffect } from "react";

export default function PortfolioWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const links = {
    email: "mailto:luis.tituana@ucf.com",
    linkedin: "https://linkedin.com/in/luistituana",
    github: "https://github.com/luis-tituana",   // update with your actual GitHub username
    resume: "/Luis_Tituana_Resume_2026.pdf",
    // googleScholar: "https://scholar.google.com/citations?user=XXXX",
    // orcid: "https://orcid.org/0000-0000-0000-0000",
  };

  const projects = [
    {
      title: "Delta-Robot and End-Effector MuJoCo Simulation",
      description:
        "Designed and implemented a high-fidelity MuJoCo/Python simulation of the delta robot and end-effector from the autonomous strawberry harvesting platform. The simulation complements the physical robotic system by enabling rapid development, testing, and validation of control algorithms in a realistic physics-based environment prior to deployment on hardware.",
      tech: ["MuJoCo", "Python", "Robotics Simulation", "Delta Robot", "End-Effector"],
      outcome: "Companion simulation to the Autonomous Strawberry Harvesting Robot, enabling control development without physical hardware.",
      // image: "/images/delta_arm_mujoco.png",
      video: "/videos/circular_motion.mp4",
      details: [
        "Modeled the delta-robot kinematics and end-effector geometry from the physical Strawberry22 and Strawberry15 platforms.",
        "Utilized the SolidWorks CAD models, exported them as STL files, and converted them to MuJoCo XML format using custom Python scripts.",
        "Built the simulation environment in MuJoCo-Python for testing and iterating on trajectory planning algorithms.",
        "Enables control algorithm for trajectory tracking using the delta-robot inverse and forward kinematics.",
        "Designed as a direct complement to the autonomous harvesting robot project for rapid prototyping and future testing.",
      ],
      images: ["/images/p1_base_plate.png", "/images/p1_end_effector_base.png", "/images/p1_gripper.png", "/images/p1_lower_arm.png", "/images/p1_upper_arm.png"],
      videos: ["/videos/Harvest_motion.mp4"],
    },
    {
      title: "Autonomous Strawberry Harvesting Robot",
      description:
        "Integrated, modified, and tested two autonomous robotic strawberry harvesters (Strawberry22 & Strawberry15) for reliable operation in open-field conditions over four years. Tuned PI controller for row navigation and developed a reinforcement learning–based algorithm for row transitions.",
      tech: ["Python", "MATLAB", "Arduino", "Raspberry Pi", "YOLOv4", "PI Control", "RL"],
      outcome: ["Increased harvesting success rate from 72% to 94% through iterative yearly improvements.",
      ],
      // video: "/videos/Harvest_motion.mp4",
      image: "/images/p2_strawberry_robot.png",
      details: [
        "Mounted and commissioned the drivetrain, electric motors, sensors, and controllers for the Guidance, Navigation, and Control (GNC) system.",
        "Built and rewired power and signal cables including power management, signal conditioning, connectors, and electrical protection hardware.",
        "Tuned and implemented a PI controller for row navigation, and developed a reinforcement learning–based algorithm for row transitions.",
        "Modified and improved robot control software in Python, focusing on delta arms and end-effector coordination.",
        "Defined five harvesting scenarios of increasing complexity to evaluate performance across realistic field conditions.",
        "Designed a communication and harvesting protocol across subsystems using MATLAB (laptop), Arduino, and Python (Raspberry Pi).",
        "Improved overall system reliability by identifying and reducing key failure modes.",
        "Increased end-effector effectiveness by 10% through mechanical and control refinements.",
      ],
      images: ["/images/p2_robot_in_farm.png", "/images/p2_strawberry_robot2.png"],
      videos: [],
      references: [
        {text: "L. Tituaña, et. al., 'A small autonomous field robot for strawberry harvesting', Smart Agricultural Technology, 2024.", url: "https://doi.org/10.1016/j.atech.2024.100454" },
      ],
    },
    {
      title: "Neural Network for Trajectory Optimization in MPC",
      description:
        "Developed an Actor–Critic neural network tool for solving constrained trajectory optimization problems within a Model Predictive Control framework, with formal Lyapunov-style stability guarantees. Tested on a two-wheel mobile robot and a 2D quadrotor.",
      tech: ["PyTorch", "Python", "MPC", "Reinforcement Learning", "Lyapunov Stability"],
      outcome: ["Achieved near-optimal solutions by restricting the search to a bio-inspired manifold, enabling stable closed-loop real-time control.",
      ],
      image: "/images/p3_Actor-Critic_networks.png",
      details: [
        "Implemented the full algorithm in Python using PyTorch, designed for integration into RL and real-time control pipelines.",
        "Designed the Actor to generate optimal control actions, while the Critic compensates for numerical mismatch and derivative estimation errors.",
        "Extended the method to first and second-order dynamical systems with invertible dynamics, enabling broad applicability across robotic platforms.",
        "Analyzed system stability in presence of numerical errors due to derivative approximation mismatch.",
        "Derived Lyapunov-stability bounds ensuring robustness to numerical errors and additive disturbances.",
        "Achieved near-optimal solutions by restricting the search to a bio-inspired manifold, trading global optimality for computational efficiency.",
        "Integrated the networks into an MPC structure to produce stable closed-loop real-time control solutions.",
        "Built software ready for deployment in RL/simulation environments including OpenAI Gym, Gazebo, and MuJoCo.",
        "Tested and validated on a two-wheel mobile robot and a 2D quadrotor system.",
      ],
      images: ["/images/p3_MPC_formulation.png", "/images/p3_quadrotor_sim.png", "/images/p3_results_robot.png"],
      videos: [],
      references: [
        {text: "L. Tituaña, Y. Xu, 'Nonlinear robust suboptimal trajectory control in an Actor-Critic network based receding horizon control framework,' International Journal of Control, 2025.", url:"https://doi.org/10.1080/00207179.2025.2568587"},
        {text: "L. Tituaña, Y. Xu, 'Subspace Structured Neural Network for Rapid Trajectory Optimization,' IFAC-PapersOnLine, 2023.", url: "https://doi.org/10.1016/j.ifacol.2023.11.007"},
      ],
    },
    {
      title: "Magnetic Manipulator with Permanent Magnets",
      description:
        "Designed and built a magnetic manipulation testbed using rotatable permanent magnets to steer a bead in a viscous medium. Fully modeled in SolidWorks, fabricated via 3D printing, with custom driver electronics and a LabVIEW software stack for closed-loop operation.",
      tech: ["SolidWorks", "LabVIEW", "MATLAB", "3D Printing", "Signal Conditioning"],
      outcome: "Delivered a fully functional testbed ready for new control algorithm integration via MATLAB, without requiring LabVIEW expertise.",
      image: "/images/p4_magnetic_manipulator.png",
      details: [
        "Used a published research paper on magnetic particle control via rotating circular magnets as the foundation for the design.",
        "Fully modeled and simulated the mechanical structure in SolidWorks, including stress analysis to identify structural weak points.",
        "Fabricated the system using 3D printing, iterating through multiple prototype revisions.",
        "Developed custom driver electronics and implemented signal conditioning for sensor feedback and magnetic field control.",
        "Built the full software stack in LabVIEW including data acquisition, image processing, and motor control for closed-loop operation.",
        "Developed a GUI to configure system parameters including magnet size/type, bead properties, medium viscosity, control gains, and real-time motion visualization.",
        "Produced a comprehensive technical report documenting motor behavior and testbed limitations.",
        "Algorithms can be integrated directly through MATLAB code, without requiring LabVIEW expertise.",
      ],
      images: ["/images/p4_image_acq.png", "/images/p4_setup.png", "/images/p4_solidworks.png"],
      videos: [],
      references: [
        {text: "N. Riahi, L. Tituaña, A. Komaee, ”Homotopy Continuation for Feedback Linearization of Noncontact Magnetic Manipulators,” 2020 American Control Conf. (ACC), 2020", url: "https://doi.org/10.23919/ACC45564.2020.9147681"}
      ]
    },
    {
      title: "Cartesian Robot for Document Classification",
      description:
        "Designed and built a 3-axis Cartesian robot (x-y-z motion) to automatically classify documents based on barcode identification. Developed custom PCB, implemented serial communication for a barcode scanner, and drove bipolar stepper motors through H-bridges.",
      tech: ["ATmega164P", "C", "PCB Design", "H-bridges", "Stepper Motors", "ISIS Proteus"],
      outcome: "Demonstrated successful automatic classification of documents with a low-cost aluminum frame structure.",
      image: "/images/p5_cartesian_robot.png",
      details: [
        "Integrated a commercial barcode scanner to read each document's barcode, while a printer roller separated individual sheets from a stack.",
        "Designed a rail-and-elevator transport mechanism to move a basket to the target storage location.",
        "Built a wooden matrix of storage boxes (archive-style) to sort and store documents according to barcode.",
        "Used stepper motors to drive X-Y positioning, and repurposed a CD-drive mechanism to assist with document insertion.",
        "Developed the control system around an ATmega164P microcontroller driving bipolar stepper motors through H-bridges.",
        "Implemented serial communication for barcode scanner input.",
        "Designed, printed, and manually soldered the robot's custom control PCB.",
        "Implemented flexible cable management using a compressible conduit to prevent wire snagging and motion interference.",
      ],
      images: ["/images/p5_circuitry.png", "/images/p5_rails.png", "/images/p5_z_effector.png"],
      videos: [],
    },
    {
      title: "Labyrinth/Maze Robot (Minimouse)",
      description:
        "Designed and built a compact autonomous robot to solve a maze using a right-hand rule strategy combined with a PID controller. Designed a two-layer PCB with SMD and through-hole components, integrated five IR distance sensors, and programmed in C.",
      tech: ["C", "ATmega328P", "PID Control", "PCB Design", "IR Sensors", "ISIS Proteus"],
      outcome: "3rd place at the 2015 Robot Games Zero Latitud (Labyrinth category), Quito, Ecuador.",
      image: "/images/p6_labyrinth_robot.png",
      details: [
        "Implemented control using a Baby Orangutan B-328 robot controller featuring an ATmega328P microcontroller and dual motor driver channels.",
        "Implemented a right-hand rule maze-solving strategy combined with a PID controller to maintain centering between maze walls.",
        "Simulated the full circuitry in ISIS/Proteus to validate component connections before fabrication.",
        "Implemented signal conditioning and filtering to improve sensor accuracy and voltage stability.",
        "Designed and routed a two-layer PCB (top and bottom) in ARES (Proteus).",
        "Integrated five infrared distance sensors (emitter/receiver IR LED pairs) connected to the microcontroller's analog inputs.",
        "Manually soldered both SMD and through-hole components.",
        "Included an MPU-6050 IMU (gyroscope + accelerometer) to enable future improvements to the maze-solving algorithm.",
      ],
      images: ["/images/p6_circuitry.png", "/images/p6_pcb.png", "/images/p6_robot2.png"],
      videos: [],
    },
  ];

  const skills = [
    "Python",
    "PyTorch",
    "MATLAB",
    "C / C++",
    "Model Predictive Control",
    "PID Control",
    "Reinforcement Learning",
    "Optimization",
    "Computer Vision",
    "Embedded Systems",
    "PCB Design",
    "SolidWorks",
    "LabVIEW",
    "ROS2",
    "Arduino",
    "Raspberry Pi",
    "3D Printing",
    "Linux",
  ];

  const renderText = (text) =>
    text.split(/\*([^*]+)\*/).map((part, i) =>
      i % 2 === 1 ? <em key={i}>{part}</em> : part
    );

  const MediaItem = ({ src, alt, className }) =>
    src.includes("youtube") ? (
      <iframe className={className} src={src} title={alt} allowFullScreen />
    ) : src.match(/\.(mp4|webm|ogg)$/i) ? (
      <video className={className} src={src} autoPlay muted loop playsInline />
    ) : (
      <img className={className} src={src} alt={alt} />
    );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Luis Tituaña</h1>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#publications" className="hover:text-white transition">Publications</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-6">
              Electrical/Robotics Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Building Intelligent Autonomous Systems
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8 text-justify">
              Robotics Engineer specializing in autonomous systems, control, optimization, and machine learning, 
              with experience developing real-world robotic and embedded systems for intelligent 
              field applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
                View Projects
              </a>
              <a href={links.resume} className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/simple_robotics.jpg"
                alt="Robotics"
                className="w-full h-[500px] object-contain bg-cyan-900/20 scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/robot_traj.jpg"
              alt="Engineering"
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">About Me</p>
            <h2 className="text-4xl font-black mb-6">Engineering Intelligent Systems</h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
              I’m an Electrical Engineer with a Ph.D. in Mechanical Engineering and hands-on 
              experience across the full stack of autonomous systems, from modeling, simulation, 
              and robot programming to soldering PCBs and tuning PID controllers on physical platforms.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
              My work spans neural network-based control, Reinforcement Learning, model predictive control (MPC), 
              autonomous agricultural robotics, optimization, and embedded control systems. 
              I enjoy building technologies that move beyond simulation and research into 
              reliable real-world applications, taking ideas from initial concepts all the 
              way to fully functioning physical systems. Passionate about robotics, controls, 
              and machine learning, I’m always excited to collaborate on innovative engineering 
              projects in these areas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black">Featured Projects</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {project.video ? (
                  <div className="aspect-video bg-black">
                    {project.video.includes("youtube") ? (
                      <iframe className="w-full h-full" src={project.video} title={project.title} allowFullScreen />
                    ) : (
                      <video className="w-full h-full object-contain" src={project.video} autoPlay muted loop playsInline />
                    )}
                  </div>
                ) : (
                  <div className="aspect-video bg-cyan-900/40 flex items-center justify-center overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-justify">{project.description}</p>
                  <p className="text-cyan-400/80 text-sm italic mb-6">{project.outcome}</p>
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((item, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Publications */}
      {(() => {
        const publications = [
          {
            title: "Nonlinear robust suboptimal trajectory control in an Actor-Critic network based receding horizon control framework",
            authors: "L. Tituaña and Y. Xu",
            venue: "International Journal of Control",
            year: 2025,
            type: "Journal",
            url: "https://doi.org/10.1080/00207179.2025.2568587",
          },
          {
            title: "A small autonomous field robot for strawberry harvesting",
            authors: "L. Tituaña et al.",
            venue: "Smart Agricultural Technology",
            year: 2024,
            type: "Journal",
            url: "https://doi.org/10.1016/j.atech.2024.100454",
          },
          {
            title: "Subspace Structured Neural Network for Rapid Trajectory Optimization",
            authors: "L. Tituaña and Y. Xu",
            venue: "IFAC-PapersOnLine",
            year: 2023,
            type: "Conference",
            url: "https://doi.org/10.1016/j.ifacol.2023.11.007",
          },
          {
            title: "Scheduling of robotics or machinery operations in agricultural fields: A review",
            authors: "A. Rivera Palma, Y. Xu, L. Tituaña, and M. Fritts",
            venue: "2024 ASABE Annual International Meeting",
            year: 2024,
            type: "Conference",
            url: "https://doi.org/10.13031/aim.202400944",
          },
          {
            title: "Homotopy Continuation for Feedback Linearization of Noncontact Magnetic Manipulators",
            authors: "N. Riahi, L. Tituaña, A. Komaee",
            venue: "2020 American Control Conf. (ACC)",
            year: 2020,
            type: "Conference",
            url: "https://doi.org/10.23919/ACC45564.2020.9147681",
          },
          {
            title: "Inverse Response Systems Identification using Genetic Programming",
            authors: "C. Carabalı́, L. Tituaña, J. Aguilar, O. Camacho, D. Chavez",
            venue: "Proc. ICINCO 2017",
            year: 2017,
            type: "Conference",
            url: "https://doi.org/10.5220/0006421602380245",
          },
        ];
        return (
          <section id="publications" className="px-6 py-24">
            <div className="max-w-4xl mx-auto">
              <div className="mb-14">
                <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">Research</p>
                <h2 className="text-4xl md:text-5xl font-black">Publications</h2>
              </div>
              <ol className="space-y-6">
                {publications.map((pub, i) => (
                  <li
                    key={i}
                    className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                            pub.type === "Journal"
                              ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                              : "bg-purple-500/10 border-purple-500/30 text-purple-400"
                          }`}
                        >
                          {pub.type}
                        </span>
                        <span className="text-xs text-gray-500">{pub.year}</span>
                      </div>
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-white hover:text-cyan-400 transition leading-snug block mb-1"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <p className="font-semibold text-white leading-snug mb-1">{pub.title}</p>
                      )}
                      <p className="text-sm text-gray-400 mb-0.5">{pub.authors}</p>
                      <p className="text-sm text-gray-500 italic">{pub.venue}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })()}

      {/* Skills */}
      <section id="skills" className="px-6 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-black">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-5 py-3 rounded-2xl bg-black border border-white/10 hover:border-cyan-400/40 hover:scale-105 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12">
          <p className="uppercase tracking-[0.35em] text-sm text-cyan-400 mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Build Something Interesting</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Interested in robotics, autonomous systems, controls, or machine
            learning collaborations? Feel free to reach out.
          </p>
          <a href={links.email} className="inline-block text-cyan-400 hover:text-cyan-300 transition text-lg font-medium mb-10">
            luis.tituana@ucf.com
          </a>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={links.email} className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              Email Me
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              GitHub
            </a>
            <a href={links.resume} className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500 text-sm">
        © 2026 Luis Tituaña — Robotics & Autonomous Systems Portfolio
        <span className="mx-2">·</span>
        <a href={links.email} className="hover:text-gray-300 transition">luis.tituana@ucf.com</a>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-gray-300 hover:text-white"
            >
              ✕
            </button>

            {/* Primary media */}
            {selectedProject.video ? (
              <div className="aspect-video bg-black rounded-t-3xl overflow-hidden">
                {selectedProject.video.includes("youtube") ? (
                  <iframe className="w-full h-full" src={selectedProject.video} title={selectedProject.title} allowFullScreen />
                ) : (
                  <video className="w-full h-full object-contain" src={selectedProject.video} autoPlay muted loop playsInline />
                )}
              </div>
            ) : selectedProject.image ? (
              <div className="aspect-video bg-cyan-900/40 rounded-t-3xl overflow-hidden flex items-center justify-center">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain" />
              </div>
            ) : null}

            <div className="p-8 md:p-10">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-black mb-2">{selectedProject.title}</h2>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8 text-base text-justify">{renderText(selectedProject.description)}</p>

              {/* How section */}
              {selectedProject.details?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 text-white">How</h3>
                  <ul className="space-y-3">
                    {selectedProject.details.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className="text-cyan-400 mt-1 shrink-0">•</span>
                        {renderText(point)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcome */}
              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">
                <h3 className="text-sm uppercase tracking-widest text-cyan-400 mb-3 font-semibold">Outcome</h3>
                {Array.isArray(selectedProject.outcome) ? (
                  <ul className="space-y-2">
                    {selectedProject.outcome.map((line, i) => (
                      <li key={i} className="flex gap-3 text-gray-200 leading-relaxed text-justify">
                        <span className="text-cyan-400 mt-1 shrink-0">•</span>
                        {renderText(line)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-200 leading-relaxed text-justify">{renderText(selectedProject.outcome)}</p>
                )}
              </div>

              {/* Extra images gallery */}
              {selectedProject.images?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-white">Gallery</h3>
                  <div className={`grid gap-4 ${selectedProject.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                    {selectedProject.images.map((src, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden bg-cyan-900/20 aspect-video flex items-center justify-center">
                        <MediaItem src={src} alt={`${selectedProject.title} ${i + 1}`} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra videos gallery */}
              {selectedProject.videos?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-white">Videos</h3>
                  <div className="grid gap-4">
                    {selectedProject.videos.map((src, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden bg-black aspect-video">
                        <MediaItem src={src} alt={`${selectedProject.title} video ${i + 1}`} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* References */}
              {selectedProject.references?.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">References</h3>
                  <ol className="space-y-3">
                    {selectedProject.references.map((ref, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                        <span className="text-gray-600 shrink-0">[{i + 1}]</span>
                        {ref.url ? (
                          <a href={ref.url} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition underline underline-offset-2">
                            {ref.text}
                          </a>
                        ) : (
                          <span>{ref.text}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
