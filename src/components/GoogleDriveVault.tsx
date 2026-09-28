import React, { useState, useEffect } from 'react';
import { 
  FolderSync, 
  Check, 
  ExternalLink, 
  Cloud, 
  Sparkles, 
  LogOut, 
  FileText, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { User } from 'firebase/auth';
import { 
  initAuth, 
  googleSignIn, 
  logout, 
  saveFileToGoogleDrive, 
  listTradingDriveFiles, 
  DriveFileItem 
} from '../services/googleDrive';
import { STUDENT_RESOURCES } from '../data/content';

export const GoogleDriveVault: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSaving, setIsSaving] = useState<string | null>(null);
  const [driveFiles, setDriveFiles] = useState<DriveFileItem[]>([]);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  
  // Explicit confirmation modal state (Required by workspace integration skill)
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    resourceTitle: string;
    resourceId: string;
  }>({
    isOpen: false,
    resourceTitle: '',
    resourceId: ''
  });

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
        fetchFiles();
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const fetchFiles = async () => {
    try {
      const files = await listTradingDriveFiles();
      setDriveFiles(files);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignIn = async () => {
    setIsLoggingIn(true);
    setStatusMessage(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        fetchFiles();
      }
    } catch (err: any) {
      console.error(err);
      setStatusMessage({
        text: 'No se pudo completar el inicio de sesión con Google.',
        type: 'error'
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setDriveFiles([]);
  };

  const requestSaveToDrive = (resourceId: string, resourceTitle: string) => {
    setConfirmDialog({
      isOpen: true,
      resourceTitle,
      resourceId
    });
  };

  const confirmSaveToDrive = async () => {
    const { resourceTitle, resourceId } = confirmDialog;
    setConfirmDialog({ isOpen: false, resourceTitle: '', resourceId: '' });
    
    setIsSaving(resourceId);
    setStatusMessage(null);

    const resourceContent = `========================================================
BRYAN SÁNCHEZ - TRADING & MENTALIDAD
Material Oficial de Formación
Documento: ${resourceTitle}
Fecha: ${new Date().toLocaleDateString()}
========================================================

"DISCIPLINA HOY, LIBERTAD MAÑANA."
No es suerte, es preparación. No es magia, es método.

REGLAS DE ORO DE EJECUCIÓN:
1. Nunca arriesgar más del 1% por operación.
2. Definir Stop Loss y Take Profit ANTES de pulsar comprar o vender.
3. No mover el Stop Loss en contra bajo ninguna circunstancia.
4. Si acumulas 2 pérdidas seguidas en una sesión, apagar pantallas.
5. El mercado siempre dará otra oportunidad mañana.

BITÁCORA DE CONTROL DE EMOCIONES:
- ¿Qué emoción sentiste antes de ejecutar? (Tranquilidad / Ansiedad / Euforia / FOMO)
- ¿El setup cumplió con el 100% de las confirmaciones del método?
- Resultado en R:R y lección aprendida.

Acompañamiento y Mentorías 1 a 1:
Directo por WhatsApp con Bryan Sánchez.

Comunidad Gratuita:
Únete al canal para recibir análisis semanales y cápsulas de psicotrading.
========================================================`;

    try {
      const fileName = `${resourceTitle.replace(/[^a-zA-Z0-9 ]/g, '')} - Bryan Sanchez.txt`;
      const uploaded = await saveFileToGoogleDrive(fileName, resourceContent, 'text/plain');
      
      setStatusMessage({
        text: `¡"${fileName}" guardado con éxito en tu Google Drive!`,
        type: 'success'
      });
      fetchFiles();
    } catch (err: any) {
      console.error(err);
      setStatusMessage({
        text: err.message || 'Error al guardar en Google Drive',
        type: 'error'
      });
    } finally {
      setIsSaving(null);
    }
  };

  return (
    <section className="py-16 relative bg-[#090b12] border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <FolderSync className="w-3.5 h-3.5" />
              <span>Sincronización con Google Drive</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
              GUARDA TU MATERIAL DIRECTO EN GOOGLE DRIVE
            </h3>
            <p className="mt-1 text-slate-300 text-xs sm:text-sm">
              Conecta tu cuenta de Google con un clic para guardar las guías de estudio, bitácoras y checklists en tu Drive personal.
            </p>
          </div>

          {/* Google Auth Status / Button */}
          <div>
            {!user ? (
              /* Official Google Sign-In Button format */
              <button
                onClick={handleSignIn}
                disabled={isLoggingIn}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm shadow-lg flex items-center gap-3 transition-all cursor-pointer border border-slate-200"
              >
                {isLoggingIn ? (
                  <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
                ) : (
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                )}
                <span>Conectar con Google Drive</span>
              </button>
            ) : (
              <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900 border border-slate-700">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'Usuario'} className="w-8 h-8 rounded-full border border-amber-400" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="text-left">
                  <span className="block text-xs font-bold text-white truncate max-w-[140px]">
                    {user.displayName || user.email}
                  </span>
                  <span className="block text-[10px] text-emerald-400 font-medium">
                    Google Drive Conectado
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                  title="Desconectar Google Drive"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Status Toast */}
        {statusMessage && (
          <div className={`mt-4 p-3.5 rounded-xl text-xs flex items-center gap-2 ${
            statusMessage.type === 'success' 
              ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
          }`}>
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Resources Grid for Google Drive Sync */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STUDENT_RESOURCES.map((res) => (
            <div 
              key={res.id} 
              className="p-5 rounded-2xl bg-[#0e121d] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {res.badge}
                </span>
                <h4 className="font-cinzel text-base font-bold text-white mt-1 mb-2">
                  {res.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {res.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    if (!user) {
                      handleSignIn();
                    } else {
                      requestSaveToDrive(res.id, res.title);
                    }
                  }}
                  disabled={isSaving === res.id}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSaving === res.id ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Guardando...</span>
                    </>
                  ) : (
                    <>
                      <Cloud className="w-3.5 h-3.5 text-amber-400" />
                      <span>Guardar en mi Google Drive</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Files already saved in user's Drive */}
        {user && driveFiles.length > 0 && (
          <div className="mt-8 p-6 rounded-2xl bg-[#0e121c] border border-amber-500/20">
            <h4 className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-4 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              Archivos guardados en tu Google Drive ({driveFiles.length})
            </h4>
            <div className="divide-y divide-slate-800">
              {driveFiles.map((file) => (
                <div key={file.id} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">{file.name}</span>
                  </div>
                  {file.webViewLink && (
                    <a
                      href={file.webViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
                    >
                      <span>Abrir en Drive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Mandatory User Confirmation Modal for Mutating/Writing Operations */}
      {confirmDialog.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-[#0e121d] border-2 border-amber-500/40 p-6 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-4">
              <Cloud className="w-6 h-6" />
            </div>

            <h3 className="font-cinzel text-xl font-bold text-white text-center">
              ¿Guardar archivo en Google Drive?
            </h3>
            
            <p className="mt-2 text-xs text-slate-300 text-center leading-relaxed">
              ¿Deseas crear y guardar el documento <strong className="text-white">"{confirmDialog.resourceTitle}"</strong> en tu cuenta de Google Drive (<span className="text-amber-300">{user?.email}</span>)?
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setConfirmDialog({ isOpen: false, resourceTitle: '', resourceId: '' })}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmSaveToDrive}
                className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md cursor-pointer"
              >
                Confirmar y Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
