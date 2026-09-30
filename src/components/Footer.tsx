import React from 'react';
import { Youtube, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRYAN_WHATSAPP_NUMBER } from '../data/content';

interface FooterProps {
  onOpenCommunityModal: () => void;
  onOpenMentorshipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCommunityModal,
  onOpenMentorshipModal
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-amber-500/20 text-slate-400 text-xs pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="text-center pb-10 border-b border-slate-800">
          <p className="font-cinzel text-xl sm:text-3xl font-extrabold text-amber-400 tracking-wider">
            "DISCIPLINA HOY, LIBERTAD MAÑANA."
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
            50% Desarrollo Personal y Cambio de Vida · 50% Trading de Precisión (Ratio 1:5)
          </p>
        </div>

        {/* 3 Columns */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#080a0f] rounded-md flex items-center justify-center">
                  <div className="flex items-center gap-0.5">
                    <span className="w-1 h-4 bg-amber-400 rounded-xs"></span>
                    <span className="w-1 h-3 bg-emerald-400 rounded-xs"></span>
                    <span className="w-1 h-5 bg-amber-400 rounded-xs"></span>
                  </div>
                </div>
              </div>
              <span className="font-cinzel text-base font-bold text-white tracking-wider">
                BRYAN SÁNCHEZ
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Mi misión es ayudarte a transformar tu mente, ordenar tu vida y dominar el trading con ratio 1:5 para alcanzar la libertad real.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.youtube.com/watch?v=E810GeSt8kc&t=219s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/50 transition-colors"
                title="Canal Oficial de YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${BRYAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola Bryan! Vengo de tu web y me gustaría hablar contigo.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer"
                title="Escríbeme a mi WhatsApp personal"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Hablar conmigo por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Mis Mentorías 1 a 1 (Solo 2 Cupos)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('planes')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Plan Mensual (8 clases privadas) - $399 USD
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('planes')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Plan Bimensual (16 clases privadas) - $569 USD
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('planes')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Plan Trimestral (24 clases privadas) - $859 USD
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Funnel Action */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-emerald-400">
              Mi Comunidad Gratuita
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Únete a las lecturas en vivo de <em>"La ciencia de hacerse rico"</em> y a nuestras operativas en directo sin costo alguno.
            </p>
            <button
              onClick={onOpenCommunityModal}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Unirme Gratis a WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Bryan Sánchez. "Más vida para todos y menos para ninguno".</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Atención personal y directa conmigo por WhatsApp</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
