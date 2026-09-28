import React from 'react';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  Award, 
  MessageCircle, 
  ShieldCheck, 
  Activity, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { CORE_PILLARS, METHOD_FEATURES } from '../data/content';

interface PillarsProps {
  onOpenMentorshipModal: () => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onOpenMentorshipModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-amber-400" />;
      case 'Brain': return <Brain className="w-8 h-8 text-amber-400" />;
      case 'Target': return <Target className="w-8 h-8 text-amber-400" />;
      case 'Award': return <Award className="w-8 h-8 text-amber-400" />;
      default: return <TrendingUp className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="pilares" className="py-20 relative bg-[#090b10] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold mb-2">
            La Fórmula de Bryan Sánchez
          </h2>
          <p className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            4 PILARES PARA TRANSFORMAR TUS RESULTADOS
          </p>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            El 95% de los traders fracasan porque sólo buscan una "estrategia mágica". Nuestro método combina técnica probada, reprogramación mental y autodisciplina inquebrantable.
          </p>
        </div>

        {/* 4 Pillars Grid (Directly mirroring the top row of the flyer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, index) => (
            <div 
              key={index}
              className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-amber-400 transition-all">
                  {getIcon(pillar.icon)}
                </div>
                
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3 leading-snug">
                  {pillar.subtitle}
                </h4>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Pilar 0{index + 1}</span>
                <span className="text-amber-400 font-medium">Método Probado</span>
              </div>
            </div>
          ))}
        </div>

        {/* ACOMPAÑAMIENTO DIRECTO (The highlighted box from the flyer) */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#121622] via-[#161a29] to-[#0e121c] border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                <MessageCircle className="w-9 h-9 fill-emerald-500/20" />
              </div>
              
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  SOPORTE 1 A 1 DIRECTO
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                  ACOMPAÑAMIENTO DIRECTO EN WHATSAPP
                </h3>
                <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Acceso directo con Bryan Sánchez para resolver dudas, revisar tus análisis antes de abrir operaciones, recibir consejos y tener seguimiento continuo durante todo tu proceso de aprendizaje.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenMentorshipModal}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm sm:text-base text-center shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consultar Disponibilidad</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-400">
                Cupos limitados por mes para garantizar atención 1 a 1.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Methodology Cards (Bottom of flyer) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHOD_FEATURES.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
              <div>
                <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
