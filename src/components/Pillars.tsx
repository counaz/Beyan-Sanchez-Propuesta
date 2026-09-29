import React from 'react';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  Award, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
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
      default: return <Sparkles className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="pilares" className="py-16 sm:py-24 relative bg-[#090b10] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Personal Voice */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Mi Filosofía de Vida y Operativa</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            50% DESARROLLO PERSONAL <span className="gold-gradient-text block sm:inline">+ 50% TRADING</span>
          </h2>
          <p className="mt-3.5 text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            "Durante años intenté buscar la estrategia perfecta hasta que entendí la verdad: <strong>el mercado no te hace rico, tu disciplina y tu mentalidad lo hacen</strong>. Estos son los 4 pilares en los que te formo."
          </p>
        </div>

        {/* 4 Pillars Grid */}
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
                
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3 leading-snug">
                  {pillar.subtitle}
                </h4>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Pilar 0{index + 1}</span>
                <span className="text-amber-400 font-medium">Mi Método</span>
              </div>
            </div>
          ))}
        </div>

        {/* ACOMPAÑAMIENTO DIRECTO EN PRIMERA PERSONA */}
        <div className="mt-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121622] via-[#161a29] to-[#0e121c] border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                <MessageCircle className="w-9 h-9 fill-emerald-500/20" />
              </div>
              
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  MI COMPROMISO CONTIGO
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                  ESTOY CONTIGO DIRECTAMENTE EN WHATSAPP
                </h3>
                <p className="mt-2 text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed">
                  No tengo secretarios ni tutores intermedios. En mis mentorías privadas y en mi comunidad hablas conmigo para auditar tus entradas, corregir tus errores de juicio antes de arriesgar tu capital y mantener tu mente en alta frecuencia.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenMentorshipModal}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Postular a Mentoría Privada</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-amber-300/80 font-medium">
                ⚠️ Solo 2 cupos para este mes
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Methodology Cards */}
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
