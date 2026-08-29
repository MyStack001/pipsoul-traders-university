import { Link, useParams } from "react-router-dom";

function LessonPage() {
  const { courseId, lessonId } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          to={`/courses/${courseId}`}
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Course
        </Link>

        <div className="mt-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {courseId}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Lesson
          </h1>

          <p className="mt-4 text-slate-400">
            Lesson ID: {lessonId}
          </p>
        </div>
      </main>
    </div>
  );
}

export default LessonPage;