import React from 'react';
import { 
  Users, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  MessageSquare, 
  Compass, 
  BookOpen, 
  Headphones, 
  ArrowRight 
} from 'lucide-react';
import { COMMUNITY_BENEFITS } from '../data/content';

interface FreeCommunityProps {
  onJoinClick: () => void;
}

export const FreeCommunity: React.FC<FreeCommunityProps> = ({ onJoinClick }) => {
  return (
    <section id="comunidad" className="py-24 relative bg-gradient-to-b from-[#080a0f] via-[#0d121c] to-[#080a0f]">
      {/* Decorative radial lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#121624] via-[#10141f] to-[#0a0d14] border-2 border-amber-500/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold badge in corner */}
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            100% Gratuito y Abierto
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Comunidad Oficial de Bryan Sánchez</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white leading-tight">
                ELEVA TU MENTALIDAD Y TRADING <span className="gold-gradient-text block">SIN COSTO ALGUNO</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                El entorno lo es todo. Si te rodeas de traders indisciplinados, operarás con indisciplina. Nuestra comunidad gratuita está diseñada para ayudarte a construir el hábito de la consistencia día tras día.
              </p>

              {/* 4 Pillars of the Community */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {COMMUNITY_BENEFITS.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {b.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onJoinClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>UNIRME AL CANAL GRATIS</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-amber-500/80 border-2 border-[#121624] flex items-center justify-center text-[10px] font-bold text-slate-950">BS</div>
                    <div className="w-7 h-7 rounded-full bg-emerald-500/80 border-2 border-[#121624] flex items-center justify-center text-[10px] font-bold text-slate-950">+1.8K</div>
                  </div>
                  <span>Más de 1,850 traders activos</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Preview of What Members Experience */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#090b12] border border-amber-500/30 p-5 shadow-2xl relative space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">Canal Bryan Sánchez Vip Free</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-semibold uppercase">En Vivo</span>
                </div>

                {/* Simulated message 1: Mindset */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-amber-400 font-bold">
                    <span>Bryan Sánchez · Mentalidad Matutina</span>
                    <span className="text-slate-500 font-normal">08:15 AM</span>
                  </div>
                  <p className="text-slate-200 italic">
                    "Recuerda: El mercado no te debe nada. Si hoy no ves tu confirmación clara, tu mejor trade es NO operar. La paciencia también paga dividendos."
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[10px] text-slate-400">
                    <span>🔥 142 reacciones</span>
                    <span>💬 38 comentarios</span>
                  </div>
                </div>

                {/* Simulated message 2: Market Level */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-emerald-400 font-bold">
                    <span>Bryan Sánchez · Visión de Mercado</span>
                    <span className="text-slate-500 font-normal">Ayer</span>
                  </div>
                  <p className="text-slate-200">
                    "Zona de liquidez neutralizada con rechazo limpio. Esperen confirmación en temporalidad menor antes de validar cualquier gatillo."
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                      Estructura Validada
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono">
                      Riesgo Asimétrico
                    </span>
                  </div>
                </div>

                {/* Simulated message 3: Resource Drop */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Recurso Gratis del Mes</span>
                  </div>
                  <p className="text-slate-200 text-[11px]">
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
