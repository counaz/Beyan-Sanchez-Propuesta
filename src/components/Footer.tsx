import React from 'react';
import { Youtube, MessageCircle, Send, ShieldCheck } from 'lucide-react';

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
    <footer className="bg-[#05070a] border-t border-amber-500/20 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="text-center pb-12 border-b border-slate-800">
          <p className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-wider">
            "DISCIPLINA HOY, LIBERTAD MAÑANA."
          </p>
          <p className="mt-2 text-sm text-slate-300 font-medium">
            No es suerte, es preparación. No es magia, es método.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
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
              Formación estructurada en trading y reprogramación mental. Clases individuales 1 a 1 y comunidad de crecimiento abierta.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.youtube.com/watch?v=E810GeSt8kc&t=219s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/50 transition-colors"
                title="Canal de YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button 
                onClick={onOpenCommunityModal}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer"
                title="Canal de Telegram / Comunidad"
              >
                <Send className="w-4 h-4" />
              </button>
              <button 
                onClick={onOpenMentorshipModal}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors cursor-pointer"
                title="WhatsApp Directo"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Mentorías 1 a 1
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('planes')} className="hover:text-amber-400 transition-colors">
                  Plan Mensual (8 clases) - $399 USD
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('planes')} className="hover:text-amber-400 transition-colors">
                  Plan Bimensual (16 clases) - $569 USD
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('planes')} className="hover:text-amber-400 transition-colors">
                  Plan Trimestral (24 clases) - $859 USD
                </button>
              </li>
              <li>
                <button onClick={onOpenMentorshipModal} className="text-amber-400 hover:underline">
                  Acompañamiento por WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Free Access */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Comunidad & Recursos
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenCommunityModal} className="hover:text-amber-400 transition-colors">
                  Canal Gratuito de Psicotrading
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('test')} className="hover:text-amber-400 transition-colors">
                  Test de Mentalidad y Disciplina
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculadora')} className="hover:text-amber-400 transition-colors">
                  Calculadora de Gestión de Riesgo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('recursos')} className="hover:text-amber-400 transition-colors">
                  Plantillas y Bitácora Descargable
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Ethics */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
              Aviso de Riesgo y Ética
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              El trading en mercados financieros conlleva un alto nivel de riesgo para su capital. Todo el material proporcionado tiene fines educativos y de desarrollo personal. Nunca opere con dinero que no pueda permitirse perder.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Bryan Sánchez. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo('pilares')} className="hover:text-slate-300">Método</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-slate-300">Preguntas Frecuentes</button>
            <button onClick={onOpenMentorshipModal} className="hover:text-amber-400 text-amber-500">Postulación Privada</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
