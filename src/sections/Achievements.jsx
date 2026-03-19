import { Trophy, Award, Rocket } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "HackForce Hackathon",
    description:
      "Selected participant for HackForce Hackathon – Evolve X Internship Program, showcasing problem-solving and development skills.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "B2B Project Expo – CMRCET",
    description:
      "Selected for B2B Project Expo at CMRCET for 'Drone Aegis', highlighting innovation in autonomous systems.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Prakalp Pradarshan – CMRCET",
    description:
      "Selected for Prakalp Pradarshan Innovation Showcase at CMRCET for 'TechBow', focusing on impactful tech solutions.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Milestones & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-muted-foreground">
            A glimpse of my journey through competitions, innovation showcases, and technical growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow-border"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};