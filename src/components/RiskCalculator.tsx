import React, { useState } from 'react';
import { Calculator, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle, Percent, Flame, Sparkles } from 'lucide-react';

export const RiskCalculator: React.FC = () => {
  const [accountBalance, setAccountBalance] = useState<number>(5000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(20);
  const [riskReward, setRiskReward] = useState<number>(5); // 1:5 default (Signature Bryan Sánchez)

  const riskAmount = (accountBalance * riskPercent) / 100;
  const targetProfit = riskAmount * riskReward;
  // Standard Lot size estimation for Forex (1 pip on EURUSD standard lot = ~$10)
  const estimatedLots = (riskAmount / (stopLossPips * 10)).toFixed(2);

  // Simulation of 20 trades with a realistic 35% win rate (7 wins, 13 losses) using the 1:5 ratio:
  const simWins = 7;
  const simLosses = 13;
  const simGrossGain = simWins * targetProfit;
  const simGrossLoss = simLosses * riskAmount;
  const simNetProfit = simGrossGain - simGrossLoss;
  const simReturnPercent = ((simNetProfit / accountBalance) * 100).toFixed(1);

  return (
    <section id="calculadora" className="py-20 relative bg-[#090c13] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Fórmula Exclusiva: Ratio Asimétrico 1:5</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            CALCULADORA DE RIESGO: <span className="gold-gradient-text">RATIO 1:5</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            La estrategia de <strong className="text-amber-300 font-semibold">Bryan Sánchez</strong> siempre se fundamenta en un <strong>Ratio Riesgo:Beneficio 1:5</strong>. Arriesgas 1R para ganar 5R. Mira matemáticamente por qué una racha de pérdidas jamás destruye a un trader disciplinado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0e121c] border border-amber-500/30 p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Parámetros de Operación</span>
            </h3>

            {/* Account Balance */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                Capital de la Cuenta (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(Math.max(100, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-3 pl-9 pr-4 text-white font-mono text-base outline-none transition-colors"
                />
              </div>
            </div>

            {/* Risk Percentage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Riesgo Máximo por Operación (Regla Innegociable)
                </label>
                <span className="text-sm font-bold text-amber-400 font-mono">{riskPercent}%</span>
              </div>
              <div className="flex gap-2">
                {[0.5, 1, 1.5, 2].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setRiskPercent(pct)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      riskPercent === pct
                        ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Stop Loss & Risk Reward */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Stop Loss (Pips / Puntos de Entrada)
                </label>
                <input
                  type="number"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(Math.max(5, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-3 px-4 text-white font-mono text-sm outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Ratio Riesgo : Beneficio
                  </label>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Estrategia 1:{riskReward}
                  </span>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {[3, 5, 7, 10].map((rr) => {
                    const isBryanStandard = rr === 5;
                    const isSelected = riskReward === rr;

                    return (
                      <button
                        key={rr}
                        onClick={() => setRiskReward(rr)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold transition-all relative cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30'
                            : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                        }`}
                      >
                        {isBryanStandard && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">
                            Bryan
                          </span>
                        )}
                        1:{rr}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-amber-300/90 flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Regla Bryan Sánchez: "Buscamos siempre setups con potencial de 1:5 mínimo. Si el trade no ofrece 1:5, no se ejecuta."</span>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Key Calculated Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0f131e] border border-rose-500/30 shadow-xl">
                <span className="text-[11px] uppercase tracking-wider text-rose-300 font-bold block mb-1">
                  Riesgo Máximo (-1R)
                </span>
                <span className="text-3xl sm:text-4xl font-black text-rose-400 font-cinzel">
                  ${riskAmount.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1.5">
                  Pérdida 100% controlada por trade.
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f131e] border-2 border-emerald-500/40 shadow-xl">
                <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block mb-1">
                  Ganancia Objetivo (+{riskReward}R)
                </span>
                <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-cinzel">
                  +${targetProfit.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1.5">
                  5 veces tu riesgo por cada acierto.
                </span>
              </div>
            </div>

            {/* 20-Trade Proof Box with 1:5 ratio */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#121624] via-[#0f1422] to-[#0a0d16] border-2 border-amber-500/40 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <span className="text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                  El Poder Matemático del Ratio 1:{riskReward}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                  Solo 35% de Acierto (7 Wins / 13 Losses)
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mira lo que ocurre en un bloque de 20 operaciones incluso <strong className="text-white">perdiendo el 65% de las veces</strong> (13 derrotas y apenas 7 aciertos):
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-rose-500/20">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">13 Pérdidas (-13R)</span>
                  <span className="text-base font-bold text-rose-400 font-mono mt-1 block">-${simGrossLoss.toFixed(0)}</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-500/20">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">7 Aciertos (+{7 * riskReward}R)</span>
                  <span className="text-base font-bold text-emerald-400 font-mono mt-1 block">+${simGrossGain.toFixed(0)}</span>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10">
                  <span className="text-[10px] uppercase text-emerald-300 block font-bold">Ganancia Neta</span>
                  <span className="text-base sm:text-lg font-black text-emerald-400 font-mono mt-1 block">
                    +${simNetProfit.toFixed(0)} ({simReturnPercent}%)
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-start gap-2.5 text-xs text-amber-300">
                <CheckCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  <strong>Conclusión de Bryan Sánchez:</strong> Cuando tu ratio es 1:5, no necesitas ser adivino ni temer al mercado. Un solo trade ganador absorbe 5 pérdidas y te deja en ganancia neta.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
