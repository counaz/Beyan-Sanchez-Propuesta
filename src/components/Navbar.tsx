import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles, Flame } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-[#080a0f]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 gap-2 lg:gap-4">
          
          {/* Logo with Candlestick Crest */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0 py-1"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-[#0d1017] rounded-[10px] flex items-center justify-center">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-3.5 bg-amber-400 rounded-xs relative flex justify-center">
                    <span className="w-0.5 h-1 bg-amber-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-amber-300 absolute -bottom-1"></span>
                  </div>
                  <div className="w-1 h-2 bg-emerald-400 rounded-xs relative flex justify-center">
                    <span className="w-0.5 h-0.5 bg-emerald-300 absolute -top-0.5"></span>
                    <span className="w-0.5 h-0.5 bg-emerald-300 absolute -bottom-0.5"></span>
                  </div>
                  <div className="w-1 h-4 bg-amber-400 rounded-xs relative flex justify-center">
                    <span className="w-0.5 h-1 bg-amber-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-amber-300 absolute -bottom-1"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-cinzel text-sm sm:text-base lg:text-lg font-bold tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors leading-tight whitespace-nowrap">
                BRYAN SÁNCHEZ
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-slate-400 font-semibold whitespace-nowrap">
                ÉXITO INTEGRAL · MENTE, CUERPO Y ALMA
              </span>
            </div>
          </div>

          {/* Desktop Nav Links - Perfectly proportioned for 13" Laptops & Desktops */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-xs font-medium text-slate-300">
            <button 
              onClick={() => scrollTo('testimonios')} 
              className="px-2 xl:px-2.5 py-1.5 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap cursor-pointer"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className="px-2 xl:px-2.5 py-1.5 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              <span>Mentorías 1 a 1</span>
              <span className="text-[9px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded-full font-bold">2 cupos</span>
            </button>
            <button 
              onClick={() => scrollTo('pilares')} 
              className="px-2 xl:px-2.5 py-1.5 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap cursor-pointer"
            >
              Pilares
            </button>
            <button 
              onClick={() => scrollTo('video')} 
              className="px-2 xl:px-2.5 py-1.5 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap cursor-pointer"
            >
              Masterclass
            </button>
            <button 
              onClick={() => scrollTo('test')} 
              className="px-2 xl:px-2.5 py-1.5 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap cursor-pointer"
            >
              Test Trader
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="px-2 xl:px-2.5 py-1.5 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons for Desktop and Laptops (Fixed width & no overflow) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <button
              onClick={onOpenCommunityModal}
              className="px-2.5 xl:px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Comunidad</span>
            </button>
            
            <button
              onClick={() => onOpenMentorshipModal()}
              className="px-3 xl:px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 fill-slate-950 shrink-0" />
              <span>Mentoría (2 Cupos)</span>
            </button>
          </div>

          {/* Mobile and Tablet Menu Trigger (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCommunityModal}
              className="px-2.5 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/40 rounded-lg flex items-center gap-1.5 whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => onOpenMentorshipModal()}
              className="hidden sm:flex px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg items-center gap-1 whitespace-nowrap shadow-sm"
            >
              <span>2 Cupos</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f17] border-b border-amber-500/20 px-4 py-5 shadow-2xl space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <button 
              onClick={() => scrollTo('comunidad')}
              className="flex items-center justify-between py-2 px-3 text-left text-emerald-400 bg-emerald-500/10 rounded-lg"
            >
              <span className="font-semibold">Comunidad WhatsApp Gratuita</span>
              <MessageCircle className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollTo('testimonios')}
              className="py-2 px-3 text-left text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
            >
              Testimonios Reales
            </button>
            <button 
              onClick={() => scrollTo('planes')}
              className="flex items-center justify-between py-2 px-3 text-left text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
            >
              <span>Mentorías 1 a 1</span>
              <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full font-bold">2 cupos</span>
            </button>
            <button 
              onClick={() => scrollTo('pilares')}
              className="py-2 px-3 text-left text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
            >
              4 Pilares de Éxito
            </button>
            <button 
              onClick={() => scrollTo('video')}
              className="py-2 px-3 text-left text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
            >
              Masterclass
            </button>
            <button 
              onClick={() => scrollTo('test')}
              className="py-2 px-3 text-left text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
            >
              Test Trader & Mindset
            </button>
            <button 
              onClick={() => scrollTo('faq')}
              className="py-2 px-3 text-left text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
            >
              Preguntas Frecuentes (FAQ)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommunityModal();
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Ingresar a la Comunidad Gratuita</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMentorshipModal();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Flame className="w-4 h-4" />
              <span>Postular a Mentoría 1 a 1 (2 Cupos)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
