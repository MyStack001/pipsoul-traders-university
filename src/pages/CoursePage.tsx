import { Link, useParams } from "react-router-dom";

type Course = {
  title: string;
  category: string;
  description: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
};

const courses: Record<string, Course> = {
  forex: {
    title: "Forex Trading Fundamentals",
    category: "Forex",
    description:
      "Build a strong foundation in Forex trading. Learn how currency markets work, how price moves, and the principles behind structured and disciplined trading.",
    lessons: 12,
    level: "Beginner",
  },

  crypto: {
    title: "Crypto Trading Fundamentals",
    category: "Crypto",
    description:
      "Understand the fundamentals of cryptocurrency markets, volatility, market cycles, and the principles of responsible crypto trading.",
    lessons: 10,
    level: "Beginner",
  },

  stocks: {
    title: "Stock Market Fundamentals",
    category: "Stocks",
    description:
      "Learn the foundations of stock market investing and trading, including market structure, analysis, price movement, and risk management.",
    lessons: 11,
    level: "Beginner",
  },

  finance: {
    title: "Understanding Financial Markets",
    category: "Finance",
    description:
      "Explore the broader financial markets and understand how economics, market participants, and major financial events influence price movement.",
    lessons: 9,
    level: "Beginner",
  },
};

function CoursePage() {
  const { courseId } = useParams();

  const course = courseId ? courses[courseId] : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Link
            to="/courses"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Back to Courses
          </Link>

          <div className="mt-12">
            <h1 className="text-4xl font-bold tracking-tight">
              Course not found
            </h1>

            <p className="mt-4 text-slate-400">
              The course you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        {/* Back */}
        <Link
          to="/courses"
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Courses
        </Link>

        {/* Course Header */}
        <div className="mt-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {course.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {course.title}
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            {course.description}
          </p>

          {/* Course Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>{course.level}</span>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <span>{course.lessons} lessons</span>
          </div>
        </div>

        {/* What You'll Learn */}
        <section className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
          <h2 className="text-xl font-semibold">
            What you'll learn
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
            <li>• Understanding the foundations of the market</li>
            <li>• Developing a structured approach to analysis</li>
            <li>• Understanding risk and trade management</li>
            <li>• Building disciplined trading habits</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default CoursePage;