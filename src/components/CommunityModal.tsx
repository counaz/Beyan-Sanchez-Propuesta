import React from 'react';
import { X, MessageCircle, Sparkles, Users, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const message = '¡Hola Bryan! Vengo de tus redes sociales y quiero unirme a tu Comunidad Gratuita de WhatsApp (+50 personas).';
  const whatsappUrl = getWhatsAppUrl(message);

  const handleJoinWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-[#0c1018] border-2 border-emerald-500/40 p-5 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Users className="w-7 h-7" />
          </div>
          <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
            Éxito Integral · Mente, Cuerpo y Alma
          </span>
          <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white mt-1">
            MI COMUNIDAD OFICIAL DE WHATSAPP
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
            La mayoría nos dedicamos al trading, pero este espacio es para <strong>todo aquel que busque tener éxito integral en la vida</strong>. Escríbeme directamente para darte acceso al grupo.
          </p>
        </div>

        {/* WhatsApp Direct Action Box - No visible phone number */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-[#0e161c] to-[#0a1015] border border-emerald-500/40 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-6 h-6 fill-emerald-400 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">WhatsApp Personal de Bryan</h4>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-xs text-emerald-300/90 font-medium mt-0.5">En línea para darte acceso al grupo</p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Al tocar el botón de abajo se abrirá tu WhatsApp con un mensaje directo para mí. Te responderé personalmente con el enlace del grupo.
          </p>

          <button
            onClick={handleJoinWhatsApp}
            className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>ABRIR WHATSAPP Y ENTRAR AL GRUPO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Benefits reminder */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-300 font-semibold text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lo que encontrarás dentro:</span>
          </div>
          <ul className="space-y-1.5 text-[11px] text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Lecturas en vivo semanales de <em>"La ciencia de hacerse rico"</em>.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Operativas en vivo en mercados reales sin humo y con ratio 1:5.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Más de 50 personas creciendo en la misma frecuencia mental.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};
