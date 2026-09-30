import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_INVITE_URL, getWhatsAppUrl } from '../data/content';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose }) => {
  const [rulesAccepted, setRulesAccepted] = useState(true);

  if (!isOpen) return null;

  const directGroupUrl = COMMUNITY_INVITE_URL;
  const privateWhatsAppUrl = getWhatsAppUrl('¡Hola Bryan! Vengo de tu web y me gustaría hablar contigo antes de ingresar al grupo.');

  const handleJoinDirect = () => {
    window.open(directGroupUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-[#0c1018] border-2 border-emerald-500/40 p-5 sm:p-7 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <div className="w-13 h-13 mx-auto mb-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Users className="w-6 h-6" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Acceso Inmediato y Gratuito</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white mt-1">
            COMUNIDAD OFICIAL DE WHATSAPP
          </h3>
          <p className="mt-1.5 text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
            Únete de forma 100% directa y automática. Espacio de crecimiento personal, disciplina, lecturas en vivo y trading de alta precisión.
          </p>
        </div>

        {/* Direct Access Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#0e161c] to-[#0a1015] border border-emerald-500/40 space-y-4">
          
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageCircle className="w-5 h-5 fill-emerald-400 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Grupo: Más Vida Para Todos</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </h4>
                <p className="text-[11px] text-emerald-300/90 font-medium">+50 personas activas</p>
              </div>
            </div>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Libre
            </span>
          </div>

          {/* Anti-bot & Community Guidelines Protection */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Reglas de Oro del Grupo (Filtro Antispam):</span>
            </div>
            <ul className="space-y-1 text-slate-300 pl-1">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">1.</span>
                <span>Cero spam, enlaces externos o autopromoción (expulsión inmediata).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">2.</span>
                <span>Prohibido enviar mensajes privados no solicitados a miembros del grupo.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">3.</span>
                <span>Respeto mutuo y compromiso con el crecimiento personal y trading.</span>
              </li>
            </ul>

            <label className="flex items-center gap-2 pt-1 text-[11px] text-slate-200 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={rulesAccepted} 
                onChange={(e) => setRulesAccepted(e.target.checked)}
                className="w-3.5 h-3.5 accent-emerald-500 rounded cursor-pointer"
              />
              <span className="font-semibold text-emerald-300">Acepto las reglas de convivencia</span>
            </label>
          </div>

          {/* Primary Action Button: Direct One-Click Join to WhatsApp */}
          <button
            onClick={handleJoinDirect}
            disabled={!rulesAccepted}
            className={`w-full py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer ${
              rulesAccepted 
                ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.01]' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60'
            }`}
          >
            <MessageCircle className="w-5 h-5 fill-current shrink-0" />
            <span>UNIRME AL GRUPO DE WHATSAPP AHORA</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Benefits inside */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Lecturas y operativas en vivo</span>
          </span>
          <a
            href={privateWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400/90 hover:text-amber-300 hover:underline transition-colors font-medium"
          >
            ¿Prefieres hablar con Bryan por privado?
          </a>
        </div>

      </div>
    </div>
  );
};
