// import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
// import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// const projects = [
//   {
//     title: "CivicaConnect",
//     description:
//       "A Retrieval-Augmented Generation (RAG) assistant enabling regional language users to access local government services natively.",
//     image: "/projects/project1.png",
//     tags: ["Python", "LLMs", "RAG", "AI"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Prompt-to-UI",
//     description:
//       "An AI-powered generator that converts natural language prompts into structural UI code layouts dynamically.",
//     image: "/projects/project2.png",
//     tags: ["Python", "LLMs", "Frontend", "AI"],
//     link: "#",
//     github: "https://github.com/ayesha25-mahek/prompt-to-UI-generator",
//   },
//   {
//     title: "LendLand P2P",
//     description:
//       "A peer-to-peer sharing ecosystem enabling academic groups to safely exchange books and hardware items.",
//     image: "/projects/project3.png",
//     tags: ["React", "Node.js", "Express", "MongoDB"],
//     link: "#",
//     github: "https://github.com/ayesha25-mahek/LendLand",
//   },
//   {
//     title: "Aegis Surveillance",
//     description:
//       "An autonomous drone security solution designed to monitor perimeters and trigger localized warning signals.",
//     image: "/projects/project4.png",
//     tags: ["IoT", "Drone", "Sensors", "Embedded"],
//     link: "#",
//     github: "#",
//   },
//   { 
//     title: "TechBow Robotics",
//     description:
//       "An automated sensor-based robotics module. Chosen for the Prakalp Pradarshan Innovation Showcase.",
//     image: "/projects/project5.png",
//     tags: ["Robotics", "Hardware", "Sensors"],
//     link: "#",
//     github: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
      
//       <div className="relative z-10 space-y-12">
//         {/* Section Header */}
//         <div className="text-left max-w-xl">
//           <span className="text-slate-400 text-xs font-mono tracking-widest uppercase scroll-reveal reveal-left">
//             // TELEMETRY.PORTFOLIO // PROJECTS
//           </span>
//           <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3 scroll-reveal reveal-up" data-delay="100">
//             Projects that <span className="italic font-normal text-slate-600">make an impact.</span>
//           </h2>
//         </div>

//         {/* Projects 3-Column Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_25px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-all duration-300 scroll-reveal reveal-up flex flex-col justify-between"
//               data-delay={100 + (idx * 80)} // Staggered delay for one-by-one appearance
//             >
//               {/* Image Frame */}
//               <div className="relative overflow-hidden aspect-[16/10] bg-slate-50 border-b border-slate-100 flex-shrink-0">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
                
//                 {/* Clean hover action links overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/20 backdrop-blur-[1px]">
//                   <a
//                     href={project.link}
//                     className="p-2.5 rounded-full bg-white text-slate-800 border border-slate-200/85 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
//                   >
//                     <ArrowUpRight className="w-4 h-4" />
//                   </a>
//                   <a
//                     href={project.github}
//                     className="p-2.5 rounded-full bg-white text-slate-800 border border-slate-200/85 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
//                   >
//                     <Github className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
//                 <div className="space-y-1.5">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-sm font-semibold tracking-tight text-slate-900 font-sans group-hover:text-amber-600 transition-colors">
//                       {project.title}
//                     </h3>
//                     <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
//                   </div>
//                   <p className="text-[11.5px] text-slate-500 leading-relaxed font-sans font-light">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Tech Badges */}
//                 <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-50">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-2 py-0.5 rounded-md bg-slate-55 border border-slate-200/60 text-[9px] font-mono text-slate-500 font-medium bg-slate-50"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA - Sleek & Compact */}
//         <div className="text-left pt-2 scroll-reveal reveal-up" data-delay="350">
//           <a
//             href="#contact"
//             onClick={(e) => {
//               e.preventDefault();
//               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-amber-600 transition-colors"
//           >
//             <span>Interested in collaboration?</span>
//             <ArrowRight className="w-3.5 h-3.5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

import { ArrowUpRight, Github, ArrowRight, Briefcase, Cpu, FolderKanban, Award } from "lucide-react";

