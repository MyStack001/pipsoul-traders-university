import {
  Bookmark,
  BookOpen,
  Search,
  ArrowRight,
} from "lucide-react";

function BookmarksPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Bookmarks
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Saved for Later
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Save lessons, concepts, and resources you want to revisit
            during your trading journey.
          </p>
        </header>

        {/* Overview */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">

          {/* Saved Lessons */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
                <Bookmark
                  size={19}
                  className="text-blue-400"
                />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Saved
              </span>
            </div>

            <p className="mt-5 text-2xl font-bold">
              0
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Saved items
            </p>
          </div>

          {/* Lessons */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                <BookOpen
                  size={19}
                  className="text-emerald-400"
                />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Learning
              </span>
            </div>

            <p className="mt-5 text-2xl font-bold">
              0
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Lessons saved
            </p>
          </div>
        </section>

        {/* Empty State */}
        <section className="mt-10 pb-10">
          <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center backdrop-blur-xl">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/10">
              <Bookmark
                size={28}
                className="text-blue-400"
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              No bookmarks yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              When you find a lesson or resource you want to revisit,
              bookmark it and it will appear here.
            </p>

            <a
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              <Search size={15} />
              Explore Courses
            </a>
          </div>
        </section>

        {/* Helpful Note */}
        <section className="pb-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-white">
                Build your personal learning library
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Bookmark important lessons so you can quickly return
                to them whenever you need a refresher.
              </p>
            </div>

            <a
              href="/dashboard/learning"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              My Learning
              <ArrowRight size={15} />
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}

export default BookmarksPage;