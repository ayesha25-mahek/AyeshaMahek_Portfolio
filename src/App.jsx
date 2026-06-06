import { useEffect, useRef, useState } from "react";
import { supabase } from "./lib/supabase";

import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { OpeningCinematic } from "./components/OpeningCinematic";

// Minimalist particle constellation background component
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    const maxParticles = 60;
    const mouse = { x: null, y: null, radius: 100 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseColor = "rgba(15, 23, 42, 0.05)";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse collision
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.2;
            this.y += Math.sin(angle) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor;
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(15, 23, 42, ${0.03 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

function App() {
  const [cinematicLoader, setCinematicLoader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("test").select("*");
      console.log("DATA:", data);
      console.log("ERROR:", error);
    }
    testConnection();
  }, []);

  // Scroll spy tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const sectionIds = ["education", "projects", "experience", "achievements", "contact"];
      let currentActive = "home";

      if (scrollPos < 200) {
        setActiveSection("home");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    if (cinematicLoader) return;

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        } else {
          entry.target.classList.remove("revealed");
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(".scroll-reveal");
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const revealElements = document.querySelectorAll(".scroll-reveal");
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [cinematicLoader]);

  const navLinks = [
    { id: "home", label: "Home", target: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { id: "education", label: "Education", target: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "projects", label: "Projects", target: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "experience", label: "Experience", target: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "achievements", label: "Achievements", target: () => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "contact", label: "Contact", target: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }
  ];

  return (
    <>
      {cinematicLoader && (
        <OpeningCinematic onComplete={() => setCinematicLoader(false)} />
      )}

      <div 
        className={`min-h-screen relative overflow-hidden transition-all duration-1000 bg-[var(--color-background)] ${
          cinematicLoader ? "opacity-0 scale-95 blur-xl pointer-events-none" : "opacity-100 scale-100 blur-none"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(15,23,42,0.02),rgba(255,255,255,0))] pointer-events-none z-0" />
        <div className="absolute inset-0 hud-grid opacity-[0.01] pointer-events-none z-0" />
        <ParticleBackground />

        <Navbar />

        {/* Floating Capsule Menu */}
        {!cinematicLoader && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 hover:bg-slate-900/95 transition-all duration-300 text-slate-100 rounded-full px-6 py-3.5 border border-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center gap-6 text-sm font-semibold backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.target}
                className={`hover:text-amber-500 transition-colors cursor-pointer text-xs font-mono uppercase tracking-widest ${
                  activeSection === link.id ? "text-amber-400 font-bold" : "text-slate-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* Modern Single Column Layout */}
        <div className="container mx-auto max-w-4xl px-6 pt-28 pb-20 relative z-10">
          <div className="space-y-20 lg:space-y-28">
            <Hero />
            <About />
            <Education />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;