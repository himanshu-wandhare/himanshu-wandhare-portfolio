import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { NavMenu } from "@/components/nav-menu";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavMenu />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}