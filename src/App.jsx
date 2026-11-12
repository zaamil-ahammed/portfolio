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
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-[#9ba4e6]/30 selection:text-[#b4bbf2]">
      {/* Floating Glass Pill Navbar */}
      <Navbar />

      <main>
        <HeroSection onCopyEmail={handleCopyEmail} />
        <ServicesSection onSelectProject={handleSelectProject} />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <AboutSection />
        <ToolkitSection onSelectPoster={handleSelectProject} />
        <ConnectSection onCopyEmail={handleCopyEmail} onFormSubmitted={showToast} />
      </main>

      <Footer />

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
