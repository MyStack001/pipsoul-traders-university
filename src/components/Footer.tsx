import {
  ArrowUpRight,
  Send,
} from "lucide-react";

const footerLinks = {
  Learn: [
    { label: "Courses", href: "#courses" },
    { label: "Learning Roadmap", href: "#roadmap" },
    { label: "Mentorship", href: "#mentorship" },
  ],
  Markets: [
    { label: "Forex", href: "#courses" },
    { label: "Crypto", href: "#courses" },
    { label: "Stocks", href: "#courses" },
    { label: "Finance", href: "#courses" },
  ],
};

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6">
      <div className="mx-auto max-w-7xl py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
<div className="max-w-sm">
  <a
    href="#"
    className="group inline-flex items-center gap-3"
  >
    <img
      src="/Logo.png"
      alt="Pipsoul"
      className="h-11 w-11 object-contain"
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

            <p className="mt-6 text-sm leading-6 text-slate-500">
              A structured learning platform designed to help you understand
              financial markets, develop discipline, and build a stronger
              trading foundation.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <Send size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
            IG
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                YT
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-white">Learn</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.Learn.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-sm font-semibold text-white">Markets</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.Markets.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Ready to learn?
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Start with the fundamentals and build your trading knowledge one
              step at a time.
            </p>

            <a
              href="#courses"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore courses
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Pipsoul Traders University. All
            rights reserved.
          </p>

          <p>
            Education only. Trading involves risk.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;