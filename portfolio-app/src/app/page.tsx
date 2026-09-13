import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementSection from "@/components/AchievementSection";
import AcademicJourneySection from "@/components/AcademicJourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import KineticMarquee from "@/components/common/KineticMarquee";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f4f4f7] selection:bg-[#00f0ff] selection:text-[#070709] w-full max-w-full overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative flex flex-col w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Section with Interactive 3D WebGL Torus Knot */}
        <HeroSection />

        {/* Dynamic Kinetic Marquee Ribbon 1 */}
        <KineticMarquee reverse={false} />

        {/* 2. Philosophy & About Section */}
        <AboutSection />

        {/* 3. Capabilities / What I Do */}
        <CapabilitiesSection />

        {/* 4. Tech Stack & Tools */}
        <TechStackSection />

        {/* 5. Selected Work & Projects */}
        <ProjectsSection />

        {/* Dynamic Kinetic Marquee Ribbon 2 (Reverse Direction) */}
        <KineticMarquee
          reverse={true}
          items={[
            "Parul University Hackathon 6.0 Finalist",
            "Full-Stack Web Architecture",
            "BCA 7.56 CGPA Distinction",
            "React.js & Tailwind CSS Systems",
            "High-Performance WebGL 3D",
            "Automated Workflows with n8n",
            "Available for Client Projects"
          ]}
        />

        {/* 6. Achievement Spotlight & Hackathon */}
        <AchievementSection />

        {/* 7. Academic Journey & Timeline */}
        <AcademicJourneySection />

        {/* 8. Contact Form & Direct Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
