import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, Users } from "lucide-react";
import { EXPERIENCE } from "@/data/resume";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">03.</span>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <div className="mt-10 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-10">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.2, duration: 0.5 }}
                  className="relative sm:pl-12"
                >
                  <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center hidden sm:flex">
                    <Briefcase size={14} className="text-cyan-400" />
                  </div>

                  <div className="p-6 rounded-2xl border border-white/10 bg-white/3 hover:border-cyan-500/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        <div className="text-cyan-400 font-semibold text-sm">{exp.company}{exp.location ? `, ${exp.location}` : ""}</div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} /> {exp.period}
                        </span>
                        {exp.team && (
                          <span className="flex items-center gap-1.5">
                            <Users size={12} /> {exp.team}
                          </span>
                        )}
                      </div>
                    </div>

                    {exp.stats.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {exp.stats.map((s) => (
                          <div
                            key={s.label}
                            className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-center"
                          >
                            <div className="text-cyan-400 font-bold text-base leading-none">{s.value}</div>
                            <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                          <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
