import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ToolkitSection from './components/ToolkitSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ProjectDetailModal from './components/ProjectDetailModal';
import ShapeWaves from './components/ShapeWaves';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    showToast(`Copied ${email} to clipboard`);
  };

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const selectedProject = portfolioData.projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <div className="relative min-h-screen text-[#fafafa] font-sans antialiased selection:bg-[#9ba4e6]/30 selection:text-[#b4bbf2]">
      {/* Fixed WebGPU ShapeWaves Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <ShapeWaves
          text="42RGB"
          fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
          fontWeight={500}
          textSize={0.6}
          shapes="mixed"
          cellSize={6}
          dotSize={0.75}
          color="#000000"
          hoverColor="#7c3aed"
          backgroundColor="#111111"
          speed={1.3}
          scale={1.05}
          contrast={2.15}
          brightness={0.18}
          flow={0.6}
          direction={350}
          fade={0}
          interactive={true}
          splashRadius={52}
          splashStrength={1.05}
          glow={0.35}
          intro={true}
          introDuration={2}
          paused={false}
        />
      </div>

      {/* Floating Glass Pill Navbar */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection onCopyEmail={handleCopyEmail} />
        <ServicesSection onSelectProject={handleSelectProject} />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <AboutSection />
        <ToolkitSection onSelectPoster={handleSelectProject} />
        <ConnectSection onCopyEmail={handleCopyEmail} onFormSubmitted={showToast} />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}

      {/* Interactive Toast Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
