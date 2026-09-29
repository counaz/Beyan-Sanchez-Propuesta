import React from 'react';
import { ArrowRight, MessageCircle, Flame, CheckCircle2, Users } from 'lucide-react';

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
        
        {/* Top Tagline Badge from flyer */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-center">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
            <span>Mente · Estrategia · Disciplina · Resultados</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            MÁS VIDA PARA TODOS <span className="gold-gradient-text block sm:inline">Y MENOS PARA NINGUNA</span>
            <span className="block text-lg sm:text-2xl lg:text-3xl font-sans font-bold text-slate-200 mt-2 sm:mt-3 tracking-wide">
              CLASES DE TRADING & MENTORÍAS 1 A 1
            </span>
          </h1>

          <p className="text-sm sm:text-xl lg:text-2xl font-medium text-amber-200/90 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            Formación que reprograma tu mente, fortalece tu disciplina y transforma tus resultados.
          </p>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Aprende con un método estructurado, acompañamiento personalizado por WhatsApp y ratio asimétrico 1:5 con <strong className="text-amber-300 font-semibold">Bryan Sánchez</strong>.
          </p>

          {/* Action CTAs: Full width with easy tap on mobile, inline on desktop */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            
            {/* Free Community button */}
            <button
              onClick={onOpenCommunityModal}
              className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 sm:gap-3 cursor-pointer"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 shrink-0" />
              <span>UNIRME A LA COMUNIDAD GRATUITA</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            {/* Mentorships button */}
            <button
              onClick={() => scrollTo('planes')}
              className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#121620] hover:bg-[#1a202c] text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span>Ver Planes 1 a 1</span>
            </button>

          </div>

          {/* Social Proof Badges */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Clases 100% Personalizadas</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Acompañamiento WhatsApp Directo</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Estrategia Ratio 1:5</span>
            </div>
          </div>

        </div>

        {/* Famous Motto Bar from Bryan's Flyer */}
        <div className="mt-8 sm:mt-14 max-w-4xl mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-amber-950/40 border border-amber-500/30 p-4 sm:p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0,transparent_70%)] pointer-events-none"></div>
          
          <p className="font-cinzel text-base sm:text-2xl font-bold tracking-wide sm:tracking-widest text-amber-400 uppercase leading-snug">
            "DISCIPLINA HOY, LIBERTAD MAÑANA."
          </p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-slate-300 font-medium italic">
            No es suerte, es preparación. No es magia, es método.
          </p>
        </div>

      </div>
    </section>
  );
};
