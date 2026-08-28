import { useParams, Link } from "react-router-dom";

function CoursePage() {
  const { courseId } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <Link
          to="/courses"
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Courses
        </Link>

        <div className="mt-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {courseId}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Course Overview
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Welcome to your trading education journey. This course will guide
            you through the essential concepts you need to develop a stronger
            understanding of the markets.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold">
            What you'll learn
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>• Understanding the foundations of the market</li>
            <li>• Developing a structured approach to analysis</li>
            <li>• Understanding risk and trade management</li>
            <li>• Building disciplined trading habits</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default CoursePage;