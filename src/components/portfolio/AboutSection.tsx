import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Brain } from "lucide-react";
import { SUMMARY } from "@/data/resume";

const HIGHLIGHTS = [
  { icon: Server, label: "Backend Systems", desc: "REST APIs, Microservices, Spring Boot" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS Lambda, EC2, Docker, CI/CD" },
  { icon: Code2, label: "Full-Stack", desc: "React 19, Node.js, TypeScript" },
  { icon: Brain, label: "ML/AI", desc: "scikit-learn, Flask, Streamlit" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">01.</span>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-10">
            <div>
              <p className="text-gray-300 leading-relaxed text-base mb-6">{SUMMARY}</p>
              <div className="flex flex-wrap gap-2">
                {["Java 17", "Spring Boot", "React 19", "AWS", "MySQL", "Docker"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                  className="p-4 rounded-xl border border-white/10 bg-white/3 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                >
                  <h.icon className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" size={22} />
                  <div className="text-white font-semibold text-sm mb-1">{h.label}</div>
                  <div className="text-gray-400 text-xs">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
