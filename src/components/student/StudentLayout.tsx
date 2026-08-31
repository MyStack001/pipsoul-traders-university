import { useState } from "react";
import { X } from "lucide-react";
import StudentSidebar from "./StudentSidebar";
import StudentTopbar from "./StudentTopbar";

type StudentLayoutProps = {
  children: React.ReactNode;
};

function StudentLayout({ children }: StudentLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Desktop Sidebar */}
      <StudentSidebar />

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <aside className="fixed inset-y-0 left-0 z-50 w-72 border-r border-white/10 bg-slate-950 md:hidden">
            {/* Mobile Header */}
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              <div className="flex items-center gap-3">
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
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              onClick={() => setMobileOpen(false)}
              className="h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <StudentSidebar />
            </div>
          </aside>
        </>
      )}

      {/* Main Application */}
      <div className="md:pl-64">
        <StudentTopbar
          onMenuClick={() => setMobileOpen(true)}
        />

        <main>{children}</main>
      </div>
    </div>
  );
}

export default StudentLayout;