const clientProjects = [
  {
    title: "SK Tent House",
    description:
      "Designed and developed a professional business website for a tent house owner, delivered end-to-end from requirements gathering to live deployment.",
    image: "/projects/sk-tent-house.png",
    tags: ["React", "CSS", "Vite"],
    link: "https://sk-tent-house.vercel.app/",
    github: "https://github.com/ayesha25-mahek/SKTentHouse",
  },
  {
  title: "Salman Dairy",
  description:
    "Designed and developed a business website for a local dairy owner who delivers fresh milk directly to customers' homes, covering the project from client requirements to live deployment.",
  image: "/projects/salman-dairy.png",
  tags: ["React", "CSS", "Vite"],
  link: "https://salman-dairy.vercel.app/",
  github: "https://github.com/ayesha25-mahek/Salman_Dairy",
},
];

const technicalProjects = [
  {
    title: "Sales Call Intelligence",
    description:
      "AI-powered sales coaching tool that transcribes live sales calls, analyses sentiment, detects objections, and gives real-time feedback. Includes call record storage, voice recordings, and an analytics dashboard. Frontend is deployed; backend is not yet hosted due to infrastructure costs.",
    image: "/projects/sales-call-intelligence.png",
    tags: [
      "React 19",
      "Tailwind CSS v4",
      "TanStack Query",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Groq Whisper",
      "Groq LLaMA 3",
      "spaCy",
      "NLTK VADER",
      "Docker",
    ],
    link: "https://sales-call-intelligence-eosin.vercel.app/",
    github: "https://github.com/ayesha25-mahek/SalesCallIntelligence",
  },
  {
    title: "Switch & Code",
    description:
      "Daily coding challenge platform for juniors to sharpen programming skills, featuring daily questions, a scoring system, and leaderboards. Also used to conduct a coding contest and received a certificate of recognition.",
    image: "/projects/switch-and-code.png",
    tags: ["React", "Firebase", "Firestore"],
    link: "https://switch-and-code.vercel.app/",
    github: "https://github.com/ayesha25-mahek/Switch_and_Code",
  },
  {
    title: "Personal Portfolio",
    description:
      "Developer portfolio showcasing projects, skills, and experience with a clean modern design.",
    image: "/projects/personal-portfolio.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://ayeshamahek.xyz",
    github: "https://github.com/ayesha25-mahek/AyeshaMahek_Portfolio",
  },
  {
    title: "Prompt-to-UI Generator",
    description:
      "AI-powered system that converts natural language prompts into UI components and frontend code using LLMs to dynamically generate intelligent UI layouts.",
    image: "/projects/prompt-to-ui.png",
    tags: ["Python", "LLM APIs", "Frontend"],
    link: "",
    github: "https://github.com/ayesha25-mahek/prompt-to-UI-generator",
  },
  {
    title: "LendLand",
    description:
      "Full-stack platform for students to borrow and lend books or gadgets securely. Includes authentication, CRUD operations, and database management.",
    image: "/projects/lendland.svg",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "",
    github: "https://github.com/ayesha25-mahek/LendLand",
  },
  {
    title: "AI Personal Reminder Assistant",
    description:
      "Reminder system that understands natural language like 'Remind me to study in 20 minutes,' with NLP-based time extraction, automated scheduling, and a web-based dashboard.",
    image: "/projects/ai-reminder-assistant.svg",
    tags: ["Python", "FastAPI", "JavaScript", "LLM APIs"],
    link: "",
    github: "https://github.com/ayesha25-mahek/ai-assistant-",
  },
  {
    title: "WhatsApp Network Bot",
    description:
      "Personal productivity bot on WhatsApp that stores and retrieves professional connections and supports role-based lookup such as 'web developers'.",
    image: "/projects/whatsapp-network-bot.svg",
    tags: ["Python", "WhatsApp API", "Twilio API"],
    link: "",
    github: "https://github.com/ayesha25-mahek/Whatsapp_Network_Bot",
  },
  {
    title: "CivicaConnect",
    description:
      "RAG-based application helping regional language speakers access government service information in their native language through semantic search and multilingual responses.",
    image: "/projects/civica-connect.svg",
    tags: ["Python", "LLM APIs", "RAG", "Semantic Search"],
    link: "",
    github: "",
  },
];

const hardwareProjects = [
  {
    title: "Aegis Surveillance",
    description:
      "An autonomous drone security solution designed to monitor perimeters and trigger localized warning signals.",
    image: "/projects/aegis-surveillance.png",
    tags: ["IoT", "Drone", "Sensors", "Embedded"],
    link: "",
    github: "",
  },
  {
    title: "TechBow Robotics",
    description:
      "An automated sensor-based robotics module selected for the Prakalp Pradarshan Innovation Showcase.",
    image: "/projects/techbow-robotics.png",
    tags: ["Robotics", "Hardware", "Sensors"],
    link: "",
    github: "",
  },
];

