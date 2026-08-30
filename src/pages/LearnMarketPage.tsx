import { Link, useParams } from "react-router-dom";
import { learnMarkets } from "../data/learnMarkets";

function LearnMarketPage() {
  const { marketId } = useParams();

  const market = learnMarkets.find(
    (item) => item.id === marketId
  );

  if (!market) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <Link
            to="/learn"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Back to Learn
          </Link>

          <div className="mt-12">
            <h1 className="text-4xl font-bold tracking-tight">
              Learning area not found
            </h1>

            <p className="mt-4 text-slate-400">
              The learning area you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        {/* Back */}
        <Link
          to="/learn"
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Learn
        </Link>

        {/* Hero */}
        <header className="mt-10 max-w-3xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
            {market.icon}
          </div>

          <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {market.eyebrow}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn {market.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {market.description}
          </p>
        </header>

        {/* Concepts */}
        <section className="mt-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">
              Key concepts
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Explore the essential ideas you should understand when learning
              about {market.title.toLowerCase()}.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {market.concepts.map((concept, index) => (
              <div
                key={concept}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-xl
                "
              >
                <span className="text-xs font-semibold text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-sm font-semibold text-white">
                  {concept}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Course CTA */}
        <section className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
          {market.courseId ? (
            <>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Structured learning
              </span>

              <h2 className="mt-3 text-2xl font-semibold">
                Ready to go deeper?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Continue with the structured {market.title} course and work
                through each lesson step by step.
              </p>

              <Link
                to={`/courses/${market.courseId}`}
                className="
                  mt-6
                  inline-flex
                  items-center
                  rounded-xl
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-950
                  transition
                  hover:bg-slate-200
                "
              >
                Start {market.courseTitle} →
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Learning library
              </span>

              <h2 className="mt-3 text-2xl font-semibold">
                Keep exploring
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                More structured learning content for {market.title.toLowerCase()}{" "}
                will become available as the PTU library grows.
              </p>

              <Link
                to="/learn"
                className="
                  mt-6
                  inline-flex
                  items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/[0.10]
                "
              >
                Explore More Markets →
              </Link>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default LearnMarketPage;