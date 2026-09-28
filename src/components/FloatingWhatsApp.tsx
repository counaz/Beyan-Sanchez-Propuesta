import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenMentorshipModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenMentorshipModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip / Badge */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d1017]/95 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-xl backdrop-blur-md animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>¿Dudas? Habla con Bryan</span>
      </div>

      <button
        onClick={onOpenMentorshipModal}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all cursor-pointer group"
        aria-label="Abrir WhatsApp para mentoría"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950 group-hover:scale-105 transition-transform" />
      </button>
    </div>
  );
};
