import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Mentorship", href: "#mentorship" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Pipsoul"
            className="h-10 w-10 object-contain"
          />

          <div>
            <p className="text-lg font-bold leading-tight tracking-tight text-white">
              Pipsoul Traders University
            </p>

            <p className="mt-0.5 text-xs text-slate-500 transition group-hover:text-slate-400">
              Learn. Trade. Grow.
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#courses"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#courses"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Start Learning
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;