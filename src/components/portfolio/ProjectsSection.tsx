import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/resume";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">04.</span>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/3 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                    title="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {project.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                      <span className="text-cyan-500 mt-1.5 flex-shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors font-mono"
                  >
                    <ExternalLink size={12} /> {project.github.replace("https://", "")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
