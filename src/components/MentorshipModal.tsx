import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { TRADING_PLANS } from '../data/content';

interface MentorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanId?: string;
}

export const MentorshipModal: React.FC<MentorshipModalProps> = ({
  isOpen,
  onClose,
  defaultPlanId = 'bimensual'
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(defaultPlanId);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [experience, setExperience] = useState('Intermedio (sé lo básico pero no soy rentable)');
  const [mainObstacle, setMainObstacle] = useState('Control de Emociones & Disciplina');

  if (!isOpen) return null;

  const currentPlan = TRADING_PLANS.find((p) => p.id === selectedPlanId) || TRADING_PLANS[1];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const planTitle = currentPlan.name;
    const planPrice = `$${currentPlan.priceUSD} USD`;

    const message = `¡Hola Bryan! Vengo de tu sitio web oficial y deseo postularme a las Mentorías 1 a 1.

Mis datos de postulación:
• Nombre: ${name || 'Trader Interesado'}
• País: ${country || 'Latinoamérica'}
• Plan de interés: ${planTitle} (${planPrice})
• Nivel actual: ${experience}
• Mi mayor reto hoy: ${mainObstacle}

¿Podrías indicarme disponibilidad de cupos y coordinar los detalles de inicio? Gracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl bg-[#0c1018] border-2 border-amber-500/40 p-4 sm:p-8 shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5 sm:mb-6 pr-6 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Postulación Directa</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-3xl font-extrabold text-white">
            MENTORÍA 1 A 1 CON BRYAN
          </h3>
          <p className="mt-1 text-xs text-slate-300">
            Completa tus datos para coordinar cupos y temario directamente por WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-3.5 sm:space-y-4">
          
          {/* Plan Selector */}
          <div>
            <label className="block text-[11px] sm:text-xs uppercase font-bold text-slate-400 mb-1.5">
              Selecciona tu Plan:
            </label>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {TRADING_PLANS.map((plan) => {
                const isSelected = plan.id === selectedPlanId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="block text-[10px] sm:text-[11px] font-bold truncate">{plan.name.replace('PLAN ', '')}</span>
                    <span className="block text-xs sm:text-sm font-black text-amber-400 font-cinzel mt-0.5">
                      ${plan.priceUSD} <span className="text-[9px] text-slate-400 font-normal">USD</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-semibold text-slate-400 mb-1">
                Tu Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Carlos Martínez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-base sm:text-xs outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-semibold text-slate-400 mb-1">
                País / Ciudad
              </label>
              <input
                type="text"
                placeholder="Ej. Colombia / México"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-base sm:text-xs outline-none"
              />
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-[11px] sm:text-xs uppercase font-semibold text-slate-400 mb-1">
              ¿Cuál es tu nivel actual en Trading?
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-base sm:text-xs outline-none cursor-pointer"
            >
              <option value="Principiante (empezando desde cero)">Principiante (empezando desde cero sin bases)</option>
              <option value="Intermedio (sé lo básico pero no soy rentable)">Intermedio (sé lo básico pero no soy rentable)</option>
              <option value="Avanzado (busco fondeo de cuentas y consistencia)">Avanzado (busco fondeo de cuentas y consistencia)</option>
            </select>
          </div>

          {/* Main Obstacle */}
          <div>
            <label className="block text-[11px] sm:text-xs uppercase font-semibold text-slate-400 mb-1">
              ¿Cuál es tu mayor obstáculo a resolver?
            </label>
            <select
              value={mainObstacle}
              onChange={(e) => setMainObstacle(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-base sm:text-xs outline-none cursor-pointer"
            >
              <option value="Control de Emociones & Disciplina">Control de Emociones & Disciplina (Psicotrading)</option>
              <option value="Gestión de Riesgo & Sobrelotaje">Gestión de Riesgo & Sobrelotaje</option>
              <option value="Estrategia clara y lectura de estructura">Estrategia clara y lectura de estructura de mercado</option>
              <option value="Aprobar una cuenta de fondeo (Prop Firm)">Aprobar una cuenta de fondeo (Prop Firm)</option>
            </select>
          </div>

          {/* Guarantee pill */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2 text-[11px] sm:text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Al enviar se abrirá WhatsApp con el mensaje listo para Bryan.</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Enviar Postulación por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

      </div>
    </div>
  );
};
