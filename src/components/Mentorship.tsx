import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Get guidance beyond the lessons",
  "Connect with other traders",
  "Stay accountable to your learning goals",
  "Continue developing your trading process",
];

function Mentorship() {
  return (
    <section
      id="mentorship"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-12 lg:p-16"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400">
                <Users size={24} />
              </div>

              <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Mentorship & Community
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                You don't have to learn the markets alone.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Education gives you the foundation. Community, guidance, and
                accountability help you keep developing after the lesson ends.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Join the Community
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={17} />
                  Explore Mentorship
                </a>
              </div>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative min-h-[360px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-blue-500/[0.08]" />

              <div className="absolute inset-8 flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <MessageCircle size={21} />
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    Community
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Your next step after learning
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Learn together.
                    <br />
                    Grow together.
                  </h3>

                  <div className="mt-6 flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-800 text-xs text-slate-400"
                      >
                        {item}
                      </div>
                    ))}

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-white text-xs font-semibold text-slate-950">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentorship;