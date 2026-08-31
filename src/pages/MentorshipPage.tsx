import { Link } from "react-router-dom";

const introLessons = [
  {
    number: "01",
    title: "The Pipsoul Approach",
    description:
      "Understand the mindset and structured approach behind the Pipsoul trading philosophy.",
  },
  {
    number: "02",
    title: "Building Your Trading Process",
    description:
      "Learn why having a repeatable process matters more than chasing individual market moves.",
  },
  {
    number: "03",
    title: "Reviewing Your Trades",
    description:
      "Discover how reviewing your decisions can help you identify mistakes and improve over time.",
  },
  {
    number: "04",
    title: "Psychology & Discipline",
    description:
      "Explore the emotional challenges of trading and the habits that support disciplined decision-making.",
  },
];

const communityFeatures = [
  {
    icon: "💬",
    title: "Trading Discussions",
    description:
      "Discuss market ideas, trading experiences, setups, and lessons with other traders.",
  },
  {
    icon: "📊",
    title: "Market Education",
    description:
      "Go beyond signals and develop a deeper understanding of how markets behave.",
  },
  {
    icon: "🔍",
    title: "Trade Reviews",
    description:
      "Review trading decisions, identify mistakes, and learn from both wins and losses.",
  },
  {
    icon: "🧠",
    title: "Psychology",
    description:
      "Develop better emotional control, discipline, patience, and decision-making habits.",
  },
  {
    icon: "🤝",
    title: "Accountability",
    description:
      "Stay accountable to your process and surround yourself with traders who are also learning.",
  },
  {
    icon: "🎓",
    title: "Mentorship Sessions",
    description:
      "Take part in deeper educational sessions designed to help you develop as a trader.",
  },
];

function MentorshipPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Pipsoul Mentorship
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Don't trade alone.
                <span className="block text-slate-400">
                  Learn, review, and grow with Pipsoul.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                The Pipsoul mentorship experience is built for traders who
                want more than random signals. Learn the process, develop
                discipline, review your decisions, and grow alongside a
                community of traders.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#community"
                  className="
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-center
                    text-sm
                    font-semibold
                    text-slate-950
                    transition
                    hover:bg-slate-200
                  "
                >
                  Explore Mentorship
                </a>

                <a
                  href="#preview"
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-3.5
                    text-center
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white/[0.07]
                  "
                >
                  Watch Free Lessons
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Free Preview Lessons */}
        <section id="preview" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Start Here
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Get a taste of the Pipsoul approach.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Start with these free introductory lessons before stepping
                deeper into the Pipsoul community.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {introLessons.map((lesson) => (
                <div
                  key={lesson.number}
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
                  "
                >
                  {/* Video Placeholder */}
                  <div className="flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white transition group-hover:bg-white/10">
                      ▶
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-xs font-semibold tracking-[0.15em] text-blue-400">
                      LESSON {lesson.number}
                    </span>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      {lesson.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-400/10 bg-blue-400/[0.03] p-5">
              <p className="text-sm leading-6 text-slate-500">
                These introductory lessons are designed to give you a feel
                for the Pipsoul approach. Full mentorship goes deeper into
                strategy, execution, trade review, psychology, and developing
                your own trading process.
              </p>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                The Pipsoul Community
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                More than signals. A place to develop as a trader.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Trading becomes more meaningful when you have a structured
                environment to learn, ask questions, review your decisions,
                and stay accountable.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {communityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                >
                  <div className="text-2xl">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 text-base font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Telegram + WhatsApp */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Telegram */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Free Access
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  Pipsoul Signals
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Join the free Pipsoul Telegram channel for trading signals,
                  market observations, and updates directly from the founder.
                </p>

                <a
                  href="https://t.me/PipsoulTradersUniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    inline-flex
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
                  Join Free Telegram →
                </a>
              </div>

              {/* WhatsApp */}
              <div className="rounded-3xl border border-blue-400/20 bg-blue-400/[0.04] p-7 backdrop-blur-xl sm:p-9">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Premium Mentorship
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  Pipsoul Mentorship Community
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Go deeper with the Pipsoul mentorship community. Learn
                  through strategy discussions, trade reviews, accountability,
                  psychology, mentorship sessions, and direct interaction with
                  other serious traders.
                </p>

                <a
                  href="https://chat.whatsapp.com/HTygC6rp9EHLSmJxGDlapu?s=cl&p=a&ilr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    inline-flex
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
                  Join Mentorship Community →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Your Trading Journey
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Learn. Review. Improve.
              <span className="block text-slate-400">
                Trade with purpose.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
              Whether you're starting your journey or looking to become more
              consistent, the Pipsoul community is built to help you keep
              learning and improving.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/HTygC6rp9EHLSmJxGDlapu?s=cl&p=a&ilr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-950
                  transition
                  hover:bg-slate-200
                "
              >
                Join Pipsoul Mentorship
              </a>

              <Link
                to="/courses"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/[0.07]
                "
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MentorshipPage;