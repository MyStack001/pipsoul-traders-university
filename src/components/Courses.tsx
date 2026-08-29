import {
  BarChart3,
  Bitcoin,
  LineChart,
  WalletCards,
} from "lucide-react";
import CourseCard from "./CourseCard";

const courses = [
  {
    courseId: "forex",
    title: "Forex Trading",
    description:
      "Understand currency markets, market structure, technical analysis, risk management, and the foundations of disciplined Forex trading.",
    lessons: 24,
    level: "Beginner" as const,
    icon: <LineChart size={23} />,
  },
  {
    courseId: "crypto",
    title: "Crypto Trading",
    description:
      "Learn how crypto markets work, analyze volatility, read price action, and develop a structured approach to digital assets.",
    lessons: 20,
    level: "Beginner" as const,
    icon: <Bitcoin size={23} />,
  },
  {
    courseId: "stocks",
    title: "Stock Market",
    description:
      "Explore stocks, company fundamentals, technical analysis, market cycles, and the principles behind smarter equity decisions.",
    lessons: 18,
    level: "Beginner" as const,
    icon: <BarChart3 size={23} />,
  },
  {
    courseId: "finance",
    title: "Financial Markets",
    description:
      "Build a broader understanding of financial markets, economics, trading psychology, money management, and risk.",
    lessons: 16,
    level: "Beginner" as const,
    icon: <WalletCards size={23} />,
  },
];

function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Learning Tracks
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Learn the markets from the ground up.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Structured learning paths designed to help you understand the
            markets before putting your capital at risk.
          </p>
        </div>

        {/* Course grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              courseId={course.courseId}
              title={course.title}
              description={course.description}
              lessons={course.lessons}
              level={course.level}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;