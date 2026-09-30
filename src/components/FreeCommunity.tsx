import React from 'react';
import { Users, MessageCircle, CheckCircle2, Sparkles, ArrowRight, BookOpen, Flame, Heart } from 'lucide-react';
import { getWhatsAppUrl, COMMUNITY_INVITE_URL } from '../data/content';

interface FreeCommunityProps {
  onJoinClick: () => void;
}

export const FreeCommunity: React.FC<FreeCommunityProps> = ({ onJoinClick }) => {
  const whatsappUrl = getWhatsAppUrl('¡Hola Bryan! Vengo de tus redes sociales y quiero unirme a tu Comunidad Gratuita de WhatsApp (+50 personas) para participar de las lecturas y operativas en vivo.');

  return (
    <section id="comunidad" className="py-14 sm:py-24 relative bg-gradient-to-b from-[#080a0f] via-[#0d121c] to-[#080a0f]">
      {/* Decorative radial lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121624] via-[#10141f] to-[#0a0d14] border-2 border-emerald-500/40 p-5 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Top badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>Mi Comunidad Abierta y Gratuita</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>+50 personas en la comunidad · Acceso 100% libre</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Personal message from Bryan */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                BIENVENIDO A MI COMUNIDAD <span className="gold-gradient-text block">GRATUITA EN WHATSAPP</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                "Creé este espacio porque sé lo solitario y frustrante que es intentar cambiar de vida y operar solo en tu habitación. Aquí comparto todo lo que a mí me costó años de caídas entender, combinando el desarrollo personal con el trading real."
              </p>

              {/* 3 Pillars of the Community: Éxito Integral, Book Reading & Real Live Trading */}
              <div className="space-y-3 pt-1">
                
                {/* 1. Éxito Integral: Mente, Cuerpo y Alma */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-purple-500/15 via-purple-500/5 to-transparent border border-purple-500/30 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-purple-300">
                        Éxito Integral: Mente, Cuerpo y Alma
                      </h4>
                      <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full font-bold">Para Todos</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                      No es solo una comunidad de trading. Aunque la mayoría operamos en los mercados, este espacio sirve para <strong>cualquier persona que quiera tener éxito integral en la vida</strong>, reprogramar sus pensamientos y construir disciplina en todas las áreas.
                    </p>
                  </div>
                </div>

                {/* 2. Lectura en vivo de "La ciencia de hacerse rico" */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-amber-300">
                        Lectura Semanal en Vivo: "La Ciencia de Hacerse Rico"
                      </h4>
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-full font-bold">Semanal</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                      El libro de Wallace D. Wattles que cambió mi vida y la de mis alumnos. Cada semana nos conectamos en vivo a estudiar y desglosar un capítulo para reprogramar la mente de escasez hacia la fe, la certeza, la gratitud y la abundancia.
                    </p>
                  </div>
                </div>

                {/* 3. Operativas en vivo 100% reales sin humo */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <Flame className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-emerald-300">
                        Operativas en Vivo 100% Reales (Sin Humo)
                      </h4>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold">En Directo</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                      Operamos juntos en mercados reales. Te explico exactamente por qué tomo o descarto una entrada, cómo aplico el ratio asimétrico 1:5 y respondo todas tus preguntas sin filtros.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Button with +50 persons indicator (NO visible phone numbers) */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={COMMUNITY_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>UNIRME AUTOMÁTICAMENTE AL GRUPO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* +50 Personas Badge */}
                <div className="flex items-center justify-center sm:justify-start gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-[#121624]">BS</div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-[#121624]">LG</div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-[#121624]">FA</div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-emerald-300 font-bold text-[10px] flex items-center justify-center border-2 border-[#121624]">+50</div>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-white leading-tight">+50 personas activas</p>
                    <p className="text-[10px] text-emerald-400 leading-tight">en mi comunidad oficial</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Weekly Agenda & Personal Note from Bryan */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#090c14] border-2 border-amber-500/40 p-5 sm:p-6 shadow-2xl relative space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase">
                      MI AGENDA SEMANAL
                    </span>
                    <span className="text-xs font-bold text-white">Con Bryan</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    En Vivo
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Item 1 */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-amber-300 font-bold">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        <span>Lectura: La Ciencia de Hacerse Rico</span>
                      </div>
                      <span className="text-slate-400 font-normal">Capítulo Semanal</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Aprenderás a pensar de una 'Cierta Manera': dejando atrás la competencia destructiva y creando abundancia desde la disciplina y la gratitud.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-emerald-300 font-bold">
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Operativa en Vivo Sin Humo</span>
                      </div>
                      <span className="text-slate-400 font-normal">Mercados Reales</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Gráficos limpios, toma de decisiones objetiva, ratio 1:5 y resolución de dudas directas conmigo.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>El Próximo Paso: Mi Skool</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Retos diarios de desarrollo personal + operativas diarias conjuntas para transformar tu vida al 100%.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center border-t border-slate-800/80">
                  <p className="text-[11px] text-amber-300/90 font-medium italic">
                    "Más vida para todos y menos para ninguno." — Bryan Sánchez
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
