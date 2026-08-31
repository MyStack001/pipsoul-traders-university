import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const glossaryTerms = [
  {
    term: "Ask Price",
    category: "Market Basics",
    definition:
      "The price at which a trader can buy an asset from the market.",
  },
  {
    term: "Bid Price",
    category: "Market Basics",
    definition:
      "The price at which a trader can sell an asset to the market.",
  },
  {
    term: "Breakout",
    category: "Technical Analysis",
    definition:
      "A price movement beyond an established support or resistance level.",
  },
  {
    term: "Drawdown",
    category: "Risk Management",
    definition:
      "The decline in account value from a previous peak to a subsequent low.",
  },
  {
    term: "Fair Value Gap",
    category: "Price Action",
    definition:
      "An imbalance in price created when strong market movement leaves an inefficiently traded area.",
  },
  {
    term: "Leverage",
    category: "Risk Management",
    definition:
      "A trading facility that allows a trader to control a larger position with a smaller amount of capital.",
  },
  {
    term: "Liquidity",
    category: "Market Basics",
    definition:
      "The availability of buyers and sellers that allows an asset to be traded efficiently.",
  },
  {
    term: "Lot",
    category: "Market Basics",
    definition:
      "A standardized unit used to measure the size of a forex position.",
  },
  {
    term: "Pip",
    category: "Market Basics",
    definition:
      "A standardized unit used to measure a small change in the price of a currency pair.",
  },
  {
    term: "Risk-to-Reward Ratio",
    category: "Risk Management",
    definition:
      "A comparison between the amount a trader is willing to risk and the potential reward of a trade.",
  },
  {
    term: "Spread",
    category: "Market Basics",
    definition:
      "The difference between the bid price and the ask price of an asset.",
  },
  {
    term: "Support",
    category: "Technical Analysis",
    definition:
      "A price area where buying interest may help prevent or slow further downward movement.",
  },
  {
    term: "Resistance",
    category: "Technical Analysis",
    definition:
      "A price area where selling interest may prevent or slow further upward movement.",
  },
  {
    term: "Stop Loss",
    category: "Risk Management",
    definition:
      "An order or predetermined price level used to limit potential loss on a trade.",
  },
  {
    term: "Take Profit",
    category: "Risk Management",
    definition:
      "A predetermined price level where a trader intends to close a profitable position.",
  },
];

const categories = [
  "All",
  "Market Basics",
  "Technical Analysis",
  "Price Action",
  "Risk Management",
];

function StudentGlossaryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTerms = useMemo(() => {
    const query = search.trim().toLowerCase();

    return glossaryTerms.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        !query ||
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Glossary
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trading Glossary
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Quickly look up trading terms and concepts while you learn.
          </p>
        </header>

        {/* Search */}
        <section className="mt-10">
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search trading terms..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-11 pr-4 text-sm text-white outline-none backdrop-blur-xl placeholder:text-slate-600 transition focus:border-blue-400/40 focus:bg-white/[0.04]"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mt-5">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => {
              const isActive = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-slate-950"
                      : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </section>

        {/* Results */}
        <section className="mt-8 pb-10">

          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Trading Terms
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {filteredTerms.length}{" "}
                {filteredTerms.length === 1 ? "term" : "terms"} found
              </p>
            </div>
          </div>

          {filteredTerms.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {filteredTerms.map((item) => (
                <article
                  key={item.term}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">
                        <BookOpen
                          size={19}
                          className="text-blue-400"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {item.term}
                        </h3>

                        <span className="mt-1 inline-block text-xs font-medium text-blue-400">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    {item.definition}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-5 flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
                <Search
                  size={23}
                  className="text-slate-500"
                />
              </div>

              <h3 className="mt-5 font-semibold">
                No terms found
              </h3>

              <p className="mt-2 max-w-md text-sm text-slate-500">
                Try another search term or choose a different category.
              </p>
            </div>
          )}
        </section>

        {/* Learning Link */}
        <section className="pb-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-white">
                Want to learn these concepts in context?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Continue your courses and put your knowledge into practice.
              </p>
            </div>

            <a
              href="/dashboard/learning"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Continue Learning
              <ArrowRight size={15} />
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}

export default StudentGlossaryPage;