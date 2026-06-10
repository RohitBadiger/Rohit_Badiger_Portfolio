import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Edit2 } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Coding", href: "#coding" },
  { label: "Education", href: "#education" },
];

interface NavbarProps {
  onEditOpen: () => void;
}

export default function Navbar({ onEditOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,212,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white">Rohit</span>
            <span className="text-cyan-400">.</span>
          </motion.span>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onEditOpen}
              className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
              title="Edit contact info"
            >
              <Edit2 size={16} />
            </button>
            <a
              href="/Rohit_Resume.pdf"
              download="Rohit_Badiger_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0F1E]/98 border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={onEditOpen}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-white/20 text-gray-300 rounded-lg text-sm"
                >
                  <Edit2 size={14} /> Edit Info
                </button>
                <a
                  href="/Rohit_Resume.pdf"
                  download="Rohit_Badiger_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg text-sm"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
