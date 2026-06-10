import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/resume";

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">06.</span>
            <h2 className="text-3xl font-bold text-white">Education &amp; Certifications</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/3 hover:border-cyan-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-lg">Education</h3>
              </div>
              <div className="space-y-1">
                <div className="text-cyan-400 font-semibold">{EDUCATION.degree}</div>
                <div className="text-white">{EDUCATION.institution}</div>
                <div className="text-gray-400 text-sm">{EDUCATION.period}</div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                  <span className="text-green-400 font-bold text-sm">CGPA: {EDUCATION.cgpa}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/3 hover:border-cyan-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Award size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.li
                    key={cert.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-medium">{cert.name}</div>
                      <div className="text-gray-500 text-xs">{cert.issuer}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
