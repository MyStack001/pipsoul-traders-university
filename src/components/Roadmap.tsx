import {
  BookOpen,
  Brain,
  ChartNoAxesCombined,
  ShieldCheck,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Market Foundations",
    description:
      "Learn how financial markets work, understand essential trading terminology, and build a strong foundation before analyzing charts.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Technical Analysis",
    description:
      "Learn how to read price action, identify market structure, understand trends, and analyze important areas on a chart.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Risk Management",
    description:
      "Understand position sizing, risk-to-reward, drawdown, and the principles that help protect your trading capital.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Trading Psychology",
    description:
      "Develop discipline, patience, emotional awareness, and the mindset required to follow a trading process consistently.",
    icon: Brain,
  },
  {
    number: "05",
    title: "Build Your Playbook",
    description:
      "Bring everything together and create a structured trading approach with clear rules, setups, risk parameters, and review habits.",
    icon: Target,
  },
];

function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-slate-900/40 px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Your Learning Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Know exactly where to start.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Follow a structured path from understanding the markets to
            developing a disciplined trading process.
          </p>
        </div>

        {/* Roadmap */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative grid sm:grid-cols-2 sm:gap-12"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-slate-300 shadow-xl sm:left-1/2 sm:-translate-x-1/2">
                    <Icon size={21} />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 sm:ml-0 ${
                      isEven
                        ? "sm:pr-16 sm:text-right"
                        : "sm:col-start-2 sm:pl-16"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;