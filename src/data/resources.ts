export type Resource = {
  id: string;
  title: string;
  description: string;
  type: "calculator";
};

export const resources: Resource[] = [
  {
    id: "position-size-calculator",
    title: "Position Size Calculator",
    description:
      "Calculate an appropriate position size based on your account balance, risk percentage, and stop-loss distance.",
    type: "calculator",
  },
  {
    id: "pip-calculator",
    title: "Pip Calculator",
    description:
      "Calculate the monetary value of pips based on your currency pair, position size, and account currency.",
    type: "calculator",
  },
];