import {
  BookOpen,
  Flame,
  Trophy,
  ArrowRight,
  Play,
} from "lucide-react";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Student Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome back, Trader 👋
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Continue your learning journey and keep building your trading
            knowledge.
          </p>
        </header>

        {/* Stats */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Learning Progress */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
                <BookOpen size={19} className="text-blue-400" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Overall
              </span>
            </div>

            <p className="mt-5 text-2xl font-bold">0%</p>

            <p className="mt-1 text-sm text-slate-500">
              Learning progress
            </p>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-0 rounded-full bg-blue-400" />
            </div>
          </div>

          {/* Streak */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
                <Flame size={19} className="text-orange-400" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Current
              </span>
            </div>

            <p className="mt-5 text-2xl font-bold">0 days</p>

            <p className="mt-1 text-sm text-slate-500">
              Learning streak
            </p>
          </div>

          {/* Achievements */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
                <Trophy size={19} className="text-yellow-400" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Unlocked
              </span>
            </div>

            <p className="mt-5 text-2xl font-bold">0</p>

            <p className="mt-1 text-sm text-slate-500">
              Achievements earned
            </p>
          </div>
        </section>

        {/* Continue Learning */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Continue Learning
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Pick up where you left off.
              </p>
            </div>

            <a
              href="/courses"
              className="hidden items-center gap-1 text-sm font-medium text-slate-400 transition hover:text-white sm:flex"
            >
              View Courses
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <div className="p-6 sm:p-7">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">
                    <BookOpen size={21} className="text-blue-400" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                      Forex
                    </span>

                    <h3 className="mt-1 text-lg font-semibold">
                      Forex Trading Fundamentals
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      12 lessons · Beginner
                    </p>
                  </div>
                </div>

                <a
                  href="/courses/forex"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  <Play size={15} />
                  Start Learning
                </a>
              </div>

              {/* Progress */}
              <div className="mt-7">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Course progress
                  </span>

                  <span className="font-medium text-slate-400">
                    0 / 12 lessons
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-0 rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-10 pb-10">
          <h2 className="text-xl font-semibold">
            Quick Access
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/glossary"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="font-semibold">
                Trading Glossary
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Quickly look up trading terms and concepts.
              </p>
            </a>

            <a
              href="/resources"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="font-semibold">
                Trading Resources
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Access calculators and useful trading tools.
              </p>
            </a>

            <a
              href="/mentorship"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="font-semibold">
                Pipsoul Mentorship
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore the Pipsoul community and mentorship experience.
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;