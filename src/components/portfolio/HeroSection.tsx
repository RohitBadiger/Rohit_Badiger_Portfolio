import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ArrowDown, Code2, BookOpen } from "lucide-react";
import type { ContactInfo } from "@/hooks/use-resume-data";

interface HeroProps {
  contact: ContactInfo;
}

export default function HeroSection({ contact }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0F1E]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to Opportunities
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {contact.name.split(" ")[0]}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
              {contact.title}
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-sm sm:text-base">
              Building production-grade systems with Java, Spring Boot &amp; AWS.
              I care about clean architecture, measurable performance, and shipping things that work.
            </p>

            {/* Social links row 1 */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-3">
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#0A66C2]/50 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all text-sm font-medium"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
              >
                <Mail size={15} /> Email
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
              >
                <Phone size={15} /> {contact.phone}
              </a>
            </div>

            {/* Coding profile links row 2 */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              <a
                href={`https://${contact.hackerrank}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#00EA64]/40 bg-[#00EA64]/10 text-[#00EA64] hover:bg-[#00EA64]/20 transition-all text-sm font-medium"
              >
                <Code2 size={15} /> HackerRank
              </a>
              <a
                href={`https://${contact.tuf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#FF6B35]/40 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-all text-sm font-medium"
              >
                <BookOpen size={15} /> TakeUForward
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="/Rohit_Resume.pdf"
                download="Rohit_Badiger_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,212,255,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.55)]"
              >
                <Download size={16} /> Download Resume
              </a>
              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-white rounded-xl transition-all text-sm font-medium"
              >
                View Work <ArrowDown size={14} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow opacity-70 blur-sm" />
              <div className="absolute inset-[3px] rounded-full bg-[#0A0F1E]" />
              <div className="absolute inset-[5px] rounded-full overflow-hidden">
                <img
                  src="/rohit-photo.jpeg"
                  alt="Rohit Badiger"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#0A0F1E] border border-cyan-500/30 rounded-xl px-3 py-2 shadow-lg">
                <div className="text-cyan-400 font-bold text-lg leading-none">8.6</div>
                <div className="text-gray-400 text-xs">CGPA</div>
              </div>
              <div className="absolute -top-3 -left-3 bg-[#0A0F1E] border border-purple-500/30 rounded-xl px-3 py-2 shadow-lg">
                <div className="text-purple-400 font-bold text-lg leading-none">2+</div>
                <div className="text-gray-400 text-xs">Internships</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button onClick={scrollToAbout} className="flex flex-col items-center gap-1 text-gray-600 hover:text-cyan-400 transition-colors animate-bounce">
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
