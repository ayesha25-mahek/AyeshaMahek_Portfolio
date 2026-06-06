import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Terminal,
} from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ayeshamahek2509@gmail.com",
    href: "mailto:ayeshamahek2509@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "SYSTEM MESSAGE: Transmission sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: "CRITICAL FAIL: Failed to send transmission. Re-attempt later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-blue-50/50 rounded-3xl border border-blue-200/80 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.015)] scroll-reveal reveal-up">
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">// SECURE CHANNEL</span>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight mt-3">Let's build something great</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Terminal Form */}
          <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl relative">
            {/* Terminal Title Bar */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-200 font-mono text-[10px] text-slate-500 font-semibold">
              <Terminal size={12} className="text-indigo-500 animate-pulse" />
              <span>TERMINAL.UPLINK://COMMS.SYS</span>
              <span className="ml-auto w-1.5 h-3 bg-slate-800 animate-pulse" />
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] font-mono tracking-wider text-slate-500 mb-1.5 uppercase"
                >
                  &gt; INPUT.SENDER_NAME:
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="IDENTIFY SENDER..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all font-mono text-xs text-slate-800 placeholder-slate-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-mono tracking-wider text-slate-500 mb-1.5 uppercase"
                >
                  &gt; INPUT.SENDER_EMAIL:
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="SENDER_MAIL@DOMAIN.COM"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all font-mono text-xs text-slate-800 placeholder-slate-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-mono tracking-wider text-slate-500 mb-1.5 uppercase"
                >
                  &gt; INPUT.TRANSMISSION_BODY:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="WRITE SECURE TRANSMISSION DATA..."
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all resize-none font-mono text-xs text-slate-800 placeholder-slate-300"
                />
              </div>

              <Button
                className="w-full font-mono uppercase tracking-widest text-[10px] font-bold py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-xl"
                type="submit"
                size="default"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>TRANSMITTING...</>
                ) : (
                  <span className="flex items-center justify-center gap-1.5">
                    EXECUTE TRANSMISSION
                    <Send className="w-3.5 h-3.5" />
                  </span>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl font-mono text-[10px] ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-700"
                         : "bg-red-500/10 border border-red-500/20 text-red-700"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase">// DIRECT NODES</h3>
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200/60 hover:border-slate-800 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-all text-slate-500 group-hover:text-slate-900">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.label}
                      </div>
                      <div className="font-semibold text-xs text-slate-800 transition-colors font-sans">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Note */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] tracking-wider text-slate-700 font-bold">UPLINK STATUS: OPEN</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                I'm currently open to new opportunities and exciting projects. Let's discuss how we can work together to turn your ideas into functional products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};