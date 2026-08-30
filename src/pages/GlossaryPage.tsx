import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  glossaryCategories,
  glossaryTerms,
  type GlossaryCategory,
} from "../data/glossary";

function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<GlossaryCategory | "All">("All");

  const filteredTerms = useMemo(() => {
    const query = search.trim().toLowerCase();

    return glossaryTerms.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.term.toLowerCase().includes(query) ||
        item.abbreviation?.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Glossary
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Understand the language of the markets.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Search essential trading and financial market terms, or browse
            concepts by category.
          </p>
        </div>

        {/* Search */}
        <section className="mt-12">
          <label htmlFor="glossary-search" className="sr-only">
            Search trading terms
          </label>

          <input
            id="glossary-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search trading terms..."
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              text-sm
              text-white
              outline-none
              placeholder:text-slate-600
              backdrop-blur-xl
              transition
              focus:border-white/20
              focus:bg-white/[0.05]
            "
          />
        </section>

        {/* Categories */}
        <section className="mt-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`
                rounded-xl
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                ${
                  activeCategory === "All"
                    ? "border-white/20 bg-white text-slate-950"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                }
              `}
            >
              All
            </button>

            {glossaryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-xl
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition
                  ${
                    activeCategory === category
                      ? "border-white/20 bg-white text-slate-950"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Trading Terms
            </h2>

            <span className="text-sm text-slate-500">
              {filteredTerms.length}{" "}
              {filteredTerms.length === 1 ? "term" : "terms"}
            </span>
          </div>

          {filteredTerms.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.map((item) => (
                <article
                  key={item.id}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.term}
                      </h3>

                      {item.abbreviation && (
                        <span className="mt-1 block text-xs font-medium text-blue-400">
                          {item.abbreviation}
                        </span>
                      )}
                    </div>

                    <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                      {item.category}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-400">
                    {item.definition}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">
                No terms found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search term or choose a different category.
              </p>
            </div>
          )}
        </section>

        {/* Footer CTA */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-500">
            Want to learn these concepts in context?
          </p>

          <Link
            to="/courses"
            className="mt-3 inline-flex text-sm font-semibold text-white transition hover:text-slate-300"
          >
            Explore structured courses →
          </Link>
        </section>
      </main>
    </div>
  );
}

export default GlossaryPage;