
import GalaxyBackground from '@/components/GalaxyBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import CodingProfilesSection from '@/components/CodingProfilesSection';
import ContactSection from '@/components/ContactSection';
import MouseFollower from '@/components/MouseFollower';

const Index = () => {
  return (
    <div className="min-h-screen text-white relative">
      <GalaxyBackground />
      <MouseFollower />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Tharun Kudikayala. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
