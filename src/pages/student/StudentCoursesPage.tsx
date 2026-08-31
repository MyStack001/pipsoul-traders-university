import {
  BookOpen,
  Clock3,
  Play,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const courses = [
  {
    category: "Forex",
    title: "Forex Trading Fundamentals",
    description:
      "Build a strong foundation in forex markets, currency pairs, market structure, and essential trading concepts.",
    level: "Beginner",
    lessons: 12,
    progress: 0,
  },
  {
    category: "Technical Analysis",
    title: "Technical Analysis Foundations",
    description:
      "Learn how to read price action, understand market structure, and build a structured technical analysis process.",
    level: "Beginner",
    lessons: 15,
    progress: 0,
  },
  {
    category: "Risk Management",
    title: "Risk Management for Traders",
    description:
      "Understand position sizing, risk-to-reward, drawdown, and the principles behind consistent risk management.",
    level: "Beginner",
    lessons: 10,
    progress: 0,
  },
];

function StudentCoursesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Courses
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Courses
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Explore your trading curriculum and continue developing
            your knowledge one lesson at a time.
          </p>
        </header>

        {/* Overview */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* Courses */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
              <BookOpen
                size={19}
                className="text-blue-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              3
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Available courses
            </p>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
              <BarChart3
                size={19}
                className="text-emerald-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0%
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Overall progress
            </p>
          </div>

          {/* Learning Time */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
              <Clock3
                size={19}
                className="text-orange-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0h
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Learning time
            </p>
          </div>
        </section>

        {/* Course List */}
        <section className="mt-10">

          <div>
            <h2 className="text-xl font-semibold">
              Learning Curriculum
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Work through the curriculum at your own pace.
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.04]"
              >
                {/* Course Header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">
                      <BookOpen
                        size={21}
                        className="text-blue-400"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                        {course.category}
                      </span>

                      <h3 className="mt-1 text-lg font-semibold">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  {course.description}
                </p>

                {/* Metadata */}
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
                  <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">
                    {course.level}
                  </span>

                  <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">
                    {course.lessons} lessons
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-6">

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Progress
                    </span>

                    <span className="font-medium text-slate-400">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-blue-400"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Action */}
                <div className="mt-6 flex items-center justify-between gap-4">

                  <span className="text-xs text-slate-600">
                    Not started
                  </span>

                  <a
                    href="/courses/forex"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    <Play size={14} />
                    Start Course
                  </a>
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* Browse More */}
        <section className="mt-8 pb-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-white">
                Looking for something else?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Browse the full Pipsoul Traders University course catalog.
              </p>
            </div>

            <a
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Browse Catalog
              <ArrowRight size={15} />
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}

export default StudentCoursesPage;