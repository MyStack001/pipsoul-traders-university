import {
  Users,
  MessageCircle,
  Target,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const mentorshipAreas = [
  {
    title: "Trading Strategy",
    description:
      "Get guidance on developing a structured approach to analyzing and executing trades.",
    icon: Target,
  },
  {
    title: "Market Analysis",
    description:
      "Learn how to approach market structure, price action, and trade preparation with greater clarity.",
    icon: BookOpen,
  },
  {
    title: "Trading Questions",
    description:
      "Ask questions about concepts you're learning and get help understanding difficult topics.",
    icon: MessageCircle,
  },
];

function StudentMentorshipPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Mentorship
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Learn With Guidance
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Get support as you develop your trading knowledge, build better
            habits, and work toward becoming a more disciplined trader.
          </p>
        </header>

        {/* Hero */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="relative p-6 sm:p-8 lg:p-10">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10">
                <Users
                  size={22}
                  className="text-blue-400"
                />
              </div>

              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                <Sparkles size={13} />
                Pipsoul Mentorship
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Don't learn alone.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Trading education becomes more valuable when you can ask
                questions, receive feedback, and learn how experienced
                traders approach the market.
              </p>

              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Explore Mentorship
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="mt-10">
          <div>
            <h2 className="text-xl font-semibold">
              What You Can Get Help With
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Mentorship is designed to support your development beyond the
              lessons.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {mentorshipAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10">
                    <Icon
                      size={19}
                      className="text-blue-400"
                    />
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Community */}
        <section className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                  <MessageCircle
                    size={21}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <h2 className="font-semibold">
                    A place to ask, learn, and improve
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    As the Pipsoul learning community grows, this space can
                    become your hub for mentorship conversations, feedback,
                    and structured support.
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-500">
                Coming soon
              </span>

            </div>
          </div>
        </section>

        {/* Current Learning */}
        <section className="mt-10 pb-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-white">
                Keep building your foundation
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Continue through your lessons while mentorship features are
                being developed.
              </p>
            </div>

            <a
              href="/dashboard/learning"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
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

export default StudentMentorshipPage;