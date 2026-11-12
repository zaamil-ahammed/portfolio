import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ToolkitSection from './components/ToolkitSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    showToast(`Copied ${email} to clipboard`);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-neutral-100 font-sans">
      <Navbar />
      <main>
        <HeroSection onCopyEmail={handleCopyEmail} />
        <ServicesSection />
        <ToolkitSection />
        <ProjectsSection />
        <AboutSection />
        <ConnectSection onCopyEmail={handleCopyEmail} onFormSubmitted={showToast} />
      </main>
      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
