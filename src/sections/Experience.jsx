const experiences = [
  {
    period: "2026 — Present",
    role: "Software Engineer Intern",
    company: "EvolveX",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "DJango", "Next.js", "RAGs"],
  },
  {
    period: "2025— Present ",
    role: "Volunteer Teacher",
    company: "U&I",
    description:
      "Teaching and mentoring underprivileged students in core academic subjects. Conducting interactive learning sessions and supporting students personal development.",
    technologies: ["Teaching", "Mentoring"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-blue-50/50 rounded-3xl border border-blue-200/80 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.015)] scroll-reveal reveal-up">
      <div className="space-y-8">
        <div>
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">// EXPERIENCE</span>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3">Career Journey</h2>
        </div>

        <div className="space-y-2">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-slate-100 last:border-none hover:translate-x-1 transition-transform duration-300 gap-4"
            >
              <div>
                <h4 className="text-base font-semibold text-slate-900 font-sans tracking-wide">
                  {exp.role}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1 font-mono uppercase tracking-wider">
                  {exp.company} &bull; {exp.period}
                </p>
                <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed font-sans font-light">
                  {exp.description}
                </p>
              </div>

              <div className="flex-shrink-0 text-left sm:text-right">
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {exp.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-[9px] font-mono text-slate-500 font-medium uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};