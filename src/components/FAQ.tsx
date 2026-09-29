import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

interface FAQProps {
  onOpenMentorshipModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenMentorshipModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#090c13] border-t border-amber-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparencia y Claridad</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Todo lo que necesitas saber antes de ingresar a la comunidad gratuita o iniciar tu mentoría privada 1 a 1.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0e121c] border border-slate-800 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-cinzel text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? WhatsApp CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-[#0f1320] border border-amber-500/20 space-y-4">
          <h3 className="font-cinzel text-xl font-bold text-white">
            ¿Tienes alguna duda específica sobre tu caso?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Escríbeme directamente por WhatsApp para conocernos, evaluar tu situación actual y ver si mis mentorías privadas 1 a 1 son el camino correcto para ti.
          </p>
          <div>
            <button
              onClick={onOpenMentorshipModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Hablar directamente conmigo por WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
