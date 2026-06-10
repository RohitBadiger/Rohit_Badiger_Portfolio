import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star, Code2, BookOpen } from "lucide-react";
import { CODING_PROFILES } from "@/data/resume";

export default function CodingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coding" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">05.</span>
            <h2 className="text-3xl font-bold text-white">Coding Profiles</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <p className="text-gray-400 text-sm mb-10 max-w-xl">
            Competitive programming and DSA practice — tracking progress across platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {CODING_PROFILES.map((profile, i) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${profile.bg} ${profile.border} hover:scale-[1.02] transition-all hover:shadow-lg block`}
                style={{ "--hover-shadow": `0 0 30px ${profile.color}20` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${profile.color}20`, border: `1px solid ${profile.color}40` }}
                    >
                      {i === 0 ? (
                        <Code2 size={20} style={{ color: profile.color }} />
                      ) : (
                        <BookOpen size={20} style={{ color: profile.color }} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{profile.name}</h3>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${profile.color}20`, color: profile.color }}
                      >
                        {profile.badge}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors mt-1" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {profile.description}
                </p>

                <div className="flex gap-3">
                  {profile.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 rounded-xl p-3 text-center"
                      style={{ backgroundColor: `${profile.color}10`, border: `1px solid ${profile.color}25` }}
                    >
                      <div className="font-bold text-base leading-none mb-1" style={{ color: profile.color }}>
                        {s.value}
                      </div>
                      <div className="text-gray-500 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1.5">
                  <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                    {profile.url.replace("https://", "")}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* DSA Skills callout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/3"
          >
            <div className="flex items-center gap-2 mb-3">
              <Star size={16} className="text-yellow-400" />
              <span className="text-white font-semibold text-sm">DSA Strengths</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Arrays", "Linked Lists", "Binary Search", "Recursion", "Trees", "Graphs", "Dynamic Programming", "Stacks & Queues", "Sorting", "Hashing", "Bit Manipulation", "Sliding Window"].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
