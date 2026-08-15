import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CourseCardProps = {
  title: string;
  description: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: ReactNode;
};

function CourseCard({
  title,
  description,
  lessons,
  level,
  icon,
}: CourseCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        backdrop-blur-xl
      "
    >
      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        {/* Icon */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200">
            {icon}
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition group-hover:border-white/20 group-hover:text-white">
            <ArrowUpRight size={17} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>

        {/* Meta */}
        <div className="mt-auto pt-7">
          <div className="flex items-center gap-4 border-t border-white/10 pt-5">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <BookOpen size={14} />
              <span>{lessons} lessons</span>
            </div>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <span className="text-xs text-slate-500">{level}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default CourseCard;