const responsibilities = [
  {
    title: "Leader",
    organization: "U&I",
    period: "Mar 2026 – Present",
    description:
      "Currently serving as a leader after contributing for the previous year as a volunteer.",
  },
  {
    title: "Volunteer",
    organization: "U&I",
    period: "Until Mar 2026",
    description:
      "Served as a volunteer for about one year before transitioning into a leadership role.",
  },
  {
    title: "Organiser",
    organization: "Model United Nations (MUN), CMR College",
    period: "Jan 2026",
    description:
      "Coordinated event responsibilities and execution as part of the organising team.",
  },
  {
    title: "Volunteer",
    organization: "36-Hour Hackathon, CMR College",
    period: "Dec 2025",
    description:
      "Supported coordination and smooth on-ground event management during the hackathon.",
  },
  {
    title: "Volunteer",
    organization: "Hackathon, CMR College",
    period: "Jan 2026",
    description:
      "Assisted with event operations and participant support during the hackathon.",
  },
];

const SectionHeader = ({ eyebrow, title, italic }) => (
  <div className="text-left max-w-2xl">
    <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">
      {eyebrow}
    </span>
    <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3">
      {title} <span className="italic font-normal text-slate-600">{italic}</span>
    </h2>
  </div>
);

const ProjectCard = ({ project }) => {
  const hasLive = project.link && project.link !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_25px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-50 border-b border-slate-100 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {(hasLive || hasGithub) && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/20 backdrop-blur-[1px]">
            {hasLive && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live project ${project.title}`}
                className="p-2.5 rounded-full bg-white text-slate-800 border border-slate-200/85 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub repository for ${project.title}`}
                className="p-2.5 rounded-full bg-white text-slate-800 border border-slate-200/85 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900 font-sans group-hover:text-amber-600 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0" />
          </div>

          <p className="text-[12px] text-slate-500 leading-relaxed font-sans font-light">
            {project.description}
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-2 py-0.5 rounded-md border border-slate-200/60 text-[10px] font-mono text-slate-500 font-medium bg-slate-50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-wide text-slate-500">
            {hasLive && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600 transition-colors"
              >
                Live Demo
              </a>
            )}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const ResponsibilityCard = ({ item }) => (
  <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.01)]">
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-900">
          {item.title} <span className="text-slate-500 font-normal">| {item.organization}</span>
        </h3>
        <span className="text-[11px] font-mono uppercase tracking-wide text-slate-400">
          {item.period}
        </span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">
        {item.description}
      </p>
    </div>
  </article>
);

const ProjectGroup = ({ id, icon: Icon, eyebrow, title, italic, projects }) => (
  <section id={id} className="space-y-8">
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700">
        <Icon className="h-4 w-4" />
      </div>
      <SectionHeader eyebrow={eyebrow} title={title} italic={italic} />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <ProjectCard key={`${project.title}-${idx}`} project={project} />
      ))}
    </div>
  </section>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="relative z-10 space-y-20">
        <ProjectGroup
          id="client-projects"
          icon={Briefcase}
          eyebrow="// PORTFOLIO // CLIENT PROJECTS"
          title="Work delivered for"
          italic="real clients."
          projects={clientProjects}
        />

        <ProjectGroup
          id="technical-projects"
          icon={FolderKanban}
          eyebrow="// PORTFOLIO // TECHNICAL PROJECTS"
          title="Software projects built"
          italic="hands-on."
          projects={technicalProjects}
        />

        <ProjectGroup
          id="hardware-projects"
          icon={Cpu}
          eyebrow="// PORTFOLIO // HARDWARE PROJECTS"
          title="Hardware systems and"
          italic="embedded builds."
          projects={hardwareProjects}
        />

        <section id="responsibility" className="space-y-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700">
              <Award className="h-4 w-4" />
            </div>
            <SectionHeader
              eyebrow="// EXPERIENCE // POSITIONS OF RESPONSIBILITY"
              title="Leadership, coordination,"
              italic="and community work."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((item, idx) => (
              <ResponsibilityCard key={`${item.title}-${idx}`} item={item} />
            ))}
          </div>
        </section>

        <div className="text-left pt-2">
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