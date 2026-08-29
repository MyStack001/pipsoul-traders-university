import { Link, useParams } from "react-router-dom";
import { lessons } from "../data/lessons";

function LessonPage() {
  const { courseId, lessonId } = useParams();

  const lesson = lessons.find(
    (item) =>
      item.courseId === courseId &&
      item.id === lessonId
  );

  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <main className="mx-auto max-w-4xl px-6 py-24">
          <Link
            to={`/courses/${courseId ?? ""}`}
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Back to Course
          </Link>

          <h1 className="mt-12 text-4xl font-bold">
            Lesson not found
          </h1>

          <p className="mt-4 text-slate-400">
            The lesson you're looking for doesn't exist.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">

        {/* Back */}
        <Link
          to={`/courses/${courseId}`}
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Course
        </Link>

        {/* Lesson Header */}
        <header className="mt-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Lesson
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {lesson.title}
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            {lesson.description}
          </p>
        </header>

        {/* Lesson Content */}
        <article className="mt-12 space-y-8">
          {lesson.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="pt-4 text-2xl font-semibold tracking-tight text-white"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="space-y-3 text-base leading-7 text-slate-400"
                >
                  {block.items?.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={index}
                className="text-base leading-8 text-slate-300 sm:text-lg"
              >
                {block.text}
              </p>
            );
          })}
        </article>

        {/* Completion */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <button
            type="button"
            className="
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
            Mark as complete
          </button>
        </div>

      </main>
    </div>
  );
}

export default LessonPage;