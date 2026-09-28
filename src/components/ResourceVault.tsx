import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Check, 
  ExternalLink, 
  Sparkles, 
  FolderSync, 
  Bookmark, 
  FileSpreadsheet, 
  FileCheck2 
} from 'lucide-react';
import { STUDENT_RESOURCES } from '../data/content';

interface ResourceVaultProps {
  onOpenCommunityModal: () => void;
}

export const ResourceVault: React.FC<ResourceVaultProps> = ({ onOpenCommunityModal }) => {
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const handleDownload = (id: string, title: string) => {
    if (!downloadedIds.includes(id)) {
      setDownloadedIds([...downloadedIds, id]);
    }

    // Generate a formatted trading resource markdown/txt blob for instant download
    const content = `========================================================
BRYAN SÁNCHEZ - TRADING & MENTALIDAD
Material Oficial de Formación
Recurso: ${title}
========================================================

"DISCIPLINA HOY, LIBERTAD MAÑANA."
No es suerte, es preparación. No es magia, es método.

REGLAS DE ORO DE EJECUCIÓN:
1. Nunca arriesgar más del 1% por operación.
2. Definir Stop Loss y Take Profit ANTES de pulsar comprar o vender.
3. No mover el Stop Loss en contra bajo ninguna circunstancia.
4. Si acumulas 2 pérdidas seguidas en una sesión, apagar pantallas.
5. El mercado siempre dará otra oportunidad mañana.

Acompañamiento y Mentorías 1 a 1:
Directo por WhatsApp con Bryan Sánchez.

Comunidad Gratuita:
Únete para recibir análisis semanales y cápsulas de psicotrading.
========================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_bryan_sanchez.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="recursos" className="py-20 relative bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biblioteca de Herramientas</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            PLANTILLAS Y MATERIAL DESCARGABLE
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Accede a las herramientas prácticas que Bryan Sánchez utiliza para organizar sus jornadas de análisis y mantener una disciplina inquebrantable.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_RESOURCES.map((res) => {
            const isDownloaded = downloadedIds.includes(res.id);

            return (
              <div 
                key={res.id} 
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {res.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {res.type}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800">
                  <button
                    onClick={() => handleDownload(res.id, res.title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isDownloaded
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Descargado</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar Guía</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner with Community CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0e121c] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Buscas más material de estudio y análisis en vivo?</h4>
              <p className="text-xs text-slate-400">Todos los lunes compartimos proyecciones y bitácoras comentadas en el canal gratuito.</p>
            </div>
          </div>

          <button
            onClick={onOpenCommunityModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer"
          >
            Acceder al Canal Gratuito
          </button>
        </div>

      </div>
    </section>
  );
};
