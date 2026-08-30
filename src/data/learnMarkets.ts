export type LearnMarket = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  concepts: string[];
  courseId?: string;
  courseTitle?: string;
};

export const learnMarkets: LearnMarket[] = [
  {
    id: "forex",
    title: "Forex",
    eyebrow: "Foreign Exchange",
    description:
      "Understand the global currency market and the forces that influence how currencies move against one another.",
    icon: "💱",
    concepts: [
      "Currency pairs",
      "Pips, lots & leverage",
      "Bid, ask & spread",
      "Market sessions",
      "Market structure",
      "Risk management",
    ],
    courseId: "forex",
    courseTitle: "Forex Trading Fundamentals",
  },

  {
    id: "crypto",
    title: "Crypto",
    eyebrow: "Digital Assets",
    description:
      "Explore cryptocurrency markets, digital assets, market cycles, volatility, and the fundamentals behind crypto trading.",
    icon: "₿",
    concepts: [
      "Bitcoin & major assets",
      "Crypto market structure",
      "Volatility",
      "Market cycles",
      "Crypto charts",
      "Risk management",
    ],
    courseId: "crypto",
    courseTitle: "Crypto Trading Fundamentals",
  },

  {
    id: "stocks",
    title: "Stocks",
    eyebrow: "Equity Markets",
    description:
      "Learn how stocks work, what drives their prices, and how investors and traders analyze equity markets.",
    icon: "📈",
    concepts: [
      "What stocks represent",
      "Stock market structure",
      "Reading stock charts",
      "Market trends",
      "Fundamental analysis",
      "Technical analysis",
    ],
    courseId: "stocks",
    courseTitle: "Stock Market Fundamentals",
  },

  {
    id: "indices",
    title: "Indices",
    eyebrow: "Market Benchmarks",
    description:
      "Understand how market indices measure groups of assets and provide a broader view of market performance and sentiment.",
    icon: "📊",
    concepts: [
      "What an index represents",
      "Major market indices",
      "Index composition",
      "Price-weighted vs market-cap weighted",
      "Index movements",
      "Trading indices",
    ],
  },

  {
    id: "finance",
    title: "Finance",
    eyebrow: "Financial Markets",
    description:
      "Build a broader understanding of financial markets, economics, monetary policy, and the forces that influence market behaviour.",
    icon: "🏦",
    concepts: [
      "Financial markets",
      "Market participants",
      "Interest rates",
      "Inflation & growth",
      "Central banks",
      "Economic indicators",
    ],
    courseId: "finance",
    courseTitle: "Understanding Financial Markets",
  },
];