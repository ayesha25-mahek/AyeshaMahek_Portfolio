import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    period: "2024 — Present",
    degree: "Bachelor of Technology (B.Tech)",
    institution: "CMR College of Engineering & Technology",
    description: "Currently pursuing B.Tech. Engaging in core computer science, software engineering practices, web technologies, and autonomous drone security systems.",
    grade: "Pursuing",
    logoText: "CMRCET",
  },
  {
    period: "2022 — 2024",
    degree: "Intermediate Education (MPC)",
    institution: "Narayana Junior College",
    description: "Completed board curriculum with mathematics, physics, and chemistry specialization.",
    grade: "963 / 1000 Marks",
    logoText: "NJC",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-blue-50/50 rounded-3xl border border-blue-200/80 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.015)] scroll-reveal reveal-up">
      <div className="space-y-8">
        <div>
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">// ACADEMICS</span>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3">Education History</h2>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-slate-100 last:border-none hover:translate-x-1 transition-transform duration-300 gap-4"
            >
              <div className="flex gap-4 items-start">
                {/* Logo Badge */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white text-slate-800 border border-slate-200 shadow-sm font-mono text-[10px] font-bold">
                  {edu.logoText}
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-900 font-sans tracking-wide">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1 font-mono uppercase tracking-wider">
                    {edu.institution} &bull; {edu.period}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed font-sans font-light">
                    {edu.description}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 sm:text-right pl-16 sm:pl-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono text-blue-700 font-bold uppercase tracking-wider">
                  <GraduationCap size={12} />
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
