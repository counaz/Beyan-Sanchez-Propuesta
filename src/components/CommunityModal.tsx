import React, { useState } from 'react';
import { X, Send, MessageCircle, Check, Copy, Sparkles, Users, ArrowRight } from 'lucide-react';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const telegramLink = "https://t.me/bryansancheztrading";
  const whatsappCommunityLink = "https://chat.whatsapp.com/bryansancheztrading";

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJoin = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0c1018] border-2 border-amber-500/40 p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Users className="w-7 h-7" />
          </div>
          <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
            Acceso 100% Gratuito
          </span>
          <h3 className="font-cinzel text-2xl font-black text-white mt-1">
            COMUNIDAD DE BRYAN SÁNCHEZ
          </h3>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            Elige tu plataforma preferida para unirte al canal de análisis y cápsulas diarias de mentalidad:
          </p>
        </div>

        {/* Channels */}
        <div className="space-y-3.5">
          
          {/* Option 1: Telegram */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 via-sky-900/20 to-transparent border border-sky-500/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Canal Oficial Telegram</h4>
                <p className="text-[11px] text-slate-300">Análisis semanal y notas de voz de mentalidad</p>
              </div>
            </div>

            <button
              onClick={() => handleJoin(telegramLink)}
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Entrar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Option 2: WhatsApp Community */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-transparent border border-emerald-500/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Comunidad de WhatsApp</h4>
                <p className="text-[11px] text-slate-300">Avisos importantes y links a masterclasses</p>
              </div>
            </div>

            <button
              onClick={() => handleJoin(whatsappCommunityLink)}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Entrar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Benefits reminder */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-300 font-semibold text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Al entrar tendrás acceso inmediato a:</span>
          </div>
          <p className="text-slate-300 text-[11px]">
            • Proyección semanal en video de Bryan Sánchez.<br />
            • Plantilla descargable de la Bitácora de Psicotrading.<br />
            • Recordatorios de disciplina operativa diaria.
          </p>
        </div>

        {/* Dismiss */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Cerrar ventana
          </button>
        </div>

      </div>
    </div>
  );
};
