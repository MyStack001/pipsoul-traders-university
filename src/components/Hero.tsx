import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Trading education, simplified.
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Learn the markets.
            <br />
            <span className="text-slate-400">Build your edge.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Pipsoul Traders University helps you understand Forex, Crypto,
            Stocks, and financial markets through structured, practical
            education.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Explore Courses
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#roadmap"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Play size={16} />
              Start Your Roadmap
            </a>
          </div>

         <div className="mt-10 flex flex-wrap gap-2.5">
  {["Forex", "Crypto", "Stocks", "Finance"].map((market) => (
    <span
      key={market}
      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-slate-300"
    >
      {market}
    </span>
  ))}
</div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
              <img
                src="/trading-hero.png"
                alt="Financial market trading"
                className="h-full w-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Market Focus</p>
                    <p className="mt-1 font-semibold text-white">
                      Understand Before You Trade
                    </p>
                  </div>

                  <div className="rounded-lg bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                    Education
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;