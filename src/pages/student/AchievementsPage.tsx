import {
  Trophy,
  Flame,
  BookOpen,
  Target,
  Lock,
  CheckCircle2,
} from "lucide-react";

const achievements = [
  {
    title: "First Step",
    description: "Complete your first lesson.",
    icon: BookOpen,
    progress: 0,
    requirement: "0 / 1 lesson",
    unlocked: false,
  },
  {
    title: "Getting Started",
    description: "Complete 5 lessons.",
    icon: Target,
    progress: 0,
    requirement: "0 / 5 lessons",
    unlocked: false,
  },
  {
    title: "Knowledge Builder",
    description: "Complete 10 lessons.",
    icon: BookOpen,
    progress: 0,
    requirement: "0 / 10 lessons",
    unlocked: false,
  },
  {
    title: "Consistent Trader",
    description: "Maintain a 7-day learning streak.",
    icon: Flame,
    progress: 0,
    requirement: "0 / 7 days",
    unlocked: false,
  },
  {
    title: "Course Finisher",
    description: "Complete your first course.",
    icon: Trophy,
    progress: 0,
    requirement: "0 / 1 course",
    unlocked: false,
  },
  {
    title: "Trading Scholar",
    description: "Complete 50 lessons.",
    icon: Trophy,
    progress: 0,
    requirement: "0 / 50 lessons",
    unlocked: false,
  },
];

function AchievementsPage() {
  const unlockedCount = achievements.filter(
    (achievement) => achievement.unlocked
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header>
          <p className="text-sm font-medium text-blue-400">
            Achievements
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Achievements
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Track your milestones and celebrate the progress you make
            throughout your learning journey.
          </p>
        </header>

        {/* Overview */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* Earned */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
              <Trophy
                size={19}
                className="text-yellow-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              {unlockedCount}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Achievements earned
            </p>
          </div>

          {/* Available */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
              <Target
                size={19}
                className="text-blue-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              {achievements.length - unlockedCount}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Milestones remaining
            </p>
          </div>

          {/* Streak */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
              <Flame
                size={19}
                className="text-orange-400"
              />
            </div>

            <p className="mt-5 text-2xl font-bold">
              0 days
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Current learning streak
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-10 pb-10">

          <div>
            <h2 className="text-xl font-semibold">
              Milestones
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep learning to unlock new achievements.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;

              return (
                <article
                  key={achievement.title}
                  className={`rounded-2xl border p-6 backdrop-blur-xl transition ${
                    achievement.unlocked
                      ? "border-yellow-400/20 bg-yellow-400/[0.04]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        achievement.unlocked
                          ? "bg-yellow-400/10"
                          : "bg-white/[0.05]"
                      }`}
                    >
                      <Icon
                        size={21}
                        className={
                          achievement.unlocked
                            ? "text-yellow-400"
                            : "text-slate-500"
                        }
                      />
                    </div>

                    {achievement.unlocked ? (
                      <CheckCircle2
                        size={18}
                        className="text-emerald-400"
                      />
                    ) : (
                      <Lock
                        size={17}
                        className="text-slate-600"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {achievement.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-6">

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        Progress
                      </span>

                      <span className="font-medium text-slate-400">
                        {achievement.requirement}
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-blue-400"
                        style={{
                          width: `${achievement.progress}%`,
                        }}
                      />
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

export default AchievementsPage;