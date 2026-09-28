import React from 'react';
import { Users, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { COMMUNITY_BENEFITS } from '../data/content';

interface FreeCommunityProps {
  onJoinClick: () => void;
}

export const FreeCommunity: React.FC<FreeCommunityProps> = ({ onJoinClick }) => {
  return (
    <section id="comunidad" className="py-14 sm:py-24 relative bg-gradient-to-b from-[#080a0f] via-[#0d121c] to-[#080a0f]">
      {/* Decorative radial lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121624] via-[#10141f] to-[#0a0d14] border-2 border-amber-500/40 p-5 sm:p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold badge in corner */}
          <div className="sm:absolute sm:top-6 sm:right-6 mb-4 sm:mb-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            100% Gratuito y Abierto
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Comunidad Oficial de Bryan Sánchez</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                ELEVA TU MENTALIDAD Y TRADING <span className="gold-gradient-text block">SIN COSTO ALGUNO</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                El entorno lo es todo. Si te rodeas de traders indisciplinados, operarás con indisciplina. Nuestra comunidad gratuita está diseñada para ayudarte a construir el hábito de la consistencia día tras día.
              </p>

              {/* 4 Pillars of the Community */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
                {COMMUNITY_BENEFITS.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {b.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-normal">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onJoinClick}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>UNIRME AL CANAL GRATIS</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <div className="flex items-center justify-center gap-2.5 text-xs text-slate-400">
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-amber-500/80 border border-[#121624] flex items-center justify-center text-[9px] font-bold text-slate-950">BS</div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/80 border border-[#121624] flex items-center justify-center text-[9px] font-bold text-slate-950">+46</div>
                  </div>
                  <span>Más de 46 miembros activos</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Preview of What Members Experience */}
            <div className="lg:col-span-5">
              <div className="rounded-xl sm:rounded-2xl bg-[#090b12] border border-amber-500/30 p-4 sm:p-5 shadow-2xl relative space-y-3">
                
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span className="text-[11px] font-mono text-slate-400 ml-1.5">Canal Bryan Sánchez VIP</span>
                  </div>
                  <span className="text-[9px] text-amber-400 font-semibold uppercase">En Vivo</span>
                </div>

                {/* Simulated message 1: Mindset */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-amber-400 font-bold">
                    <span>Bryan Sánchez · Mentalidad</span>
                    <span className="text-slate-500 font-normal">08:15 AM</span>
                  </div>
                  <p className="text-slate-200 italic text-[11px] sm:text-xs">
                    "Recuerda: El mercado no te debe nada. Si hoy no ves tu confirmación clara con ratio 1:5, tu mejor trade es NO operar."
                  </p>
                  <div className="flex items-center gap-2 pt-0.5 text-[9px] sm:text-[10px] text-slate-400">
                    <span>🔥 142 reacciones</span>
                    <span>💬 38 comentarios</span>
                  </div>
                </div>

                {/* Simulated message 2: Market Level */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-emerald-400 font-bold">
                    <span>Bryan Sánchez · Visión de Mercado</span>
                    <span className="text-slate-500 font-normal">Ayer</span>
                  </div>
                  <p className="text-slate-200 text-[11px] sm:text-xs">
                    "Zona de liquidez neutralizada con rechazo limpio. Esperen confirmación antes de validar cualquier gatillo."
                  </p>
                  <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono">
                      Estructura Validada
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono">
                      Ratio 1:5 Mínimo
                    </span>
                  </div>
                </div>

                {/* Simulated message 3: Resource Drop */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-0.5">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[10px] sm:text-[11px]">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Recurso Gratis del Mes</span>
                  </div>
                  <p className="text-slate-200 text-[10px] sm:text-[11px]">
                    Descarga la Bitácora de Psicotrading y el Checklist Pre-Mercado en formato descargable para la comunidad.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
