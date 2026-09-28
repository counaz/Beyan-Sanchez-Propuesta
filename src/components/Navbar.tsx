import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles, Users, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCommunityModal: () => void;
  onOpenMentorshipModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommunityModal,
  onOpenMentorshipModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080a0f]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-6 xl:gap-10">
          
          {/* Logo with Candlestick Crest - with generous spacing */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 cursor-pointer group shrink-0 py-2 pr-2"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-[#0d1017] rounded-[10px] flex items-center justify-center">
                {/* Stylized candlesticks icon */}
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-6 bg-amber-400 rounded-sm relative flex justify-center">
                    <span className="w-0.5 h-1 bg-amber-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-amber-300 absolute -bottom-1"></span>
                  </div>
                  <div className="w-1.5 h-4 bg-emerald-400 rounded-sm relative flex justify-center">
                    <span className="w-0.5 h-1 bg-emerald-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-emerald-300 absolute -bottom-1"></span>
                  </div>
                  <div className="w-1.5 h-7 bg-amber-400 rounded-sm relative flex justify-center">
                    <span className="w-0.5 h-1 bg-amber-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-amber-300 absolute -bottom-1"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-0.5">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">
                BRYAN SÁNCHEZ
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                TRADING & MENTALIDAD
              </span>
            </div>
          </div>

          {/* Desktop Nav Links with spacious margins and padding */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollTo('pilares')} 
              className="px-2 py-1.5 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
            >
              Pilares
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className="px-2 py-1.5 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
            >
              Mentorías 1 a 1
            </button>
            <button 
              onClick={() => scrollTo('comunidad')} 
              className="px-2.5 py-1.5 hover:text-amber-300 hover:bg-amber-500/10 text-amber-400/90 font-semibold rounded-lg transition-all flex items-center gap-1.5"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Comunidad</span>
            </button>
            <button 
              onClick={() => scrollTo('video')} 
              className="px-2 py-1.5 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
            >
              Masterclass
            </button>
            <button 
              onClick={() => scrollTo('test')} 
              className="px-2 py-1.5 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
            >
              Test Trader
            </button>
            <button 
              onClick={() => scrollTo('calculadora')} 
              className="px-2 py-1.5 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="px-2 py-1.5 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Section with generous gap and visual divider */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0 pl-2">
            
            {/* Elegant vertical divider on large screens */}
            <div className="h-6 w-px bg-slate-800 hidden xl:block mr-1"></div>

            {/* Free Community button */}
            <button
              onClick={onOpenCommunityModal}
              className="px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold text-amber-300 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400/60 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-amber-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Comunidad Gratis</span>
            </button>
            
            {/* 1-on-1 Mentorship button */}
            <button
              onClick={() => onOpenMentorshipModal()}
              className="px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Mentoría 1 a 1</span>
            </button>
          </div>

          {/* Mobile menu trigger with comfortable touch targets */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={onOpenCommunityModal}
              className="px-3.5 py-2 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Comunidad</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown with generous vertical rhythm and padding */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d1017] border-b border-amber-500/20 px-6 pt-5 pb-8 space-y-4 shadow-2xl">
          <div className="space-y-1 divide-y divide-slate-800/60">
            <button 
              onClick={() => scrollTo('pilares')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              4 Pilares de Éxito
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className="block w-full text-left py-3 text-amber-300 font-semibold text-sm transition-colors"
            >
              Mentorías 1 a 1 (Planes y Precios)
            </button>
            <button 
              onClick={() => scrollTo('comunidad')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              Comunidad Gratuita
            </button>
            <button 
              onClick={() => scrollTo('video')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              Video Masterclass (YouTube)
            </button>
            <button 
              onClick={() => scrollTo('test')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              Test Diagnóstico de Trader
            </button>
            <button 
              onClick={() => scrollTo('calculadora')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              Calculadora de Gestión de Riesgo
            </button>
            <button 
              onClick={() => scrollTo('recursos')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              Bóveda de Recursos & Google Drive
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="block w-full text-left py-3 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              Preguntas Frecuentes
            </button>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommunityModal();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-all"
            >
              Unirme a la Comunidad Gratuita
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMentorshipModal();
              }}
              className="w-full py-3.5 text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Postular a Mentoría 1 a 1 por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
