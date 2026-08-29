import { Link, useParams } from "react-router-dom";

type Lesson = {
  title: string;
  description: string;
};
type Course = {
  title: string;
  category: string;
  description: string;
  lessons: Lesson[];
  level: "Beginner" | "Intermediate" | "Advanced";
};

const courses: Record<string, Course> = {
  forex: {
    title: "Forex Trading Fundamentals",
    category: "Forex",
    description:
      "Build a strong foundation in Forex trading. Learn how currency markets work, how price moves, and the principles behind structured and disciplined trading.",
    level: "Beginner",
    lessons: [
      {
        title: "Introduction to Forex",
        description:
          "Understand what the Forex market is and how currency trading works.",
      },
      {
        title: "Currency Pairs & Pips",
        description:
          "Learn how currency pairs are quoted and how pips measure price movement.",
      },
      {
        title: "Market Sessions",
        description:
          "Explore the Asian, London, and New York trading sessions.",
      },
      {
        title: "Understanding Market Structure",
        description:
          "Learn how to identify trends, swings, and important market structure.",
      },
      {
        title: "Support & Resistance",
        description:
          "Understand how key price levels can influence market behavior.",
      },
      {
        title: "Technical Analysis Basics",
        description:
          "Build a foundation in reading charts and analyzing price action.",
      },
      {
        title: "Risk Management",
        description:
          "Learn how to protect your trading capital with proper risk management.",
      },
      {
        title: "Position Sizing",
        description:
          "Understand how position size should relate to your account and risk.",
      },
      {
        title: "Trading Psychology",
        description:
          "Explore discipline, patience, emotional control, and decision-making.",
      },
      {
        title: "Building a Trading Plan",
        description:
          "Learn how to create a structured plan for your trading decisions.",
      },
      {
        title: "Trade Management",
        description:
          "Understand how to manage an open position from entry to exit.",
      },
      {
        title: "Your First Trading Framework",
        description:
          "Bring the fundamentals together into a simple structured framework.",
      },
    ],
  },

  crypto: {
    title: "Crypto Trading Fundamentals",
    category: "Crypto",
    description:
      "Understand the fundamentals of cryptocurrency markets, volatility, market cycles, and the principles of responsible crypto trading.",
    level: "Beginner",
    lessons: [
      {
        title: "Introduction to Crypto Markets",
        description:
          "Understand cryptocurrency markets and how digital assets are traded.",
      },
      {
        title: "Bitcoin & Major Assets",
        description:
          "Explore Bitcoin and the role of major cryptocurrencies.",
      },
      {
        title: "Crypto Market Structure",
        description:
          "Learn how price moves through different market conditions.",
      },
      {
        title: "Volatility & Risk",
        description:
          "Understand crypto volatility and why risk management matters.",
      },
      {
        title: "Reading Crypto Charts",
        description:
          "Learn the foundations of technical analysis for crypto markets.",
      },
      {
        title: "Market Cycles",
        description:
          "Understand accumulation, expansion, distribution, and contraction.",
      },
      {
        title: "Trading Psychology",
        description:
          "Develop discipline when trading highly volatile markets.",
      },
      {
        title: "Risk Management",
        description:
          "Learn practical principles for managing risk in crypto trading.",
      },
      {
        title: "Building a Crypto Trading Plan",
        description:
          "Create a structured framework for making crypto trading decisions.",
      },
      {
        title: "Putting It All Together",
        description:
          "Combine the fundamentals into a simple crypto trading framework.",
      },
    ],
  },

  stocks: {
    title: "Stock Market Fundamentals",
    category: "Stocks",
    description:
      "Learn the foundations of stock market investing and trading, including market structure, analysis, price movement, and risk management.",
    level: "Beginner",
    lessons: [
      {
        title: "Introduction to Stocks",
        description:
          "Understand what stocks represent and how the stock market works.",
      },
      {
        title: "How Stock Markets Work",
        description:
          "Learn about exchanges, buyers, sellers, and market participants.",
      },
      {
        title: "Reading Stock Charts",
        description:
          "Learn the fundamentals of interpreting price charts.",
      },
      {
        title: "Market Trends & Structure",
        description:
          "Understand trends, swings, and changing market conditions.",
      },
      {
        title: "Fundamental Analysis",
        description:
          "Learn the basics of evaluating companies and their financial health.",
      },
      {
        title: "Technical Analysis",
        description:
          "Explore the foundations of technical analysis and price action.",
      },
      {
        title: "Risk Management",
        description:
          "Understand how to manage risk when trading or investing in stocks.",
      },
      {
        title: "Portfolio Basics",
        description:
          "Learn how diversification and allocation can influence portfolio risk.",
      },
      {
        title: "Trading Psychology",
        description:
          "Develop the discipline required to make better market decisions.",
      },
      {
        title: "Building a Stock Market Plan",
        description:
          "Create a structured framework for analyzing and trading stocks.",
      },
      {
        title: "Putting It All Together",
        description:
          "Combine the core concepts into a practical market framework.",
      },
    ],
  },

  finance: {
    title: "Understanding Financial Markets",
    category: "Finance",
    description:
      "Explore the broader financial markets and understand how economics, market participants, and major financial events influence price movement.",
    level: "Beginner",
    lessons: [
      {
        title: "Introduction to Financial Markets",
        description:
          "Understand the purpose and structure of global financial markets.",
      },
      {
        title: "Market Participants",
        description:
          "Learn about banks, institutions, governments, businesses, and individual traders.",
      },
      {
        title: "Interest Rates",
        description:
          "Understand why interest rates matter to financial markets.",
      },
      {
        title: "Inflation & Economic Growth",
        description:
          "Explore how inflation and economic growth influence markets.",
      },
      {
        title: "Central Banks",
        description:
          "Understand the role of central banks in the global economy.",
      },
      {
        title: "Economic Indicators",
        description:
          "Learn how major economic data can influence market expectations.",
      },
      {
        title: "Risk & Money Management",
        description:
          "Understand the importance of protecting capital across financial markets.",
      },
      {
        title: "Trading Psychology",
        description:
          "Explore the behavioral side of financial decision-making.",
      },
      {
        title: "Market Cycles",
        description:
          "Learn how markets move through different economic and price cycles.",
      },
    ],
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

            <span>{course.lessons.length} lessons</span>
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
        <section className="mt-8 max-w-3xl">
  <div className="mb-5">
    <h2 className="text-xl font-semibold">
      Course Content
    </h2>

    <p className="mt-2 text-sm text-slate-400">
      {course.lessons.length} lessons to help you build a strong foundation.
    </p>
  </div>

  <div className="space-y-3">
    {course.lessons.map((lesson, index) => (
      <div
        key={lesson.title}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-5
          backdrop-blur-xl
          transition
          hover:border-white/20
          hover:bg-white/[0.05]
        "
      >
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-400">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {lesson.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              {lesson.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        <section className="mt-8 max-w-3xl"></section>
      </main>
    </div>
  );
}

export default CoursePage;