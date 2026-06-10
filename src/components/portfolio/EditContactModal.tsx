import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save } from "lucide-react";
import type { ContactInfo } from "@/hooks/use-resume-data";

interface EditContactModalProps {
  open: boolean;
  onClose: () => void;
  contact: ContactInfo;
  onSave: (info: ContactInfo) => void;
}

export default function EditContactModal({ open, onClose, contact, onSave }: EditContactModalProps) {
  const [form, setForm] = useState<ContactInfo>(contact);

  const handleChange = (field: keyof ContactInfo, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  const FIELDS: { key: keyof ContactInfo; label: string; placeholder: string }[] = [
    { key: "name", label: "Full Name", placeholder: "Rohit Badiger" },
    { key: "title", label: "Job Title", placeholder: "Backend Software Engineer" },
    { key: "email", label: "Email", placeholder: "email@example.com" },
    { key: "phone", label: "Phone", placeholder: "+91 XXXXXXXXXX" },
    { key: "linkedin", label: "LinkedIn URL", placeholder: "linkedin.com/in/username" },
    { key: "github", label: "GitHub URL", placeholder: "github.com/username" },
    { key: "hackerrank", label: "HackerRank URL", placeholder: "hackerrank.com/profile/username" },
    { key: "tuf", label: "TakeUForward URL", placeholder: "takeuforward.org/profile/username" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="bg-[#111827] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111827] z-10">
                <h2 className="text-white font-bold text-lg">Edit Contact Info</h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {FIELDS.map((f) => (
                  <div key={f.key}>
                    <label className="block text-gray-400 text-xs mb-1.5 font-medium">{f.label}</label>
                    <input
                      type="text"
                      value={(form as Record<string, string>)[f.key] ?? ""}
                      onChange={(e) => handleChange(f.key, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                    />
                  </div>
                ))}
                <p className="text-gray-500 text-xs">Changes are saved to your browser and apply to the portfolio display.</p>
              </div>

              <div className="flex gap-3 p-6 pt-0">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all"
                >
                  <Save size={14} /> Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
