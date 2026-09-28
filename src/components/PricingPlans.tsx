import React from 'react';
import { Check, Star, Zap, Shield, Sparkles, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { TRADING_PLANS, Plan } from '../data/content';

interface PricingPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="planes" className="py-24 relative bg-[#080a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Mentoría Privada 1 a 1
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ELIGE TU PROGRAMA DE FORMACIÓN
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Acompañamiento personalizado directamente con Bryan Sánchez para reprogramar tu mente, construir disciplina y ejecutar sin emociones.
          </p>
        </div>

        {/* 3 Plans Grid (Directly mirroring Plan 1, Plan 2, Plan 3 from the flyer) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TRADING_PLANS.map((plan: Plan) => {
            const isFeatured = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#10141f] border-2 border-amber-400 shadow-2xl shadow-amber-500/20 md:-translate-y-3'
                    : 'bg-[#0c0f17] border border-amber-500/25 hover:border-amber-500/50 shadow-xl'
                }`}
              >
                {/* Popular or Recommended Tag */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-slate-950" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 sm:p-8">
                  {/* Plan Header */}
                  <div className="text-center pb-6 border-b border-slate-800">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Calendar className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-cinzel text-xl sm:text-2xl font-black tracking-wide text-white">
                      {plan.name}
                    </h3>
                    
                    <span className="inline-block mt-1 text-xs font-semibold text-amber-300 uppercase tracking-widest">
                      {plan.duration}
                    </span>

                    <p className="mt-3 text-xs text-slate-400 min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="my-6 text-center">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                      Inversión {plan.duration}
                    </span>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-amber-400 font-cinzel">
                        ${plan.priceUSD}
                      </span>
                      <span className="text-xs uppercase font-bold text-slate-400">USD</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                      {plan.classesCount}
                    </span>
                  </div>

                  {/* Feature Checklist from the flyer */}
                  <div className="space-y-3.5 pt-2">
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Incluye:
                    </p>
                    
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-amber-300" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}

                    {/* Bonus features for Plan 2 and 3 */}
                    {plan.exclusiveBonus && plan.exclusiveBonus.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-amber-500/20 space-y-2">
                        {plan.exclusiveBonus.map((bonus, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-amber-300 font-medium">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0 mt-0.5" />
                            <span>{bonus}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-7 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/30'
                        : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-white border border-amber-500/40'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-2.5">
                    Coordinación directa vía WhatsApp con Bryan
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee and Methodology note */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-[#0c1017] border border-amber-500/20 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-semibold text-sm mb-2">
            <Shield className="w-4 h-4" />
            <span>Compromiso de Aprendizaje Genuino</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            No te enseñamos sistemas automatizados ni te prometemos hacerte millonario de la noche a la mañana. Te entregamos un método profesional, mentalidad blindada y acompañamiento real para que seas tú quien tome el control total de sus decisiones.
          </p>
        </div>

      </div>
    </section>
  );
};
