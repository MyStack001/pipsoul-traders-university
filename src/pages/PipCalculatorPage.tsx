import { useMemo, useState } from "react";

function PipCalculatorPage() {
  const [pair, setPair] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [pipValuePerLot, setPipValuePerLot] = useState("10");

  const calculation = useMemo(() => {
    const lots = Number(lotSize);
    const pipValue = Number(pipValuePerLot);

    if (lots <= 0 || pipValue <= 0) {
      return null;
    }

    return {
      valuePerPip: lots * pipValue,
    };
  }, [lotSize, pipValuePerLot]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Resources · Calculator
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Pip Calculator
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Calculate how much each pip is worth based on your position size
            and the pip value of the currency pair.
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
              {/* Pair */}
              
                {/* Currency Pair / Instrument */}
<div>
  <label
    htmlFor="pair"
    className="text-sm font-medium text-slate-300"
  >
    Currency Pair / Instrument
  </label>

  <input
    id="pair"
    type="text"
    value={pair}
    onChange={(event) => setPair(event.target.value.toUpperCase())}
    placeholder="e.g. GBP/USD"
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
      uppercase
      outline-none
      placeholder:normal-case
      placeholder:text-slate-600
      transition
      focus:border-white/20
      focus:bg-white/[0.05]
    "
  />

  <p className="mt-2 text-xs leading-5 text-slate-600">
    Enter any currency pair or trading instrument you want to calculate.
  </p>
</div>
              </div>

              {/* Lot Size */}
              <div>
                <label
                  htmlFor="lotSize"
                  className="text-sm font-medium text-slate-300"
                >
                  Position Size (Lots)
                </label>

                <input
                  id="lotSize"
                  type="number"
                  min="0"
                  step="0.01"
                  value={lotSize}
                  onChange={(event) =>
                    setLotSize(event.target.value)
                  }
                  placeholder="0.10"
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
                  For many USD-quoted major pairs, a standard lot is
                  approximately $10 per pip.
                </p>
              </div>
            </div>

          {/* Result */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-lg font-semibold">
              Pip Value
            </h2>

            {calculation ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-6">
                  <p className="text-sm text-slate-400">
                    {pair}
                  </p>

                  <p className="mt-3 text-4xl font-bold text-blue-400">
                    ${calculation.valuePerPip.toFixed(2)}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Per pip
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm leading-6 text-slate-400">
                    A 10-pip movement would therefore represent approximately{" "}
                    <span className="font-semibold text-white">
                      $
                      {(calculation.valuePerPip * 10).toFixed(2)}
                    </span>{" "}
                    in profit or loss before other trading costs.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs leading-5 text-slate-500">
                    Pip value can vary depending on the currency pair, account
                    currency, exchange rate, broker specifications, and
                    position size. Treat this result as an estimate.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-white/10 px-6 text-center">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Enter your position size
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Your pip value will appear here.
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

export default PipCalculatorPage;