import { useState, useRef, useEffect } from "react";
import { 
  Home, 
  Cpu, 
  Briefcase, 
  Award, 
  Mail,
  GraduationCap
} from "lucide-react";

export const About = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef(null);

  const sections = [
    {
      id: "home",
      label: "Home",
      angle: 0,
      icon: Home,
      targetScroll: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      description: "Welcome sector and core greeting logs."
    },
    {
      id: "education",
      label: "Education",
      angle: 60,
      icon: GraduationCap,
      targetScroll: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }),
      description: "Academic qualification registry and training records."
    },
    {
      id: "projects",
      label: "Projects",
      angle: 120,
      icon: Cpu,
      targetScroll: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
      description: "Index of engineering deliverables, applications, and source repositories."
    },
    {
      id: "experience",
      label: "Experience",
      angle: 180,
      icon: Briefcase,
      targetScroll: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }),
      description: "Chronology of internships, industry roles, and teaching services."
    },
    {
      id: "achievements",
      label: "Achievements",
      angle: 240,
      icon: Award,
      targetScroll: () => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" }),
      description: "Registry of hackathons, innovation prizes, and event selections."
    },
    {
      id: "contact",
      label: "Contact",
      angle: 300,
      icon: Mail,
      targetScroll: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
      description: "Secure uplink terminal to initiate direct communication packets."
    }
  ];

  useEffect(() => {
    if (isDragging) return;
    setRotationAngle(-sections[activeCategoryIdx].angle);
  }, [activeCategoryIdx, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientX, clientY) => {
      if (!wheelRef.current) return;
      const rect = wheelRef.current.getBoundingClientRect();
      const wheelX = rect.left + rect.width / 2;
      const wheelY = rect.top + rect.height / 2;

      const dx = clientX - wheelX;
      const dy = clientY - wheelY;
      let angleRad = Math.atan2(dy, dx);
      let angleDeg = angleRad * (180 / Math.PI);

      if (angleDeg < 0) angleDeg += 360;

      const closestIdx = sections.reduce((prevIdx, currSec, currIdx) => {
        const prevSec = sections[prevIdx];
        const diffPrev = Math.abs(((prevSec.angle + angleDeg) % 360) - 360) % 360;
        const diffCurr = Math.abs(((currSec.angle + angleDeg) % 360) - 360) % 360;
        return diffCurr < diffPrev ? currIdx : prevIdx;
      }, 0);

      setRotationAngle(-angleDeg);
      setActiveCategoryIdx(closestIdx);

      // Perform scrolling scroll
      sections[closestIdx].targetScroll();
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging]);

  const handleNodeClick = (idx, angle) => {
    setActiveCategoryIdx(idx);
    setRotationAngle(-angle);
    sections[idx].targetScroll();
  };

  const activeSection = sections[activeCategoryIdx];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-blue-50/50 rounded-3xl border border-blue-200/80 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.015)] scroll-reveal reveal-up">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: One-Line bio & Description */}
        <div className="flex-1 space-y-6">
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">
            // TELEMETRY.BIO // ABOUT ME
          </span>
          
          {/* Mockup Cursive / Serif Style Description */}
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-serif italic text-left">
            I'm Ayesha Mahek, a B.Tech student and aspiring full-stack developer passionate about building real-world solutions using modern tech and AI.
          </p>
          
          <div className="hidden lg:block text-slate-400 text-xs font-mono space-y-2 border-t border-slate-100 pt-4">
            <div className="flex justify-between">
              <span>INDEX NAVIGATION:</span>
              <span className="text-slate-800 font-bold uppercase">{activeSection.label}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
              {activeSection.description}
            </p>
          </div>
        </div>

        {/* Right: Rotating Selector HUD Wheel */}
        <div className="flex flex-col items-center justify-center space-y-4 flex-shrink-0">
          <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase">
            SPIN WHEEL TO TRANSIT SECTORS
          </span>
          
          <div 
            ref={wheelRef}
            className="relative w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center cursor-grab active:cursor-grabbing z-20"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Spinning decorative ring */}
            <div className="absolute inset-1.5 rounded-full border border-dashed border-slate-200 animate-spin-reverse-slow pointer-events-none" />
            
            {/* Concentric Grid lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-200" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,3" />
              <circle cx="50" cy="50" r="37" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* Pointer notch */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-800 text-[10px] animate-pulse">
              ◀
            </div>

            {/* Rotatable buttons */}
            <div 
              className="w-full h-full relative transition-transform duration-500 ease-out"
              style={{ 
                transform: `rotate(${rotationAngle}deg)`,
                willChange: "transform"
              }}
            >
              {sections.map((sec, idx) => {
                const rad = (sec.angle * Math.PI) / 180;
                const radius = 68; // Radius distance
                const x = 96 + radius * Math.cos(rad);
                const y = 96 + radius * Math.sin(rad);
                const isActive = activeCategoryIdx === idx;
                const Icon = sec.icon;

                return (
                  <button
                    key={sec.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNodeClick(idx, sec.angle);
                    }}
                    className={`absolute w-8.5 h-8.5 rounded-full flex items-center justify-center transition-all duration-300 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 ${
                      isActive 
                        ? "bg-slate-900 text-white scale-110 shadow-sm" 
                        : "bg-white text-slate-400 border border-slate-200 hover:border-slate-800 hover:text-slate-800 hover:scale-105"
                    }`}
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`,
                      transform: `rotate(${-rotationAngle}deg)`
                    }}
                    title={sec.label}
                  >
                    <Icon size={14} />
                  </button>
                );
              })}
            </div>

            {/* Inner display core */}
            <div className="absolute w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center text-center border border-slate-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)] pointer-events-none z-10">
              <span className="text-[7px] text-slate-400 font-mono tracking-widest uppercase">NAVIGATE</span>
              <span className="text-slate-800 font-mono text-[10px] font-bold mt-0.5 uppercase tracking-wider">
                {activeSection.label}
              </span>
              <span className="text-[7px] text-slate-400 font-mono mt-0.5">
                {Math.round(rotationAngle)}°
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};