import { Bell, Menu } from "lucide-react";

type StudentTopbarProps = {
  onMenuClick: () => void;
};

function StudentTopbar({ onMenuClick }: StudentTopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </button>

        {/* Desktop Context */}
        <div className="hidden md:block">
          <p className="text-sm font-medium text-slate-400">
            Pipsoul Traders University
          </p>

          <p className="mt-0.5 text-xs text-slate-600">
            Student Portal
          </p>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-xl p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Notifications"
          >
            <Bell size={19} />

            {/* Notification indicator */}
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
          </button>

          {/* Profile */}
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white/5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
              T
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-white">
                Trader
              </p>

              <p className="text-xs text-slate-500">
                Student
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default StudentTopbar;