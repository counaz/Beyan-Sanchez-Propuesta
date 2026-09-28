import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenMentorshipModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenMentorshipModal }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
      {/* Tooltip / Badge for Desktop */}
      <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d1017]/95 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-xl backdrop-blur-md animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>¿Dudas? Habla con Bryan</span>
      </div>

      <button
        onClick={onOpenMentorshipModal}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        aria-label="Abrir WhatsApp para mentoría"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 text-slate-950" />
      </button>
    </div>
  );
};
