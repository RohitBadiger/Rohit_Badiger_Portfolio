import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CodingSection from "@/components/portfolio/CodingSection";
import EducationSection from "@/components/portfolio/EducationSection";
import FooterSection from "@/components/portfolio/FooterSection";
import EditContactModal from "@/components/portfolio/EditContactModal";
import { useResumeData } from "@/hooks/use-resume-data";

export default function Portfolio() {
  const { contactInfo, updateContactInfo } = useResumeData();
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Navbar onEditOpen={() => setEditOpen(true)} />

      <main>
        <HeroSection contact={contactInfo} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CodingSection />
        <EducationSection />
        <FooterSection contact={contactInfo} />
      </main>

      <EditContactModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        contact={contactInfo}
        onSave={updateContactInfo}
      />
    </div>
  );
}
