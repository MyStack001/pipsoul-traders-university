import { useMemo, useState } from "react";

function PositionSizeCalculatorPage() {
  const [accountBalance, setAccountBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [stopLossPips, setStopLossPips] = useState("");
  const [pipValuePerLot, setPipValuePerLot] = useState("10");

  const calculation = useMemo(() => {
    const balance = Number(accountBalance);
    const risk = Number(riskPercent);
    const stopLoss = Number(stopLossPips);
    const pipValue = Number(pipValuePerLot);

    if (
      balance <= 0 ||
      risk <= 0 ||
      stopLoss <= 0 ||
      pipValue <= 0
    ) {
      return null;
    }

    const riskAmount = balance * (risk / 100);

    const positionSize =
      riskAmount / (stopLoss * pipValue);

    return {
      riskAmount,
      positionSize,
    };
  }, [
    accountBalance,
    riskPercent,
    stopLossPips,
    pipValuePerLot,
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Resources · Calculator
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Position Size Calculator
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Calculate an appropriate position size based on your account
            balance, risk percentage, and stop-loss distance.
          </p>
        </div>

        {/* Calculator */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-lg font-semibold">
              Trade Parameters
            </h2>

            <div className="mt-6 space-y-5">
              {/* Account Balance */}
              <div>
                <label
                  htmlFor="accountBalance"
                  className="text-sm font-medium text-slate-300"
                >
                  Account Balance
                </label>

                <input
                  id="accountBalance"
                  type="number"
                  min="0"
                  step="0.01"
                  value={accountBalance}
                  onChange={(event) =>
                    setAccountBalance(event.target.value)
                  }
                  placeholder="5000"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-white/20
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* Risk */}
              <div>
                <label
                  htmlFor="riskPercent"
                  className="text-sm font-medium text-slate-300"
                >
                  Risk Per Trade (%)
                </label>

                <input
                  id="riskPercent"
                  type="number"
                  min="0"
                  step="0.1"
                  value={riskPercent}
                  onChange={(event) =>
                    setRiskPercent(event.target.value)
                  }
                  placeholder="1"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-white/20
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* Stop Loss */}
              <div>
                <label
                  htmlFor="stopLossPips"
                  className="text-sm font-medium text-slate-300"
                >
                  Stop Loss (Pips)
                </label>

                <input
                  id="stopLossPips"
                  type="number"
                  min="0"
                  step="0.1"
                  value={stopLossPips}
                  onChange={(event) =>
                    setStopLossPips(event.target.value)
                  }
                  placeholder="20"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-white/20
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* Pip Value */}
              <div>
                <label
                  htmlFor="pipValue"
                  className="text-sm font-medium text-slate-300"
                >
                  Pip Value Per Standard Lot
                </label>

                <input
                  id="pipValue"
                  type="number"
                  min="0"
                  step="0.01"
                  value={pipValuePerLot}
                  onChange={(event) =>
                    setPipValuePerLot(event.target.value)
                  }
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    transition
                    focus:border-white/20
                    focus:bg-white/[0.05]
                  "
                />

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Example: $10 per pip for a standard lot on many USD-quoted
                  major pairs.
                </p>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-lg font-semibold">
              Calculation
            </h2>

            {calculation ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-slate-500">
                    Maximum Risk
                  </p>

                  <p className="mt-2 text-3xl font-bold text-white">
                    ${calculation.riskAmount.toFixed(2)}
                  </p>
                </div>

                <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
                  <p className="text-sm text-slate-400">
                    Recommended Position Size
                  </p>

                  <p className="mt-2 text-4xl font-bold text-blue-400">
                    {calculation.positionSize.toFixed(2)}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Standard lots
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs leading-5 text-slate-500">
                    This calculator provides an estimate based on the values
                    entered. Actual position sizing can vary depending on the
                    currency pair, account currency, broker specifications,
                    and pip value.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-white/10 px-6 text-center">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Enter your trade parameters
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Your position size calculation will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default PositionSizeCalculatorPage;