import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lessons } from "../data/lessons";

function LessonPage() {
  const { courseId, lessonId } = useParams();

  const [completed, setCompleted] = useState(false);

  const courseLessons = lessons.filter(
    (lesson) => lesson.courseId === courseId
  );

  const lessonIndex = courseLessons.findIndex(
    (lesson) => lesson.id === lessonId
  );

  const lesson = courseLessons[lessonIndex];

  const totalLessons = courseLessons.length;

  const currentLessonNumber = lessonIndex + 1;

  const progress =
    totalLessons > 0
      ? (currentLessonNumber / totalLessons) * 100
      : 0;

  const previousLesson =
    lessonIndex > 0
      ? courseLessons[lessonIndex - 1]
      : undefined;

  const nextLesson =
    lessonIndex < courseLessons.length - 1
      ? courseLessons[lessonIndex + 1]
      : undefined;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
          <Link
            to={`/courses/${courseId ?? ""}`}
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Back to Course
          </Link>

          <div className="mt-12">
            <h1 className="text-4xl font-bold tracking-tight">
              Lesson not found
            </h1>

            <p className="mt-4 text-slate-400">
              The lesson you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">

        {/* Back to Course */}
        <Link
          to={`/courses/${courseId}`}
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Course
        </Link>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-300">
              Lesson {currentLessonNumber} of {totalLessons}
            </span>

            <span className="text-slate-500">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Lesson Header */}
        <header className="mt-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Lesson {currentLessonNumber}
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
            onClick={() => setCompleted((value) => !value)}
            className={`
              rounded-xl
              border
              px-5
              py-3
              text-sm
              font-semibold
              transition
              ${
                completed
                  ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                  : "border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.10]"
              }
            `}
          >
            {completed
              ? "✓ Lesson Completed"
              : "Mark as Complete"}
          </button>
        </div>

        {/* Lesson Navigation */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Previous Lesson */}
          {previousLesson ? (
            <Link
              to={`/courses/${courseId}/lessons/${previousLesson.id}`}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-3
                text-sm
                font-medium
                text-slate-300
                transition
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              ← {previousLesson.title}
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {/* Next Lesson */}
          {nextLesson ? (
            <Link
              to={`/courses/${courseId}/lessons/${nextLesson.id}`}
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
              Next Lesson →
            </Link>
          ) : (
            <Link
              to={`/courses/${courseId}`}
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
              Back to Course →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

export default LessonPage;