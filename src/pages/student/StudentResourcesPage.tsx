import {
  Calculator,
  Ruler,
  BookOpen,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";

const tools = [
  {
    title: "Position Size Calculator",
    description:
      "Calculate an appropriate position size based on your account balance, risk percentage, and stop-loss distance.",
    icon: Calculator,
    href: "/resources/position-size-calculator",
    label: "Calculator",
  },
  {
    title: "Pip Calculator",
    description:
      "Calculate pip values and better understand how price movement affects your potential profit or loss.",
    icon: Ruler,
    href: "/resources/pip-calculator",
    label: "Calculator",
  },
];

const resources = [
  {
    title: "Trading Glossary",
    description:
      "Quickly look up important trading terminology while studying your lessons.",
    icon: BookOpen,
    href: "/dashboard/glossary",
  },
];

function StudentResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Resources
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trading Resources
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Use practical tools and reference materials to support your
            trading education.
          </p>
        </header>

        {/* Calculators */}
        <section className="mt-10">
          <div>
            <h2 className="text-xl font-semibold">
              Trading Calculators
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Useful tools for planning and understanding your trades.
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <a
                  key={tool.title}
                  href={tool.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10">
                      <Icon
                        size={21}
                        className="text-blue-400"
                      />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 transition group-hover:text-white"
                    />
                  </div>

                  <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                    {tool.label}
                  </span>

                  <h3 className="mt-1 text-lg font-semibold">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>

                  <div className="mt-6 text-sm font-medium text-slate-400 transition group-hover:text-white">
                    Open calculator
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mt-10">
          <div>
            <h2 className="text-xl font-semibold">
              Learning Resources
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep useful references close while you study.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10">
                      <Icon
                        size={19}
                        className="text-emerald-400"
                      />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-600 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Trading Tip */}
        <section className="mt-10 pb-10">
          <div className="rounded-2xl border border-blue-400/10 bg-blue-400/[0.04] p-6">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">
                <Lightbulb
                  size={20}
                  className="text-blue-400"
                />
              </div>

              <div>
                <h2 className="font-semibold">
                  Use your tools before you trade
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Good trading decisions start with a clear plan. Use
                  position sizing and risk calculations to understand your
                  trade before entering the market.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default StudentResourcesPage;