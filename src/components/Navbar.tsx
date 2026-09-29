import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles, Users } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-[#080a0f]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40 w-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-6 2xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-22 gap-2 sm:gap-4 xl:gap-3 2xl:gap-6">
          
          {/* Logo with Candlestick Crest */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0 py-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-[#0d1017] rounded-[10px] flex items-center justify-center">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-1 sm:w-1.5 h-3.5 sm:h-5 bg-amber-400 rounded-xs relative flex justify-center">
                    <span className="w-0.5 h-1 bg-amber-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-amber-300 absolute -bottom-1"></span>
                  </div>
                  <div className="w-1 sm:w-1.5 h-2.5 sm:h-3.5 bg-emerald-400 rounded-xs relative flex justify-center">
                    <span className="w-0.5 h-0.5 bg-emerald-300 absolute -top-0.5"></span>
                    <span className="w-0.5 h-0.5 bg-emerald-300 absolute -bottom-0.5"></span>
                  </div>
                  <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-amber-400 rounded-xs relative flex justify-center">
                    <span className="w-0.5 h-1 bg-amber-300 absolute -top-1"></span>
                    <span className="w-0.5 h-1 bg-amber-300 absolute -bottom-1"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg 2xl:text-xl font-bold tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors leading-tight whitespace-nowrap">
                BRYAN SÁNCHEZ
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-semibold whitespace-nowrap">
                ÉXITO INTEGRAL · MENTE, CUERPO Y ALMA
              </span>
            </div>
          </div>

          {/* Desktop Nav Links - Clean & Direct */}
          <nav className="hidden xl:flex items-center gap-2 xl:gap-3 2xl:gap-5 text-xs xl:text-[13px] 2xl:text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollTo('comunidad')} 
              className="px-2.5 py-1 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap font-semibold"
            >
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Comunidad WhatsApp</span>
            </button>
            <button 
              onClick={() => scrollTo('testimonios')} 
              className="px-2 py-1 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className="px-2 py-1 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1"
            >
              <span>Mentorías 1 a 1</span>
              <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded-full font-bold">2 cupos</span>
            </button>
            <button 
              onClick={() => scrollTo('pilares')} 
              className="px-2 py-1 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
            >
              Pilares
            </button>
            <button 
              onClick={() => scrollTo('video')} 
              className="px-2 py-1 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
            >
              Masterclass
            </button>
            <button 
              onClick={() => scrollTo('test')} 
              className="px-2 py-1 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
            >
              Test Trader
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="px-2 py-1 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Section for Desktop/Laptops */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0">
            <button
              onClick={onOpenCommunityModal}
              className="px-3 2xl:px-4 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Comunidad WhatsApp</span>
            </button>
            
            <button
              onClick={() => onOpenMentorshipModal()}
              className="px-3.5 2xl:px-5 py-2 text-xs 2xl:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 fill-slate-950 shrink-0" />
              <span>Mentoría (2 Cupos)</span>
            </button>
          </div>

          {/* Mobile and Tablet Menu Trigger (< 1280px) */}
          <div className="flex xl:hidden items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCommunityModal}
              className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-lg sm:rounded-xl flex items-center gap-1.5 whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => onOpenMentorshipModal()}
              className="hidden sm:flex px-3 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg items-center gap-1.5 whitespace-nowrap shadow-md"
            >
              <span>2 Cupos</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d1017] border-b border-amber-500/20 px-4 sm:px-6 pt-4 pb-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-0.5 divide-y divide-slate-800/60 text-sm">
            <button 
              onClick={() => scrollTo('comunidad')} 
              className="block w-full text-left py-2.5 text-emerald-400 font-bold transition-colors flex items-center justify-between"
            >
              <span>Comunidad Gratuita WhatsApp</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">+50 miembros</span>
            </button>
            <button 
              onClick={() => scrollTo('testimonios')} 
              className="block w-full text-left py-2.5 text-slate-300 hover:text-amber-400 font-medium transition-colors flex items-center justify-between"
            >
              <span>Resultados & Testimonios</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">Pruebas</span>
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className="block w-full text-left py-2.5 text-amber-300 font-semibold transition-colors flex items-center justify-between"
            >
              <span>Mentorías 1 a 1</span>
              <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full font-bold">Solo 2 cupos</span>
            </button>
            <button 
              onClick={() => scrollTo('pilares')} 
              className="block w-full text-left py-2.5 text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              4 Pilares de Éxito
            </button>
            <button 
              onClick={() => scrollTo('video')} 
              className="block w-full text-left py-2.5 text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Masterclass en Video
            </button>
            <button 
              onClick={() => scrollTo('test')} 
              className="block w-full text-left py-2.5 text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Test Diagnóstico de Trader
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="block w-full text-left py-2.5 text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Preguntas Frecuentes
            </button>
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommunityModal();
              }}
              className="w-full py-3 text-center text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Entrar a la Comunidad por WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMentorshipModal();
              }}
              className="w-full py-3 text-center text-xs sm:text-sm font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-all"
            >
              Postular a Mentoría (Solo 2 Cupos)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
