import { Trophy, Award, Rocket } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "HackForce Hackathon",
    description:
      "Selected participant for HackForce Hackathon – Evolve X Internship Program, showcasing problem-solving and development skills.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "B2B Project Expo – CMRCET",
    description:
      "Selected for B2B Project Expo at CMRCET for 'Drone Aegis', highlighting innovation in autonomous systems.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Prakalp Pradarshan – CMRCET",
    description:
      "Selected for Prakalp Pradarshan Innovation Showcase at CMRCET for 'TechBow', focusing on impactful tech solutions.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-blue-50/50 rounded-3xl border border-blue-200/80 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.015)] scroll-reveal reveal-up">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">// RECOGNITION</span>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3">Milestones & Achievements</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:scale-105 transition-all duration-300 relative group"
            >
              <div className="absolute right-4 top-4 font-mono text-[8px] text-slate-400 font-bold uppercase tracking-wider">LOG.0{index + 1}</div>
              
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200/60 shadow-sm mb-4">
                {item.icon}
              </div>

              <h3 className="text-sm font-semibold mb-2 font-sans tracking-wide text-slate-950">
                {item.title}
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};