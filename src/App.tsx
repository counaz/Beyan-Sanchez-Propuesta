import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FreeCommunity } from './components/FreeCommunity';
import { StudentTestimonials } from './components/StudentTestimonials';
import { PricingPlans } from './components/PricingPlans';
import { Pillars } from './components/Pillars';
import { VideoSection } from './components/VideoSection';
import { MindsetAssessment } from './components/MindsetAssessment';
import { RiskCalculator } from './components/RiskCalculator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CommunityModal } from './components/CommunityModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TRADING_PLANS, getWhatsAppUrl } from './data/content';

export default function App() {
  const [communityModalOpen, setCommunityModalOpen] = useState(false);

  // Directly launches WhatsApp with the chosen plan info - ZERO form friction!
  const handleOpenMentorship = (planId?: string) => {
    if (planId) {
      const plan = TRADING_PLANS.find((p) => p.id === planId) || TRADING_PLANS[1];
      const message = `¡Hola Bryan! Vengo de tu web. Vi que solo abres 2 cupos para tu mentoría 1 a 1 este mes y me quiero postular directamente contigo para el ${plan.name} ($${plan.priceUSD} USD - ${plan.duration}, ${plan.classesCount}). ¿Aún te queda cupo disponible para coordinar mi inicio?`;
      window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
      return;
    }

    // If no plan is preselected, scroll smoothly to the plans section
    const el = document.getElementById('planes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const generalMessage = '¡Hola Bryan! Vengo de tu web. Vi que solo abres 2 cupos para tu mentoría 1 a 1 este mes y me interesa postularme contigo. ¿Aún te queda cupo disponible?';
      window.open(getWhatsAppUrl(generalMessage), '_blank', 'noopener,noreferrer');
    }
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
        {/* 1. Hero Section - Hook, WhatsApp CTA, 2-spots scarcity banner, +50 members */}
        <Hero
          onOpenCommunityModal={handleOpenCommunity}
          onOpenMentorshipModal={() => handleOpenMentorship()}
        />

        {/* 2. Free WhatsApp Community Hub - The primary funnel destination */}
        <FreeCommunity
          onJoinClick={handleOpenCommunity}
        />

        {/* 3. Real Student Testimonials & Funding Proofs */}
        <StudentTestimonials
          onOpenCommunityModal={handleOpenCommunity}
          onOpenMentorshipModal={() => handleOpenMentorship()}
        />

        {/* 4. 1-on-1 Mentorship Programs - Strictly 2 spots left, direct WhatsApp with plan info */}
        <PricingPlans
          onSelectPlan={(planId) => handleOpenMentorship(planId)}
        />

        {/* 5. 4 Pillars of Success (Trading + Desarrollo Personal) */}
        <Pillars
          onOpenMentorshipModal={() => handleOpenMentorship()}
        />

        {/* 6. Bryan Sánchez Video Masterclass - Proof & Authority */}
        <VideoSection />

        {/* 7. Interactive Mindset Assessment Test */}
        <MindsetAssessment
          onOpenCommunityModal={handleOpenCommunity}
          onOpenMentorshipModal={handleOpenMentorship}
        />

        {/* 8. Mathematical Risk Calculator Ratio 1:5 */}
        <RiskCalculator />

        {/* 9. FAQ Section */}
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

      {/* Free Community WhatsApp Welcome Modal */}
      <CommunityModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
      />
    </div>
  );
}
