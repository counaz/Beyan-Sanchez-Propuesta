import React from 'react';
import { Youtube, ExternalLink, Brain, Sparkles, BookOpen, Crown, Flame } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoId = "E810GeSt8kc";
  const startSeconds = 219;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}&t=${startSeconds}s`;

  return (
    <section id="video" className="py-20 relative bg-[#090c13] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Inspirado en «La Ciencia de Hacerse Rico»</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-tight">
            CÓMO PIENSA UNA <span className="gold-gradient-text">MENTE MAESTRA</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            La técnica te da las reglas, pero tu mente determina tus resultados. En este episodio, Bryan Sánchez profundiza en la psicología de la abundancia, el control del ego y los principios inquebrantables del libro <strong className="text-amber-300 font-semibold">"La Ciencia de Hacerse Rico"</strong> aplicados a la vida y al trading.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-black border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 relative group">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-3xl"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?start=${startSeconds}&autoplay=0&rel=0`}
                title="Bryan Sánchez - Cómo Piensa Una Mente Maestra | La Ciencia de Hacerse Rico"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Under-video Controls / Direct Link */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-semibold text-white">Episodio oficial de Bryan Sánchez</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400 font-medium">Capítulo destacado: Reprogramación Mental (Minuto 3:39)</span>
            </div>
            
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold transition-colors"
            >
              <span>Ver en YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quote Banner: Wallace D. Wattles Philosophy */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-[#10141f] to-amber-950/30 border border-amber-500/30 text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">
              <Crown className="w-4 h-4" />
              <span>El Fundamento Filosófico de Bryan Sánchez</span>
            </div>
            <p className="font-cinzel text-sm sm:text-base text-slate-200 italic max-w-2xl mx-auto leading-relaxed">
              "Existe una ciencia para generar abundancia, y es una ciencia exacta. Hay ciertas leyes que rigen la prosperidad; una vez aprendidas y obedecidas, la libertad financiera llega con certeza matemática."
            </p>
            <span className="block mt-2 text-xs font-semibold text-amber-300">
              — Wallace D. Wattles, <span className="italic">La Ciencia de Hacerse Rico</span>
            </span>
          </div>

          {/* 3 Core Mindset Pillars from the Philosophy */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="p-5 rounded-2xl bg-[#0e121c] border border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-white mb-2">
                1. Mente Creadora vs Competidora
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                El trader promedio compite con ansiedad por "sacarle plata al mercado" desde el miedo. La mente maestra opera desde la convicción y la certeza de su método, sin rivalidad emocional.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e121c] border border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-white mb-2">
                2. Pensar de una «Cierta Manera»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Como enseña Wattles, tus pensamientos diarios crean tus actos. Si piensas en pérdidas y escasez, cometerás errores de sobrelote. Pensar con claridad matemática crea consistencia duradera.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e121c] border border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-white mb-2">
                3. Propósito & Gratitud Activa
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No operas por dinero vacío, sino por libertad y transformación personal. La gratitud y la disciplina férrea protegen tu mente contra el autosabotaje y el FOMO diario.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
