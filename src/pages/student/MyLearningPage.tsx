import {
  BookOpen,
  Clock3,
  CheckCircle2,
  Play,
  ArrowRight,
} from "lucide-react";

function MyLearningPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            My Learning
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Learning Journey
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Track your courses, continue your lessons, and see how far
            you've progressed.
          </p>
        </header>

        {/* Overview */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* In Progress */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
              <BookOpen size={19} className="text-blue-400" />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Courses in progress
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
              <CheckCircle2 size={19} className="text-emerald-400" />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Courses completed
            </p>
          </div>

          {/* Learning Time */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
              <Clock3 size={19} className="text-orange-400" />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0h
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Learning time
            </p>
          </div>
        </section>

        {/* Courses */}
        <section className="mt-10">

          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                My Courses
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Continue where you left off.
              </p>
            </div>
          </div>

          {/* Course Card */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <div className="p-6 sm:p-7">

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Course Info */}
                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">
                    <BookOpen
                      size={21}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                      Forex
                    </span>

                    <h3 className="mt-1 text-lg font-semibold">
                      Forex Trading Fundamentals
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Beginner · 12 lessons
                    </p>
                  </div>

                </div>

                {/* Continue Button */}
                <a
                  href="/courses/forex"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  <Play size={15} />
                  Continue Learning
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

          {/* Empty State */}
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">

            <div>
              <p className="text-sm font-medium text-white">
                Looking for more courses?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Explore the Pipsoul Traders University curriculum.
              </p>
            </div>

            <a
              href="/courses"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Browse Courses
              <ArrowRight size={15} />
            </a>

          </div>

        </section>

      </div>
    </div>
  );
}

export default MyLearningPage;