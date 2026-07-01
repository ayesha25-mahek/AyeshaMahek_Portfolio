const skillCategories = {
  Languages:    { color: "#6366f1", dot: "bg-indigo-400" },
  Frontend:     { color: "#0ea5e9", dot: "bg-sky-400" },
  Backend:      { color: "#10b981", dot: "bg-emerald-400" },
  "AI / ML":    { color: "#f59e0b", dot: "bg-amber-400" },
  Databases:    { color: "#ec4899", dot: "bg-pink-400" },
  "DevOps & Tools": { color: "#8b5cf6", dot: "bg-violet-400" },
};

const allSkills = [
  // Row 1 — Languages + Frontend + Backend
  {
    row: 1,
    items: [
      { label: "Python",           category: "Languages" },
      { label: "Java",             category: "Languages" },
      { label: "C",                category: "Languages" },
      { label: "C++ (Basic)",      category: "Languages" },
      { label: "JavaScript",       category: "Languages" },
      { label: "React 19 (Vite)", category: "Frontend" },
      { label: "HTML",             category: "Frontend" },
      { label: "CSS",              category: "Frontend" },
      { label: "Tailwind CSS v4",  category: "Frontend" },
      { label: "React Router DOM", category: "Frontend" },
      { label: "TanStack React Query", category: "Frontend" },
      { label: "Recharts",         category: "Frontend" },
      { label: "Axios",            category: "Frontend" },
      { label: "Node.js",          category: "Backend" },
      { label: "Express.js",       category: "Backend" },
      { label: "FastAPI",          category: "Backend" },
      { label: "Uvicorn",          category: "Backend" },
      { label: "SQLAlchemy",       category: "Backend" },
      { label: "REST APIs",        category: "Backend" },
    ],
  },
  // Row 2 — AI/ML + Databases + DevOps & Tools
  {
    row: 2,
    items: [
      { label: "Machine Learning Fundamentals", category: "AI / ML" },
      { label: "Prompt Engineering",            category: "AI / ML" },
      { label: "RAG Applications",              category: "AI / ML" },
      { label: "LLM Integration",               category: "AI / ML" },
      { label: "spaCy",                         category: "AI / ML" },
      { label: "NLTK",                          category: "AI / ML" },
      { label: "Groq Whisper",                  category: "AI / ML" },
      { label: "Groq LLaMA 3",                  category: "AI / ML" },
      { label: "HuggingFace Transformers",      category: "AI / ML" },
      { label: "PostgreSQL (pgvector)",         category: "Databases" },
      { label: "MongoDB",                       category: "Databases" },
      { label: "MySQL",                         category: "Databases" },
      { label: "SQLite",                        category: "Databases" },
      { label: "Firebase (Firestore)",          category: "Databases" },
      { label: "Git",                           category: "DevOps & Tools" },
      { label: "GitHub",                        category: "DevOps & Tools" },
      { label: "Docker",                        category: "DevOps & Tools" },
      { label: "Vercel",                        category: "DevOps & Tools" },
      { label: "Figma",                         category: "DevOps & Tools" },
      { label: "Canva",                         category: "DevOps & Tools" },
    ],
  },
];

const SkillPill = ({ label, category }) => {
  const meta = skillCategories[category] ?? { color: "#94a3b8", dot: "bg-slate-400" };
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 bg-white/70 text-slate-700 text-xs font-medium font-sans whitespace-nowrap shadow-[0_1px_6px_rgba(15,23,42,0.04)] select-none"
      style={{ borderLeftColor: meta.color, borderLeftWidth: "2px" }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: meta.color }}
      />
      {label}
    </span>
  );
};

// Double the array for seamless looping
const double = (arr) => [...arr, ...arr];

export const Skills = () => {
  return (
    <section id="skills" className="py-12 relative overflow-hidden scroll-reveal reveal-up">
      {/* Section header */}
      <div className="mb-8 px-1">
        <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">
          // STACK // TECHNICAL SKILLS
        </span>
        <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3">
          Tools I build <span className="italic font-normal text-slate-600">with.</span>
        </h2>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-7 px-1">
        {Object.entries(skillCategories).map(([name, meta]) => (
          <span key={name} className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: meta.color }} />
            {name}
          </span>
        ))}
      </div>

      {/* Marquee rows */}
      <div className="space-y-3 overflow-hidden">
        {/* Row 1 — scrolls RIGHT (normal direction) */}
        <div
          className="relative flex overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex gap-3 animate-marquee-right">
            {double(allSkills[0].items).map((skill, i) => (
              <SkillPill key={`r1-${i}`} label={skill.label} category={skill.category} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls LEFT (reverse direction) */}
        <div
          className="relative flex overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex gap-3 animate-marquee-left">
            {double(allSkills[1].items).map((skill, i) => (
              <SkillPill key={`r2-${i}`} label={skill.label} category={skill.category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
