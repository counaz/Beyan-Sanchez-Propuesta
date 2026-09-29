import React from 'react';
import { ArrowRight, MessageCircle, Flame, CheckCircle2, Users, AlertCircle, Sparkles, Brain } from 'lucide-react';

interface HeroProps {
  onOpenCommunityModal: () => void;
  onOpenMentorshipModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCommunityModal,
  onOpenMentorshipModal
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Background radial gold glow and chart overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] sm:h-[620px] pointer-events-none opacity-40 candlestick-glow"></div>
      
      {/* Subtle background candle graphic for desktop */}
      <div className="absolute top-10 left-4 sm:left-12 opacity-15 pointer-events-none hidden md:block">
        <div className="flex items-end gap-3 h-64">
          <div className="w-3 h-28 bg-amber-500 rounded-sm relative">
            <span className="w-0.5 h-6 bg-amber-400 absolute -top-6 left-1.5"></span>
            <span className="w-0.5 h-8 bg-amber-400 absolute -bottom-8 left-1.5"></span>
          </div>
          <div className="w-3 h-40 bg-emerald-500 rounded-sm relative">
            <span className="w-0.5 h-10 bg-emerald-400 absolute -top-10 left-1.5"></span>
            <span className="w-0.5 h-4 bg-emerald-400 absolute -bottom-4 left-1.5"></span>
          </div>
          <div className="w-3 h-52 bg-amber-500 rounded-sm relative">
            <span className="w-0.5 h-8 bg-amber-400 absolute -top-8 left-1.5"></span>
            <span className="w-0.5 h-6 bg-amber-400 absolute -bottom-6 left-1.5"></span>
          </div>
          <div className="w-3 h-36 bg-emerald-400 rounded-sm relative">
            <span className="w-0.5 h-12 bg-emerald-400 absolute -top-12 left-1.5"></span>
            <span className="w-0.5 h-5 bg-emerald-400 absolute -bottom-5 left-1.5"></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge - Integral Success + 50/50 balance */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-center shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Éxito Integral: Mente, Cuerpo y Alma · Trading & Desarrollo Personal</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            MÁS VIDA PARA TODOS <span className="gold-gradient-text block sm:inline">Y MENOS PARA NINGUNA</span>
            <span className="block text-lg sm:text-2xl lg:text-3xl font-sans font-bold text-slate-200 mt-2 sm:mt-3 tracking-wide">
              ÉXITO INTEGRAL, CAMBIO DE VIDA & TRADING 1 A 1
            </span>
          </h1>

          {/* Urgent Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-bold animate-pulse">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>⚠️ ATENCIÓN: Solo abro 2 cupos para mi mentoría 1 a 1 este mes</span>
          </div>

          {/* Personal Voice from Bryan */}
          <p className="text-sm sm:text-xl font-medium text-amber-200/95 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            "El éxito financiero solo es una consecuencia natural de tu desarrollo en mente, cuerpo y alma."
          </p>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Soy <strong>Bryan Sánchez</strong>. Mi comunidad no es solo de trading: es un ecosistema de éxito integral. La mayoría nos dedicamos al trading, pero este espacio sirve para <strong>todo aquel que busque transformar su vida por completo</strong>.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            
            {/* Free Community button */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={onOpenCommunityModal}
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 sm:gap-3 cursor-pointer"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 shrink-0" />
                <span>UNIRTE A MI COMUNIDAD EN WHATSAPP</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* +50 Personas Community Badge */}
              <div className="inline-flex items-center gap-2 text-xs text-slate-300 font-medium">
                <div className="flex -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-black text-[8px] flex items-center justify-center border border-[#080a0f]">BS</span>
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[8px] flex items-center justify-center border border-[#080a0f]">LG</span>
                  <span className="w-5 h-5 rounded-full bg-sky-500 text-slate-950 font-black text-[8px] flex items-center justify-center border border-[#080a0f]">FA</span>
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-300 font-black text-[8px] flex items-center justify-center border border-[#080a0f]">+50</span>
                </div>
                <span><strong className="text-emerald-400 font-bold">+50 personas</strong> en mi comunidad gratuita</span>
              </div>
            </div>

            {/* Mentorships button */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => scrollTo('planes')}
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#121620] hover:bg-[#1a202c] text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <span>Mis Mentorías 1 a 1 (Solo 2 Cupos)</span>
              </button>
              <span className="text-[11px] text-amber-400/80 font-medium hidden sm:inline">
                Acompañamiento personal directo conmigo
              </span>
            </div>

          </div>

          {/* Social Proof Badges */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Brain className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Desarrollo Personal & Mentalidad</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Contacto directo conmigo por WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Estrategia Matemática Ratio 1:5</span>
            </div>
          </div>

        </div>

        {/* Famous Motto Bar from Bryan's Heart */}
        <div className="mt-8 sm:mt-14 max-w-4xl mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-amber-950/40 border border-amber-500/30 p-4 sm:p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-2">
            <p className="font-cinzel text-xl sm:text-3xl font-extrabold text-amber-300 tracking-wider">
              "DISCIPLINA HOY, LIBERTAD MAÑANA."
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium">
              No busco alumnos que quieran dinero fácil. Busco personas dispuestas a elevar su nivel de consciencia, cambiar de hábitos y aprender una profesión de verdad.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
