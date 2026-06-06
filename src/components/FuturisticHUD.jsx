import { useEffect, useRef, useState } from "react";
import { Compass, Cpu, Anchor, Shield, Mail } from "lucide-react";

export const FuturisticHUD = ({ activeSection, scrollProgress }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef(null);
  
  const sections = [
    { id: "about", label: "ABOUT", angle: 0, icon: Compass },
    { id: "projects", label: "PROJECTS", angle: 72, icon: Cpu },
    { id: "experience", label: "CAREER", angle: 144, icon: Anchor },
    { id: "achievements", label: "AWARDS", angle: 216, icon: Shield },
    { id: "contact", label: "CONTACT", angle: 288, icon: Mail },
  ];

  // 1. Sync rotation angle with the active section from scrolling
  useEffect(() => {
    if (isDragging) return;
    const targetSection = sections.find((s) => s.id === activeSection);
    if (targetSection) {
      // Smoothly rotate the wheel to line up with the active section
      // We rotate it such that the active section is at the top (angle = -90 or 0 depending on offset)
      // Let's align active to 0 deg (or 270 deg at top). If we rotate by -targetSection.angle,
      // it shifts the active section to the active indicator point (right, 0deg)
      setRotationAngle(-targetSection.angle);
    }
  }, [activeSection, isDragging]);

  // 2. Handle Drag to Rotate Interaction
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
      const rect = wheelRef.current.getBoundingClientRect();
      const wheelX = rect.left + rect.width / 2;
      const wheelY = rect.top + rect.height / 2;

      // Calculate angle from center of wheel
      const dx = clientX - wheelX;
      const dy = clientY - wheelY;
      let angleRad = Math.atan2(dy, dx);
      let angleDeg = angleRad * (180 / Math.PI);

      // Clamp angleDeg from 0 to 360
      if (angleDeg < 0) angleDeg += 360;

      // Normalize it relative to our section angles (shift it so drag moves sections)
      // Calculate which section is closest
      const closestSection = sections.reduce((prev, curr) => {
        // Map target angles. We offset by rotationAngle
        const diffPrev = Math.abs(((prev.angle + angleDeg) % 360) - 360) % 360;
        const diffCurr = Math.abs(((curr.angle + angleDeg) % 360) - 360) % 360;
        return diffCurr < diffPrev ? curr : prev;
      });

      // Update rotation angle to follow cursor
      setRotationAngle(-angleDeg);

      // Scroll window to matching section
      const targetElement = document.getElementById(closestSection.id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleUp = () => {
      setIsDragging(false);
    };

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

  const handleSectionClick = (id, targetAngle) => {
    setRotationAngle(-targetAngle);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Coords for HUD display
  const latValue = (17.3850 + (scrollProgress / 100) * 0.05).toFixed(4);
  const lngValue = (78.4867 - (scrollProgress / 100) * 0.03).toFixed(4);

  return (
    <div className="fixed right-6 bottom-6 md:right-10 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-40 select-none hidden sm:block">
      {/* HUD Panel Outer Border */}
      <div className="glass p-6 rounded-3xl border-primary/20 glow-border flex flex-col items-center gap-4 w-72 hud-corners">
        <div className="hud-corners-child" />
        
        {/* Holographic Header */}
        <div className="w-full border-b border-primary/10 pb-2 mb-2 flex items-center justify-between font-mono text-[10px] text-gray-500">
          <span>COORDINATES: SEC-07</span>
          <span className="text-primary animate-pulse">HUD.ACTIVE</span>
        </div>

        {/* HUD Rotational Interactive Wheel */}
        <div 
          ref={wheelRef}
          className="relative w-48 h-48 flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Concentric ambient background spin ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-primary/10 animate-spin-reverse-slow pointer-events-none" />
          
          {/* Concentric rotating ticks ring */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none text-primary/30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,3" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,15" />
            <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          {/* Active section selector triangle (at 0 degrees / Right) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center">
            <span className="text-primary text-[10px] animate-pulse">◀</span>
          </div>

          {/* Main Rotatable Group Container */}
          <div 
            className="w-full h-full relative transition-transform duration-700 ease-out"
            style={{ 
              transform: `rotate(${rotationAngle}deg)`,
              willChange: "transform"
            }}
          >
            {sections.map((sect) => {
              const rad = (sect.angle * Math.PI) / 180;
              const radius = 64; // Distance from center
              const x = 96 + radius * Math.cos(rad);
              const y = 96 + radius * Math.sin(rad);
              const isActive = activeSection === sect.id;
              const Icon = sect.icon;

              return (
                <button
                  key={sect.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionClick(sect.id, sect.angle);
                  }}
                  className={`absolute w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 ${
                    isActive 
                      ? "bg-primary text-black scale-110 shadow-[0_0_15px_rgba(255,204,0,0.6)] border border-primary" 
                      : "bg-black/80 text-gray-500 border border-primary/20 hover:border-primary hover:text-primary hover:scale-105"
                  }`}
                  style={{ 
                    left: `${x}px`, 
                    top: `${y}px`,
                    transform: `rotate(${-rotationAngle}deg)` // Keep icons upright
                  }}
                  title={sect.label}
                >
                  <Icon size={14} />
                </button>
              );
            })}
          </div>

          {/* Hologram Center display */}
          <div className="absolute w-20 h-20 rounded-full bg-black/90 flex flex-col items-center justify-center text-center border border-primary/20 pointer-events-none shadow-[inset_0_0_10px_rgba(255,204,0,0.1)]">
            <div className="text-[9px] text-gray-500 font-mono tracking-wider">HUD.VAL</div>
            <div className="text-primary font-mono text-[10px] font-bold mt-0.5 uppercase tracking-wide">
              {activeSection === "about" ? "HERO" : activeSection}
            </div>
            <div className="text-[8px] text-gray-500 font-mono mt-0.5">
              {Math.round(rotationAngle)}°
            </div>
          </div>
        </div>

        {/* Telemetry diagnostics display */}
        <div className="w-full text-left font-mono text-[10px] space-y-1 bg-black/40 p-3 rounded-xl border border-primary/5">
          <div className="flex justify-between">
            <span className="text-gray-600">SYS.STATUS:</span>
            <span className="text-green-500">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ORBIT.ALT:</span>
            <span className="text-primary">{348 + Math.round(scrollProgress * 2)} KM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">LAT.COORD:</span>
            <span className="text-gray-400">{latValue} N</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">LNG.COORD:</span>
            <span className="text-gray-400">{lngValue} E</span>
          </div>
          <div className="pt-1.5 mt-1.5 border-t border-primary/5">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TELEMETRY_LOG:</span>
              <span className="text-primary font-bold">{Math.round(scrollProgress)}%</span>
            </div>
            <div className="w-full bg-gray-900 h-1 rounded-full mt-1 overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
