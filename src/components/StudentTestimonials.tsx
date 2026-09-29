import React, { useState } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Flame, 
  Award, 
  Sparkles, 
  X, 
  Maximize2, 
  CheckCheck,
  ZoomIn
} from 'lucide-react';
import { STUDENT_PROOFS, StudentProof } from '../data/content';

interface StudentTestimonialsProps {
  onOpenCommunityModal: () => void;
  onOpenMentorshipModal: () => void;
}

export const StudentTestimonials: React.FC<StudentTestimonialsProps> = ({
  onOpenCommunityModal,
  onOpenMentorshipModal
}) => {
  const [activeProof, setActiveProof] = useState<StudentProof | null>(null);

  return (
    <section id="testimonios" className="py-16 sm:py-24 relative bg-[#06080e] border-t border-b border-amber-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Resultados & Prueba Social 100% Real</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            IMPACTANDO VIDAS <span className="gold-gradient-text block sm:inline">DENTRO Y FUERA</span> DEL MERCADO
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Capturas reales de WhatsApp y correos de cuentas de fondeo aprobadas por alumnos y miembros de la comunidad. Toca cualquier captura para verla en pantalla completa.
          </p>

          {/* Social Proof Counter Banner */}
          <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>+50 personas transformando sus hábitos y su economía</span>
          </div>
        </div>

        {/* Featured Card: FundingPips Challenge Passed in 1 Day */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121824] via-[#0d131f] to-[#090e17] border-2 border-emerald-500/50 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="sm:absolute sm:top-6 sm:right-6 mb-3 sm:mb-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Caso Destacado de Fondeo</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Real screenshot preview with phone mockup frame */}
              <div 
                onClick={() => setActiveProof(STUDENT_PROOFS[0])}
                className="md:col-span-5 rounded-2xl overflow-hidden bg-slate-950 border-2 border-emerald-500/40 shadow-2xl cursor-pointer group relative hover:border-emerald-400 transition-all max-w-sm mx-auto w-full"
              >
                <div className="relative aspect-[9/14] sm:aspect-[9/13] overflow-hidden bg-slate-900">
                  <img 
                    src={STUDENT_PROOFS[0].image} 
                    alt="Captura de Fondeo Lucas Gallardo"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                    <span className="w-full py-2 px-3 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/30">
                      <ZoomIn className="w-4 h-4" />
                      Toca para ampliar captura completa
                    </span>
                  </div>
                </div>
              </div>

              {/* Student quote and breakdown */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
                  <span className="text-sm font-extrabold text-white">Lucas Gallardo Trader</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-emerald-400 font-semibold">Comunidad Oficial WhatsApp</span>
                </div>

                <div className="rounded-xl bg-[#1f2c34] border border-[#2a3942] p-4 text-slate-100 text-xs sm:text-sm leading-relaxed shadow-lg">
                  <div className="text-[11px] font-bold text-emerald-400 mb-1 flex items-center justify-between">
                    <span>Lucas Gallardo Trader</span>
                    <span className="text-[10px] text-slate-400 font-normal">18:42</span>
                  </div>
                  <p className="italic text-slate-100">
                    "Hoy me compré una cuenta de fondeo para arrancarla con el reto y ya pasamos Fase 1 en un solo trade y día, estamos en una frecuencia que nunca antes sentí 🔥 Gracias especialmente a <strong className="text-amber-300 font-bold">@Bryan Sanchez</strong> por todo lo que nos enseñas y tomarte el tiempo de todo lo que haces."
                  </p>
                  <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <CheckCheck className="w-4 h-4 text-sky-400" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Fase 1 Superada en 1 Trade y en 1 Solo Día</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Aplicando el ratio asimétrico 1:5 y la gestión de riesgo que Bryan enseña en sus llamadas y mentorías privadas.
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => setActiveProof(STUDENT_PROOFS[0])}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ver imagen de la prueba en pantalla completa</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Testimonial Cards Grid with Real Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {STUDENT_PROOFS.map((proof, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveProof(proof)}
              className="rounded-2xl bg-[#0c1018] border border-amber-500/25 hover:border-amber-400 transition-all p-4 sm:p-5 flex flex-col justify-between shadow-xl space-y-4 hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-3">
                
                {/* Author Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                      {proof.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                        <span>{proof.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                      <span className="text-[10px] text-slate-400">{proof.role}</span>
                    </div>
                  </div>

                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${proof.badgeColor}`}>
                    {proof.badge}
                  </span>
                </div>

                {/* Real Screenshot Preview */}
                {proof.image && (
                  <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[4/3] group/img">
                    <img 
                      src={proof.image} 
                      alt={`Captura real testimonio de ${proof.author}`}
                      className="w-full h-full object-cover object-top opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[10px] font-bold text-amber-300 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                        <ZoomIn className="w-3 h-3 text-amber-400" /> Toca para ampliar captura
                      </span>
                    </div>
                  </div>
                )}

                {/* Text summary quote */}
                <div className="rounded-xl bg-[#1f2c34] border border-[#2a3942] p-3 text-slate-100 text-xs leading-relaxed relative shadow-md">
                  <p className="italic text-slate-200">
                    "{proof.quote}"
                  </p>

                  <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <span>{proof.time || '18:24'}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                </div>

                {/* Subtext info */}
                <p className="text-[11px] text-slate-400 leading-snug pl-1">
                  {proof.subtext}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Sparkles className="w-3 h-3" /> Captura Auténtica
                </span>
                <span className="text-amber-400 group-hover:underline flex items-center gap-1 text-[10px] font-bold">
                  <Maximize2 className="w-3 h-3" /> Ver captura completa
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0c1018] border border-amber-500/25 max-w-2xl mx-auto space-y-3">
          <p className="font-cinzel text-lg font-bold text-white">
            ¿Quieres ser el próximo en transformar su vida y sus resultados?
          </p>
          <p className="text-xs text-slate-300">
            Únete gratis a nuestra comunidad de más de 50 personas o postula a las mentorías 1 a 1 de Bryan Sánchez.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenCommunityModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Unirme a la Comunidad Gratuita</span>
            </button>
            <button
              onClick={onOpenMentorshipModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#141a26] hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver Mentorías 1 a 1 (2 cupos)</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Lightbox Modal for Full View / Zoom */}
      {activeProof && (
        <div 
          onClick={() => setActiveProof(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl bg-[#111b21] border border-slate-700 p-4 sm:p-5 shadow-2xl text-left space-y-3 sm:space-y-4 max-h-[92vh] overflow-y-auto"
          >
            {/* Close button */}
            <button 
              onClick={() => setActiveProof(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer z-10 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3 pr-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-bold flex items-center justify-center text-sm shrink-0">
                {activeProof.author.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-1.5">
                  <span>{activeProof.author}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </h3>
                <span className="text-xs text-emerald-400 font-medium">{activeProof.role}</span>
              </div>
            </div>

            {/* Enlarged Real Image */}
            {activeProof.image && (
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-black flex justify-center items-center">
                <img 
                  src={activeProof.image} 
                  alt={activeProof.author}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>
            )}

            {/* Message context */}
            <div className="p-3 rounded-xl bg-[#1f2c34] border border-[#2a3942] text-xs text-slate-200 space-y-1">
              <div className="flex items-center justify-between text-emerald-400 font-bold text-[11px]">
                <span>{activeProof.author}</span>
                <span className="text-[10px] text-slate-400">Captura Verificada</span>
              </div>
              <p className="italic">"{activeProof.quote}"</p>
            </div>

            {/* Action buttons inside modal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={() => {
                  setActiveProof(null);
                  onOpenCommunityModal();
                }}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Hablar en el WhatsApp de Bryan</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
