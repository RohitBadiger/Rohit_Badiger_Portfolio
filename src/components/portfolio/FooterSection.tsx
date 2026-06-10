import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/hooks/use-resume-data";

interface FooterProps {
  contact: ContactInfo;
}

export default function FooterSection({ contact }: FooterProps) {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Open to backend, full-stack, and cloud engineering roles. Always happy to talk systems and interesting problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
            >
              <Mail size={16} /> {contact.email}
            </a>
            <a
              href="/Rohit_Resume.pdf"
              download="Rohit_Badiger_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-white rounded-xl transition-all text-sm font-medium"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-5 mb-10">
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Github size={18} />
            </a>
          </div>

          <div className="text-gray-600 text-sm font-mono">
            Built by {contact.name} · {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
