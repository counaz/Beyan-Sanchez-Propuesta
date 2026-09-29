import React from 'react';
import { Star, MessageCircle, Calendar, ArrowRight, Shield, Sparkles, AlertCircle, Check } from 'lucide-react';
import { TRADING_PLANS, Plan, getWhatsAppUrl } from '../data/content';

interface PricingPlansProps {
  onSelectPlan?: (planId: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = () => {
  return (
    <section id="planes" className="py-14 sm:py-24 relative bg-[#080a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Scarcity / Urgency Alert Header */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-transparent border-2 border-amber-500/50 shadow-lg shadow-amber-500/10 flex items-center gap-3 sm:gap-4 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
              <AlertCircle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider">
                  ⚠️ DISPONIBILIDAD ESTRICTA: SOLO ABRO 2 CUPOS ESTE MES
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                Mi tiempo es limitado porque opero a diario y no delego mis alumnos con nadie: te atiendo yo personalmente por WhatsApp. Para darte mi 100%, solo recibo a <strong>2 personas</strong> este mes.
              </p>
            </div>
          </div>
        </div>

        {/* Title & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mis Programas de Mentoría 1 a 1</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ELIGE TU PROGRAMA DE FORMACIÓN
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-300 text-xs sm:text-base px-2 max-w-2xl mx-auto">
            50% Desarrollo Personal y Hábitos + 50% Trading de Alta Precisión. Toca tu plan para escribirle directamente a mi WhatsApp con la información del plan que elegiste.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-lg md:max-w-none mx-auto">
          {TRADING_PLANS.map((plan: Plan) => {
            const isFeatured = plan.highlighted;

            // Direct WhatsApp message containing the exact plan selected
            const planWhatsAppMessage = `¡Hola Bryan! Vengo de tu web. Vi que solo abres 2 cupos para tu mentoría 1 a 1 este mes y me quiero postular directamente contigo para el ${plan.name} ($${plan.priceUSD} USD - ${plan.duration}, ${plan.classesCount}). ¿Aún te queda cupo disponible para coordinar mi inicio?`;
            const planWhatsAppUrl = getWhatsAppUrl(planWhatsAppMessage);

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#10141f] border-2 border-amber-400 shadow-2xl shadow-amber-500/20 md:-translate-y-2'
                    : 'bg-[#0c0f17] border border-amber-500/25 hover:border-amber-500/50 shadow-xl'
                }`}
              >
                {/* Popular or Recommended Tag */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-md flex items-center gap-1 whitespace-nowrap">
                      <Star className="w-3 h-3 fill-slate-950" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-5 sm:p-8">
                  {/* Plan Header */}
                  <div className="text-center pb-5 border-b border-slate-800">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <h3 className="font-cinzel text-lg sm:text-2xl font-black tracking-wide text-white">
                      {plan.name}
                    </h3>
                    
                    <span className="inline-block mt-1 text-[11px] sm:text-xs font-semibold text-amber-300 uppercase tracking-widest">
                      {plan.duration}
                    </span>

                    {/* 2 spots badge */}
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
                      <span>SOLO 2 CUPOS RESTANTES</span>
                    </div>

                    <p className="mt-2 text-xs text-slate-400 min-h-[32px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="my-5 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                      Inversión {plan.duration}
                    </span>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-3xl sm:text-5xl font-black text-amber-400 font-cinzel">
                        ${plan.priceUSD}
                      </span>
                      <span className="text-xs uppercase font-bold text-slate-400">USD</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                      {plan.classesCount}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 sm:space-y-3.5 pt-2">
                    <p className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Incluye:
                    </p>
                    
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-amber-300" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}

                    {/* Bonus features */}
                    {plan.exclusiveBonus && plan.exclusiveBonus.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-amber-500/20 space-y-1.5">
                        {plan.exclusiveBonus.map((bonus, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-amber-300">
                            <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                            <span>{bonus}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Direct Action Link to WhatsApp (Zero intermediate form) */}
                <div className="p-5 sm:p-8 pt-0">
                  <a
                    href={planWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/30 hover:border-amber-400'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                    <span>Postular por WhatsApp (2 Cupos)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span>Abre WhatsApp directo con la info del {plan.name}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
