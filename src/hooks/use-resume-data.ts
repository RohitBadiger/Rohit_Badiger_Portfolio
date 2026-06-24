import { useState, useEffect } from "react";

export type ContactInfo = {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  hackerrank: string;
  tuf: string;
};

export type ResumeTemplate = "google" | "nvidia" | "microsoft";

const DEFAULT_CONTACT: ContactInfo = {
  name: "Rohit Badiger",
  title: "Backend Software Engineer",
  phone: "+91 9035143766",
  email: "abhibadiger8152@gmail.com",
  linkedin: "linkedin.com/in/badigerrohit/",
  github: "github.com/RohitBadiger",
  hackerrank: "hackerrank.com/profile/abhibadiger8152",
  tuf: "takeuforward.org/profile/Rohit8152",
};

export function useResumeData() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(DEFAULT_CONTACT);
  const [template, setTemplate] = useState<ResumeTemplate>("google");

  useEffect(() => {
    const saved = localStorage.getItem("resume_contact");
    if (saved) {
      try {
        setContactInfo({ ...DEFAULT_CONTACT, ...JSON.parse(saved) });
      } catch {
        // ignore
      }
    }
    const savedTemplate = localStorage.getItem("resume_template");
    if (savedTemplate) {
      setTemplate(savedTemplate as ResumeTemplate);
    }
  }, []);

  const updateContactInfo = (info: ContactInfo) => {
    setContactInfo(info);
    localStorage.setItem("resume_contact", JSON.stringify(info));
  };

  const updateTemplate = (t: ResumeTemplate) => {
    setTemplate(t);
    localStorage.setItem("resume_template", t);
  };

  return { contactInfo, updateContactInfo, template, updateTemplate };
}
