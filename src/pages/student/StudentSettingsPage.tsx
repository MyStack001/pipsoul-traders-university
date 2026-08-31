import {
  User,
  Bell,
  Palette,
  BookOpen,
  Shield,
  LogOut,
} from "lucide-react";

function StudentSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Settings
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Student Settings
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Manage your account, learning preferences, and student portal
            experience.
          </p>
        </header>

        {/* Account */}
        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10">
              <User size={17} className="text-blue-400" />
            </div>

            <div>
              <h2 className="font-semibold">
                Account
              </h2>

              <p className="text-xs text-slate-500">
                Your student account information
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Profile
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Update your name and student profile.
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                Manage Profile
              </button>
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Account status
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Your Pipsoul Traders University account.
                </p>
              </div>

              <span className="w-fit rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                Active
              </span>
            </div>

          </div>
        </section>

        {/* Learning Preferences */}
        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
              <BookOpen size={17} className="text-emerald-400" />
            </div>

            <div>
              <h2 className="font-semibold">
                Learning Preferences
              </h2>

              <p className="text-xs text-slate-500">
                Customize your learning experience.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Course reminders
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Receive reminders to continue your learning.
                </p>
              </div>

              <button
                type="button"
                className="relative h-6 w-11 rounded-full bg-blue-400/20"
                aria-label="Course reminders enabled"
              >
                <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-blue-400" />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Progress tracking
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Track completed lessons and learning milestones.
                </p>
              </div>

              <span className="text-xs font-medium text-emerald-400">
                Enabled
              </span>
            </div>

          </div>
        </section>

        {/* Notifications */}
        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400/10">
              <Bell size={17} className="text-orange-400" />
            </div>

            <div>
              <h2 className="font-semibold">
                Notifications
              </h2>

              <p className="text-xs text-slate-500">
                Control the notifications you receive.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Learning updates
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Get updates about your courses and learning progress.
                </p>
              </div>

              <button
                type="button"
                className="relative h-6 w-11 rounded-full bg-blue-400/20"
                aria-label="Learning updates enabled"
              >
                <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-blue-400" />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Achievement notifications
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Be notified when you unlock a new achievement.
                </p>
              </div>

              <button
                type="button"
                className="relative h-6 w-11 rounded-full bg-blue-400/20"
                aria-label="Achievement notifications enabled"
              >
                <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-blue-400" />
              </button>
            </div>

          </div>
        </section>

        {/* Appearance */}
        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-400/10">
              <Palette size={17} className="text-purple-400" />
            </div>

            <div>
              <h2 className="font-semibold">
                Appearance
              </h2>

              <p className="text-xs text-slate-500">
                Customize how the student portal looks.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Theme
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Choose your preferred portal appearance.
                </p>
              </div>

              <div className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
                <button
                  type="button"
                  className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-950"
                >
                  Dark
                </button>

                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:text-white"
                >
                  Light
                </button>

                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:text-white"
                >
                  System
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Security */}
        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-400/10">
              <Shield size={17} className="text-slate-400" />
            </div>

            <div>
              <h2 className="font-semibold">
                Security
              </h2>

              <p className="text-xs text-slate-500">
                Manage your account security.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/[0.03]"
            >
              <div>
                <p className="text-sm font-medium">
                  Password & security
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Manage your account credentials and security options.
                </p>
              </div>

              <span className="text-xs text-slate-600">
                →
              </span>
            </button>

          </div>
        </section>

        {/* Sign Out */}
        <section className="mt-10 pb-10">
          <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.03] p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  Sign out
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Sign out of your Pipsoul student account.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-400/15"
              >
                <LogOut size={15} />
                Sign Out
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default StudentSettingsPage;