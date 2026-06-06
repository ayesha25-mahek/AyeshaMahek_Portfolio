import { useEffect, useRef, useState } from "react";

export const OpeningCinematic = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState("typewriter"); // typewriter, warp, flash, done
  const [bootLines, setBootLines] = useState([]);
  const [systemLoaded, setSystemLoaded] = useState(false);

  const bootText = [
    "AYESHA MAHEK",
    "WEB DEVELOPER"
  ];

  // 1. Boot Text Typewriter Effect
  useEffect(() => {
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let currentLineText = "";
    let interval;

    const typeChar = () => {
      if (currentLineIndex < bootText.length) {
        const fullLine = bootText[currentLineIndex];
        if (currentCharIndex < fullLine.length) {
          currentLineText += fullLine[currentCharIndex];
          setBootLines((prev) => {
            const next = [...prev];
            next[currentLineIndex] = currentLineText;
            return next;
          });
          currentCharIndex++;
        } else {
          // Move to next line
          currentLineIndex++;
          currentCharIndex = 0;
          currentLineText = "";
          setTimeout(typeChar, 400); // Pause between lines
          return;
        }
        interval = setTimeout(typeChar, 60); // Speed of typing
      } else {
        // All lines typed
        setSystemLoaded(true);
      }
    };

    typeChar();

    return () => clearTimeout(interval);
  }, []);

  // 2. Starfield Simulation (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Stars Setup
    const numStars = 200;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * canvas.width,
        color: Math.random() > 0.4 ? "#0f172a" : "#cbd5e1", // Deep slate and light gray stars
      });
    }

    let speed = 1.5;
    let isWarping = false;

    if (phase === "warp") {
      isWarping = true;
    }

    const animate = () => {
      if (isWarping) {
        ctx.fillStyle = "rgba(248, 250, 252, 0.15)"; // Soft off-white trails
        speed = Math.min(speed + 0.6, 40);
      } else {
        ctx.fillStyle = "#f8fafc"; // Soft off-white background
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width;
          star.y = (Math.random() - 0.5) * canvas.height;
          star.z = canvas.width;
        }

        const px = (star.x / star.z) * canvas.width + cx;
        const py = (star.y / star.z) * canvas.height + cy;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / canvas.width) * 3.5;
          
          ctx.beginPath();
          
          if (isWarping) {
            const prevZ = star.z + speed * 1.5;
            const pXprev = (star.x / prevZ) * canvas.width + cx;
            const pYprev = (star.y / prevZ) * canvas.height + cy;
            
            ctx.strokeStyle = star.color;
            ctx.lineWidth = Math.min(size, 2);
            ctx.moveTo(px, py);
            ctx.lineTo(pXprev, pYprev);
            ctx.stroke();
          } else {
            ctx.fillStyle = star.color;
            ctx.arc(px, py, Math.max(size, 0.5), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [phase]);

  // Auto trigger warp speed once system loads
  useEffect(() => {
    if (systemLoaded && phase === "typewriter") {
      const timer = setTimeout(() => {
        setPhase("warp");
        
        // Play warp then supernova flash
        const warpTimer = setTimeout(() => {
          setPhase("flash");
          
          // Flash lasts 800ms
          const flashTimer = setTimeout(() => {
            setPhase("done");
            if (onComplete) onComplete();
          }, 800);
          
          return () => clearTimeout(flashTimer);
        }, 1600);

        return () => clearTimeout(warpTimer);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [systemLoaded, phase]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-slate-50 select-none">
      <canvas ref={canvasRef} className="absolute inset-0 block" />

      {/* Typewriter text centered dynamically */}
      {phase === "typewriter" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50/65 backdrop-blur-[1px]">
          <div className="text-center space-y-6 max-w-lg">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-slate-900 min-h-[60px] md:min-h-[90px] transition-all duration-300">
              {bootLines[0] || ""}
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-slate-500 min-h-[20px] transition-all duration-300">
              {bootLines[1] || ""}
            </p>
            {systemLoaded && (
              <div className="w-16 h-[2px] bg-slate-900 mx-auto mt-4 animate-pulse" />
            )}
          </div>
        </div>
      )}

      {/* Warp overlay */}
      {phase === "warp" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent pointer-events-none">
          <div className="font-serif tracking-wider text-slate-900 text-2xl font-bold animate-pulse">
            Entering Portfolio...
          </div>
        </div>
      )}

      {/* Supernova Flash Transition Screen */}
      {phase === "flash" && (
        <div 
          className="absolute inset-0 bg-white z-[10000] flex items-center justify-center transition-opacity duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, #cbd5e1 50%, #f8fafc 100%)",
          }}
        />
      )}
    </div>
  );
};
