import CourseCard from "../components/CourseCard";

type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

type Course = {
  courseId: string;
  category: string;
  title: string;
  description: string;
  level: CourseLevel;
  lessons: number;
  icon: string;
};

const courses: Course[] = [
  {
    courseId: "forex",
    category: "Forex",
    title: "Forex Trading Fundamentals",
    description:
      "Learn how the foreign exchange market works, from currency pairs and pips to market structure and risk management.",
    level: "Beginner",
    lessons: 12,
    icon: "💱",
  },
  {
    courseId: "crypto",
    category: "Crypto",
    title: "Crypto Trading Fundamentals",
    description:
      "Understand crypto markets, market cycles, volatility, technical analysis, and the foundations of responsible crypto trading.",
    level: "Beginner",
    lessons: 10,
    icon: "₿",
  },
  {
    courseId: "stocks",
    category: "Stocks",
    title: "Stock Market Fundamentals",
    description:
      "Build a strong understanding of stocks, indices, market participants, price movement, and basic market analysis.",
    level: "Beginner",
    lessons: 11,
    icon: "📈",
  },
  {
    courseId: "finance",
    category: "Finance",
    title: "Understanding Financial Markets",
    description:
      "Explore the bigger picture behind financial markets and understand how economic events influence price movement.",
    level: "Beginner",
    lessons: 9,
    icon: "🏦",
  },
];

function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Courses
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build your trading knowledge from the ground up.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Explore structured courses covering Forex, Crypto, Stocks, and
            financial markets. Learn the fundamentals, develop your analytical
            skills, and build a disciplined approach to trading.
          </p>
        </div>

        {/* Courses */}
        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CoursesPage;