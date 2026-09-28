import React, { useState } from 'react';
import { 
  Brain, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  TrendingUp, 
  Award,
  MessageCircle
} from 'lucide-react';
import { TEST_QUESTIONS } from '../data/content';

interface MindsetAssessmentProps {
  onOpenCommunityModal: () => void;
  onOpenMentorshipModal: (planId?: string) => void;
}

export const MindsetAssessment: React.FC<MindsetAssessmentProps> = ({
  onOpenCommunityModal,
  onOpenMentorshipModal
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (score: number) => {
    const updated = [...selectedAnswers, score];
    setSelectedAnswers(updated);

    if (currentQuestion + 1 < TEST_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsFinished(false);
  };

  const totalScore = selectedAnswers.reduce((acc, curr) => acc + curr, 0);

  // Result tiers
  let resultProfile = {
    title: 'Trader Reactivo y Emocional',
    color: 'text-rose-400',
    borderColor: 'border-rose-500/40',
    bgBadge: 'bg-rose-500/10 text-rose-300',
    description: 'Estás operando bajo el impulso del miedo y la codicia. Mover el Stop Loss o buscar revancha destruye cualquier cuenta, sin importar lo buena que sea tu técnica.',
    recommendation: 'Necesitas reprogramación mental inmediata y reglas mecánicas estrictas de riesgo antes de seguir arriesgando dinero real.',
    suggestedPlan: 'bimensual'
  };

  if (totalScore >= 11) {
    resultProfile = {
      title: 'Trader con Mentalidad de Élite',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgBadge: 'bg-emerald-500/10 text-emerald-300',
      description: 'Tienes una base sólida de disciplina, respeto por el riesgo y aceptación de pérdidas. Estás listo para escalar tamaño de posición y cuentas de fondeo.',
      recommendation: 'Una mentoría 1 a 1 te ayudará a pulir los detalles milimétricos de liquidez y preparar tu salto a la gestión de capital institucional.',
      suggestedPlan: 'trimestral'
    };
  } else if (totalScore >= 6) {
    resultProfile = {
      title: 'Trader en Proceso de Transición',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      bgBadge: 'bg-amber-500/10 text-amber-300',
      description: 'Conoces las reglas teóricas, pero bajo presión o tras una racha ganadora caes en sobreoperativa y devuelves las ganancias acumuladas.',
      recommendation: 'Requiere acompañamiento directo 1 a 1 para crear hábitos firmes y auditar tus decisiones en caliente.',
      suggestedPlan: 'mensual'
    };
  }

  return (
    <section id="test" className="py-20 relative bg-[#080a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            TEST DE MENTALIDAD & DISCIPLINA
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Descubre en 2 minutos si tu psicología está saboteando tus operaciones y cuál es el camino exacto para corregirla.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="rounded-3xl bg-[#0f131d] border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative">
          
          {!isFinished ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Pregunta {currentQuestion + 1} de {TEST_QUESTIONS.length}</span>
                  <span className="text-amber-400 font-semibold">{Math.round(((currentQuestion + 1) / TEST_QUESTIONS.length) * 100)}% Completado</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / TEST_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="min-h-[70px] mb-6">
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug">
                  {TEST_QUESTIONS[currentQuestion].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3.5">
                {TEST_QUESTIONS[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 sm:p-5 rounded-xl bg-slate-900/80 hover:bg-amber-500/10 border border-slate-800 hover:border-amber-500/50 transition-all flex items-start gap-4 group cursor-pointer"
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm text-slate-200 group-hover:text-white leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center space-y-6">
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-9 h-9" />
              </div>

              <div>
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${resultProfile.bgBadge} mb-2`}>
                  Puntaje: {totalScore} / 15 Puntos
                </span>
                
                <h3 className={`font-cinzel text-2xl sm:text-3xl font-extrabold ${resultProfile.color}`}>
                  {resultProfile.title}
                </h3>
              </div>

              <div className="max-w-xl mx-auto p-5 rounded-2xl bg-[#090b12] border border-slate-800 text-left space-y-3 text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Diagnóstico:</h4>
                  <p className="text-slate-200 mt-1 leading-relaxed">
                    {resultProfile.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Recomendación de Bryan Sánchez:</h4>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    {resultProfile.recommendation}
                  </p>
                </div>
              </div>

              {/* CTAs based on result */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => onOpenMentorshipModal(resultProfile.suggestedPlan)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Postular a Mentoría 1 a 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenCommunityModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Unirme a Comunidad Gratuita</span>
                </button>

                <button
                  onClick={handleReset}
                  className="p-3 text-slate-400 hover:text-white transition-colors"
                  title="Reiniciar test"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
