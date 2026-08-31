import {
  ClipboardCheck,
  Clock3,
  Trophy,
  ArrowRight,
  LockKeyhole,
} from "lucide-react";

const quizzes = [
  {
    category: "Forex Fundamentals",
    title: "Forex Basics Quiz",
    description:
      "Test your understanding of currency pairs, pips, lots, spreads, and the foundations of forex trading.",
    questions: 10,
    duration: "10 min",
    status: "Available",
  },
  {
    category: "Market Structure",
    title: "Market Structure Quiz",
    description:
      "Check your understanding of trends, swing points, support, resistance, and basic market structure.",
    questions: 12,
    duration: "12 min",
    status: "Locked",
  },
  {
    category: "Risk Management",
    title: "Risk Management Quiz",
    description:
      "Test your knowledge of position sizing, risk-to-reward, drawdown, and responsible risk management.",
    questions: 10,
    duration: "10 min",
    status: "Locked",
  },
];

function QuizzesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Quizzes
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Test Your Knowledge
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Reinforce what you've learned by testing your understanding
            of key trading concepts.
          </p>
        </header>

        {/* Stats */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* Available */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
              <ClipboardCheck
                size={19}
                className="text-blue-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              1
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Quiz available
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
              <Trophy
                size={19}
                className="text-emerald-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Quizzes completed
            </p>
          </div>

          {/* Average */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
              <Clock3
                size={19}
                className="text-orange-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              —
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Average score
            </p>
          </div>
        </section>

        {/* Quiz List */}
        <section className="mt-10">

          <div>
            <h2 className="text-xl font-semibold">
              Knowledge Checks
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete quizzes as you progress through the curriculum.
            </p>
          </div>

          <div className="mt-5 space-y-4">
            {quizzes.map((quiz) => {
              const isLocked = quiz.status === "Locked";

              return (
                <article
                  key={quiz.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* Quiz Info */}
                    <div className="flex items-start gap-4">

                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          isLocked
                            ? "bg-white/[0.04]"
                            : "bg-blue-400/10"
                        }`}
                      >
                        {isLocked ? (
                          <LockKeyhole
                            size={20}
                            className="text-slate-600"
                          />
                        ) : (
                          <ClipboardCheck
                            size={21}
                            className="text-blue-400"
                          />
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                          {quiz.category}
                        </span>

                        <h3 className="mt-1 text-lg font-semibold">
                          {quiz.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                          {quiz.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                          <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">
                            {quiz.questions} questions
                          </span>

                          <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">
                            {quiz.duration}
                          </span>

                          <span
                            className={`rounded-lg border px-3 py-1.5 ${
                              isLocked
                                ? "border-white/10 bg-white/[0.02] text-slate-600"
                                : "border-blue-400/20 bg-blue-400/5 text-blue-400"
                            }`}
                          >
                            {quiz.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    {isLocked ? (
                      <span className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-600">
                        Locked
                      </span>
                    ) : (
                      <a
                        href="/dashboard/quizzes/forex-basics"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                      >
                        Start Quiz
                        <ArrowRight size={15} />
                      </a>
                    )}

                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Tip */}
        <section className="mt-8 pb-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-sm font-medium text-white">
              💡 Study tip
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Don't rush through the quizzes. Use them to identify areas
              where you need to revisit a lesson and strengthen your
              understanding.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default QuizzesPage;