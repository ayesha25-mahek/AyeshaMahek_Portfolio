import { Button } from "../components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Youtube,
  PhoneCall,
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[40vh] pt-6 pb-12 overflow-hidden bg-blue-50/30 rounded-3xl border border-blue-100/50 p-6 md:p-8">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-100/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container: Flex row on desktop, column on mobile */}
      <div className="w-full relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
        
        {/* Left Side: Small Profile Photo Box & Status */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0 w-36">
          <div className="w-36 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-50">
            <img
              src="/profile-photo.jpg"
              alt="Ayesha Mahek"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Available for Work Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 border border-green-100">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-medium text-green-700 tracking-wider font-sans uppercase">
              Available
            </span>
          </div>
        </div>

        {/* Right Side: Intro Text & Action buttons */}
        <div className="flex-1 space-y-5">
          
          {/* Welcome small header tag */}
          <div className="scroll-reveal reveal-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/60 border border-slate-300/40 text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
              SYSTEM INIT.ESTABLISHED
            </span>
          </div>

          {/* Compact Heading - Sleek & Serif */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 tracking-tight leading-tight scroll-reveal reveal-up" data-delay="100">
            I build digital solutions with
            <br />
            <span className="italic font-normal text-slate-600">precision & purpose.</span>
          </h1>

          {/* Subtext description */}
          <p className="text-xs md:text-sm text-slate-500 max-w-xl leading-relaxed scroll-reveal reveal-up" data-delay="200">
            Welcome to my interactive workspace. I'm Ayesha Mahek, a developer creating fast, responsive websites and hardware integration nodes for businesses and startups.
          </p>

          {/* CTA Buttons - Strictly side-by-side */}
          <div className="flex flex-row items-center gap-3 scroll-reveal reveal-up pt-1" data-delay="300">
            <Button
              size="sm"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm px-5 py-2 text-xs"
            >
              Contact Me <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
            
            <a
              href="https://drive.google.com/file/d/1ymMYhz7hs4Ns3dSwjupBzLpK01SvRvHv/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-sm px-5 py-2 transition-all flex items-center gap-1 text-xs font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100/50 w-full max-w-xs">
            {[
              { icon: Youtube, href: "https://youtube.com/@ayeshamahek25?si=nFhkp3kuyFjv3xQx", label: "YouTube" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ayesha-mahek-98673134a/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/ayesha25-mahek", label: "GitHub" },
              { icon: PhoneCall, href: "tel:7842441023", label: "Call Me" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                title={social.label}
                className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all duration-300 flex items-center justify-center"
              >
                <social.icon size={13} />
              </a>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};