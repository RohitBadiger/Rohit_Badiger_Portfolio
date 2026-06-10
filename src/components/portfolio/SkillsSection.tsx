import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/data/resume";

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300",
  Backend: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300",
  Frontend: "from-orange-500/20 to-yellow-500/20 border-orange-500/30 text-orange-300",
  Databases: "from-green-500/20 to-teal-500/20 border-green-500/30 text-green-300",
  "Cloud / DevOps": "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300",
  Tools: "from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-300",
  "Core CS": "from-red-500/20 to-rose-500/20 border-red-500/30 text-red-300",
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">02.</span>
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
            {SKILLS.map((group, i) => {
              const colorClass = CATEGORY_COLORS[group.category] ?? "from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-300";
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className={`p-5 rounded-xl border bg-gradient-to-br ${colorClass} hover:scale-[1.02] transition-transform`}
                >
                  <h3 className="font-semibold text-sm mb-3 tracking-wide">{group.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-xs bg-black/20 text-white/80 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
