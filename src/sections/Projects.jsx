import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "CivicaConnect",
    description:
      "A Retrieval-Augmented Generation (RAG) assistant enabling regional language users to access local government services natively.",
    image: "/projects/project1.png",
    tags: ["Python", "LLMs", "RAG", "AI"],
    link: "#",
    github: "#",
  },
  {
    title: "Prompt-to-UI",
    description:
      "An AI-powered generator that converts natural language prompts into structural UI code layouts dynamically.",
    image: "/projects/project2.png",
    tags: ["Python", "LLMs", "Frontend", "AI"],
    link: "#",
    github: "https://github.com/ayesha25-mahek/prompt-to-UI-generator",
  },
  {
    title: "LendLand P2P",
    description:
      "A peer-to-peer sharing ecosystem enabling academic groups to safely exchange books and hardware items.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/ayesha25-mahek/LendLand",
  },
  {
    title: "Aegis Surveillance",
    description:
      "An autonomous drone security solution designed to monitor perimeters and trigger localized warning signals.",
    image: "/projects/project4.png",
    tags: ["IoT", "Drone", "Sensors", "Embedded"],
    link: "#",
    github: "#",
  },
  { 
    title: "TechBow Robotics",
    description:
      "An automated sensor-based robotics module. Chosen for the Prakalp Pradarshan Innovation Showcase.",
    image: "/projects/project5.png",
    tags: ["Robotics", "Hardware", "Sensors"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-left max-w-xl">
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase scroll-reveal reveal-left">
            // TELEMETRY.PORTFOLIO // PROJECTS
          </span>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3 scroll-reveal reveal-up" data-delay="100">
            Projects that <span className="italic font-normal text-slate-600">make an impact.</span>
          </h2>
        </div>

        {/* Projects 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_25px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-all duration-300 scroll-reveal reveal-up flex flex-col justify-between"
              data-delay={100 + (idx * 80)} // Staggered delay for one-by-one appearance
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[16/10] bg-slate-50 border-b border-slate-100 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Clean hover action links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/20 backdrop-blur-[1px]">
                  <a
                    href={project.link}
                    className="p-2.5 rounded-full bg-white text-slate-800 border border-slate-200/85 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="p-2.5 rounded-full bg-white text-slate-800 border border-slate-200/85 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold tracking-tight text-slate-900 font-sans group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-50">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-55 border border-slate-200/60 text-[9px] font-mono text-slate-500 font-medium bg-slate-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA - Sleek & Compact */}
        <div className="text-left pt-2 scroll-reveal reveal-up" data-delay="350">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-amber-600 transition-colors"
          >
            <span>Interested in collaboration?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};