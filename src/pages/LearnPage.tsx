import { Link } from "react-router-dom";

type LearningArea = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const learningAreas: LearningArea[] = [
  {
    id: "forex",
    title: "Forex",
    description:
      "Learn how currency markets work, from currency pairs and pips to market structure and risk management.",
    icon: "💱",
  },
  {
    id: "crypto",
    title: "Crypto",
    description:
      "Explore cryptocurrency markets, volatility, market cycles, and the fundamentals of digital assets.",
    icon: "₿",
  },
  {
    id: "stocks",
    title: "Stocks",
    description:
      "Understand stocks, companies, market behaviour, price movement, and the foundations of stock analysis.",
    icon: "📈",
  },
  {
    id: "indices",
    title: "Indices",
    description:
      "Learn what market indices represent and how major indices are used to understand broader market conditions.",
    icon: "📊",
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Build an understanding of financial markets, economics, interest rates, inflation, and market participants.",
    icon: "🏦",
  },
];

function LearnPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Learn
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Explore the markets.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Build your understanding of financial markets through focused
            learning areas covering the instruments, concepts, and ideas every
            developing trader should understand.
          </p>
        </div>

        {/* Learning Areas */}
        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map((area) => (
              <Link
                key={area.id}
                to={`/learn/${area.id}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.05]
                "
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
                  {area.icon}
                </div>

                {/* Content */}
                <h2 className="mt-6 text-xl font-semibold text-white">
                  {area.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {area.description}
                </p>

                {/* Explore */}
                <div className="mt-6 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                  Explore {area.title} →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default LearnPage;