import { Link } from "react-router-dom";
import { resources } from "../data/resources";

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Resources
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Practical tools for better trading decisions.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Use simple trading calculators to understand your risk, position
            size, and the value of price movement before entering a trade.
          </p>
        </div>

        {/* Resources */}
        <section className="mt-16">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={`/resources/${resource.id}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition
                  hover:border-white/20
                  hover:bg-white/[0.05]
                  sm:p-8
                "
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Calculator
                    </span>

                    <h2 className="mt-3 text-xl font-semibold text-white">
                      {resource.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {resource.description}
                    </p>
                  </div>

                  <span className="text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResourcesPage;