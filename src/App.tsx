import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { PricingPlans } from './components/PricingPlans';
import { FreeCommunity } from './components/FreeCommunity';
import { VideoSection } from './components/VideoSection';
import { MindsetAssessment } from './components/MindsetAssessment';
import { RiskCalculator } from './components/RiskCalculator';
import { ResourceVault } from './components/ResourceVault';
import { GoogleDriveVault } from './components/GoogleDriveVault';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MentorshipModal } from './components/MentorshipModal';
import { CommunityModal } from './components/CommunityModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [mentorshipModalOpen, setMentorshipModalOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('bimensual');

  const handleOpenMentorship = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setMentorshipModalOpen(true);
  };

  const handleOpenCommunity = () => {
    setCommunityModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* Top Header Navigation */}
      <Navbar
        onOpenCommunityModal={handleOpenCommunity}
        onOpenMentorshipModal={handleOpenMentorship}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenCommunityModal={handleOpenCommunity}
          onOpenMentorshipModal={() => handleOpenMentorship()}
        />

        {/* 4 Pillars of Success & WhatsApp Accompaniment */}
        <Pillars
          onOpenMentorshipModal={() => handleOpenMentorship()}
        />

        {/* 1-on-1 Mentorship Programs (Mensual, Bimensual, Trimestral) */}
        <PricingPlans
          onSelectPlan={(planId) => handleOpenMentorship(planId)}
        />

        {/* Free Community Hub */}
        <FreeCommunity
          onJoinClick={handleOpenCommunity}
        />

        {/* Bryan Sánchez Video Masterclass */}
        <VideoSection />

        {/* Interactive Mindset Assessment Test */}
        <MindsetAssessment
          onOpenCommunityModal={handleOpenCommunity}
          onOpenMentorshipModal={handleOpenMentorship}
        />

        {/* Mathematical Risk Calculator */}
        <RiskCalculator />

        {/* Downloadable / Student Resource Vault */}
        <ResourceVault
          onOpenCommunityModal={handleOpenCommunity}
        />

        {/* Google Drive Integration Vault */}
        <GoogleDriveVault />

        {/* FAQ Section */}
        <FAQ
          onOpenMentorshipModal={() => handleOpenMentorship()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCommunityModal={handleOpenCommunity}
        onOpenMentorshipModal={() => handleOpenMentorship()}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp
        onOpenMentorshipModal={() => handleOpenMentorship()}
      />

      {/* Modals */}
      <MentorshipModal
        isOpen={mentorshipModalOpen}
        onClose={() => setMentorshipModalOpen(false)}
        defaultPlanId={selectedPlanId}
      />

      <CommunityModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
      />
    </div>
  );
}
