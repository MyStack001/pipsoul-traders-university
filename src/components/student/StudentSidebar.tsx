import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Trophy,
  Bookmark,
  Search,
  Calculator,
  Users,
  Settings,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
  },
  {
    label: "My Learning",
    icon: BookOpen,
    to: "/dashboard/learning",
  },
  {
    label: "Courses",
    icon: GraduationCap,
    to: "/dashboard/courses",
  },
  {
    label: "Quizzes",
    icon: ClipboardCheck,
    to: "/dashboard/quizzes",
  },
  {
    label: "Achievements",
    icon: Trophy,
    to: "/dashboard/achievements",
  },
  {
    label: "Bookmarks",
    icon: Bookmark,
    to: "/dashboard/bookmarks",
  },
  {
    label: "Glossary",
    icon: Search,
    to: "/dashboard/glossary",
  },
  {
    label: "Resources",
    icon: Calculator,
    to: "/dashboard/resources",
  },
  {
    label: "Mentorship",
    icon: Users,
    to: "/dashboard/mentorship",
  },
];

function StudentSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-slate-950 md:flex md:flex-col">
      {/* Brand */}
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Pipsoul"
            className="h-9 w-9 object-contain"
          />

          <div>
            <p className="text-sm font-bold tracking-tight text-white">
              Pipsoul
            </p>

            <p className="text-xs text-slate-500">
              Traders University
            </p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/dashboard"}
              className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-2.5
                text-sm
                font-medium
                transition
                ${
                  isActive
                    ? "bg-white/[0.08] text-white"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-blue-400"
                        : "text-slate-500 group-hover:text-slate-300"
                    }
                  />

                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="border-t border-white/10 p-3">
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2.5
            text-sm
            font-medium
            transition
            ${
              isActive
                ? "bg-white/[0.08] text-white"
                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
            }
            `
          }
        >
          {({ isActive }) => (
            <>
              <Settings
                size={18}
                className={
                  isActive ? "text-blue-400" : "text-slate-500"
                }
              />

              <span>Settings</span>
            </>
          )}
        </NavLink>
      </div>
    </aside>
  );
}

export default StudentSidebar;