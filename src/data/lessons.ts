export type Lesson = {
  id: string;
  courseId: string;
  title: string;
  description: string;
  content: {
    type: "paragraph" | "heading" | "list";
    text?: string;
    items?: string[];
  }[];
};

export const lessons: Lesson[] = [
  {
    id: "introduction-to-forex",
    courseId: "forex",
    title: "Introduction to Forex",
    description:
      "Understand what the Forex market is and how currency trading works.",

    content: [
      {
        type: "paragraph",
        text:
          "The foreign exchange market, commonly known as Forex or FX, is the global marketplace where currencies are bought and sold. It is one of the largest and most liquid financial markets in the world.",
      },
      {
        type: "heading",
        text: "What is Forex?",
      },
      {
        type: "paragraph",
        text:
          "Forex trading involves exchanging one currency for another. Unlike buying a stock, you are always dealing with a pair of currencies because one currency is exchanged against another.",
      },
      {
        type: "heading",
        text: "How Currency Trading Works",
      },
      {
        type: "paragraph",
        text:
          "When you trade Forex, you are speculating on the relative value of one currency against another. If you buy EUR/USD, for example, you are expecting the Euro to strengthen relative to the US Dollar.",
      },
      {
        type: "heading",
        text: "Why Does Forex Matter?",
      },
      {
        type: "paragraph",
        text:
          "Currencies play an important role in international trade, investment, banking, and the global economy. Understanding how currencies interact provides a foundation for understanding financial markets.",
      },
    ],
  },

  {
    id: "currency-pairs-and-pips",
    courseId: "forex",
    title: "Currency Pairs & Pips",
    description:
      "Learn how currency pairs are quoted and how pips measure price movement.",

    content: [
      {
        type: "paragraph",
        text:
          "Every Forex trade involves two currencies. These currencies are displayed together as a currency pair, such as EUR/USD, GBP/USD, or USD/JPY.",
      },
      {
        type: "heading",
        text: "Base and Quote Currency",
      },
      {
        type: "paragraph",
        text:
          "The first currency in a pair is called the base currency. The second is called the quote currency. The price tells you how much of the quote currency is required to buy one unit of the base currency.",
      },
      {
        type: "list",
        items: [
          "EUR/USD compares the Euro against the US Dollar.",
          "GBP/USD compares the British Pound against the US Dollar.",
          "USD/JPY compares the US Dollar against the Japanese Yen.",
        ],
      },
      {
        type: "heading",
        text: "What is a Pip?",
      },
      {
        type: "paragraph",
        text:
          "A pip is a standard unit used to measure price movement in Forex. For many major currency pairs, one pip represents a movement of 0.0001.",
      },
      {
        type: "heading",
        text: "Why Pips Matter",
      },
      {
        type: "paragraph",
        text:
          "Pips allow traders to measure price movement consistently and help determine potential profit, loss, and risk.",
      },
    ],
  },

  {
    id: "market-sessions",
    courseId: "forex",
    title: "Market Sessions",
    description:
      "Explore the Asian, London, and New York trading sessions.",

    content: [
      {
        type: "paragraph",
        text:
          "The Forex market operates continuously during the trading week. Different financial centres become active at different times, creating distinct trading sessions.",
      },
      {
        type: "heading",
        text: "The Major Trading Sessions",
      },
      {
        type: "list",
        items: [
          "Asian Session",
          "London Session",
          "New York Session",
        ],
      },
      {
        type: "heading",
        text: "Why Sessions Matter",
      },
      {
        type: "paragraph",
        text:
          "Different sessions can have different levels of liquidity and volatility. Understanding when major markets are active can help traders understand the conditions they are trading in.",
      },
      {
        type: "heading",
        text: "Session Overlaps",
      },
      {
        type: "paragraph",
        text:
          "When major trading sessions overlap, market participation can increase because traders and institutions from multiple financial centres are active at the same time.",
      },
      {
        type: "heading",
        text: "Trading Session Awareness",
      },
      {
        type: "paragraph",
        text:
          "A good trader should understand not only where price is, but also when the market is most active and what conditions may be present during that period.",
      },
    ],
  },

  {
    id: "understanding-market-structure",
    courseId: "forex",
    title: "Understanding Market Structure",
    description:
      "Learn how to identify trends, swings, and important market structure.",

    content: [
      {
        type: "paragraph",
        text:
          "Market structure describes the way price forms highs and lows over time. It provides a framework for understanding whether a market is trending, ranging, or changing direction.",
      },
      {
        type: "heading",
        text: "Higher Highs and Higher Lows",
      },
      {
        type: "paragraph",
        text:
          "A sequence of higher highs and higher lows is commonly associated with an upward-trending market.",
      },
      {
        type: "heading",
        text: "Lower Highs and Lower Lows",
      },
      {
        type: "paragraph",
        text:
          "A sequence of lower highs and lower lows is commonly associated with a downward-trending market.",
      },
      {
        type: "list",
        items: [
          "Higher High (HH)",
          "Higher Low (HL)",
          "Lower High (LH)",
          "Lower Low (LL)",
        ],
      },
      {
        type: "heading",
        text: "Why Structure Matters",
      },
      {
        type: "paragraph",
        text:
          "Understanding structure helps traders place individual price movements into a broader context rather than reacting to every candle independently.",
      },
    ],
  },

  {
    id: "support-and-resistance",
    courseId: "forex",
    title: "Support & Resistance",
    description:
      "Understand how key price levels can influence market behavior.",

    content: [
      {
        type: "paragraph",
        text:
          "Support and resistance are areas on a chart where price has previously reacted or where traders may expect increased buying or selling activity.",
      },
      {
        type: "heading",
        text: "Support",
      },
      {
        type: "paragraph",
        text:
          "Support is an area where buying interest has historically helped prevent or slow further declines in price.",
      },
      {
        type: "heading",
        text: "Resistance",
      },
      {
        type: "paragraph",
        text:
          "Resistance is an area where selling interest has historically helped prevent or slow further advances in price.",
      },
      {
        type: "heading",
        text: "Important Price Areas",
      },
      {
        type: "list",
        items: [
          "Previous highs",
          "Previous lows",
          "Repeated reaction zones",
          "Major psychological price levels",
        ],
      },
      {
        type: "heading",
        text: "Context Matters",
      },
      {
        type: "paragraph",
        text:
          "Support and resistance should not be treated as guaranteed reversal points. They are areas where price may react, and their significance depends on the broader market context.",
      },
    ],
  },

  {
    id: "technical-analysis-basics",
    courseId: "forex",
    title: "Technical Analysis Basics",
    description:
      "Build a foundation in reading charts and analyzing price action.",

    content: [
      {
        type: "paragraph",
        text:
          "Technical analysis involves studying price charts and market data to identify trends, patterns, levels, and potential trading opportunities.",
      },
      {
        type: "heading",
        text: "Reading Candlesticks",
      },
      {
        type: "paragraph",
        text:
          "Candlesticks display the open, high, low, and close price for a selected period. They provide a visual representation of how price behaved during that period.",
      },
      {
        type: "heading",
        text: "Price Action",
      },
      {
        type: "paragraph",
        text:
          "Price action focuses on the behaviour of price itself rather than relying entirely on indicators. Traders study swings, momentum, rejection, breakouts, and other forms of market behaviour.",
      },
      {
        type: "heading",
        text: "Timeframes",
      },
      {
        type: "paragraph",
        text:
          "Different timeframes provide different perspectives. A higher timeframe can provide broader context while a lower timeframe can show more detailed price behaviour.",
      },
      {
        type: "heading",
        text: "Use Analysis as a Framework",
      },
      {
        type: "paragraph",
        text:
          "Technical analysis does not guarantee what the market will do next. Its purpose is to help traders organize information and make decisions within a defined process.",
      },
    ],
  },

  {
    id: "risk-management",
    courseId: "forex",
    title: "Risk Management",
    description:
      "Learn how to protect your trading capital with proper risk management.",

    content: [
      {
        type: "paragraph",
        text:
          "Risk management is one of the most important parts of trading. A strategy can produce winning trades and still fail if risk is not controlled.",
      },
      {
        type: "heading",
        text: "Define Your Risk",
      },
      {
        type: "paragraph",
        text:
          "Before entering a trade, a trader should know how much they are willing to lose if the trade reaches its invalidation point.",
      },
      {
        type: "heading",
        text: "Risk Per Trade",
      },
      {
        type: "paragraph",
        text:
          "Many traders use a consistent percentage or fixed amount of account equity as their maximum risk per trade.",
      },
      {
        type: "heading",
        text: "Stop Loss",
      },
      {
        type: "paragraph",
        text:
          "A stop loss can be used to automatically close a position when price reaches a predefined level of invalidation.",
      },
      {
        type: "list",
        items: [
          "Know your maximum acceptable loss.",
          "Avoid oversized positions.",
          "Keep risk consistent.",
          "Do not increase risk simply because of a previous loss.",
        ],
      },
    ],
  },

  {
    id: "position-sizing",
    courseId: "forex",
    title: "Position Sizing",
    description:
      "Understand how position size should relate to your account and risk.",

    content: [
      {
        type: "paragraph",
        text:
          "Position sizing determines how large a trade should be. It connects your account size, risk amount, stop-loss distance, and the value of the instrument being traded.",
      },
      {
        type: "heading",
        text: "Why Position Size Matters",
      },
      {
        type: "paragraph",
        text:
          "Two traders can take the same setup but experience very different financial outcomes because they use different position sizes.",
      },
      {
        type: "heading",
        text: "Factors That Affect Position Size",
      },
      {
        type: "list",
        items: [
          "Account size",
          "Amount being risked",
          "Stop-loss distance",
          "Pip value",
          "Currency pair or instrument",
        ],
      },
      {
        type: "heading",
        text: "Consistency",
      },
      {
        type: "paragraph",
        text:
          "A structured approach to position sizing helps prevent emotional decisions and keeps risk more consistent from trade to trade.",
      },
    ],
  },

  {
    id: "trading-psychology",
    courseId: "forex",
    title: "Trading Psychology",
    description:
      "Explore discipline, patience, emotional control, and decision-making.",

    content: [
      {
        type: "paragraph",
        text:
          "Trading psychology refers to the emotional and behavioural side of making decisions in financial markets.",
      },
      {
        type: "heading",
        text: "Common Emotional Challenges",
      },
      {
        type: "list",
        items: [
          "Fear of losing",
          "Fear of missing out",
          "Revenge trading",
          "Overconfidence",
          "Impatience",
        ],
      },
      {
        type: "heading",
        text: "Discipline",
      },
      {
        type: "paragraph",
        text:
          "Discipline means following your trading process even when emotions encourage you to abandon your rules.",
      },
      {
        type: "heading",
        text: "Patience",
      },
      {
        type: "paragraph",
        text:
          "Not every market condition provides a valid opportunity. Patience allows traders to wait for conditions that fit their defined plan.",
      },
      {
        type: "heading",
        text: "Learn From Every Trade",
      },
      {
        type: "paragraph",
        text:
          "Reviewing your decisions can help identify recurring mistakes and behavioural patterns that may affect your performance.",
      },
    ],
  },

  {
    id: "building-a-trading-plan",
    courseId: "forex",
    title: "Building a Trading Plan",
    description:
      "Learn how to create a structured plan for your trading decisions.",

    content: [
      {
        type: "paragraph",
        text:
          "A trading plan is a written framework that defines how you approach the market. It turns trading from a collection of random decisions into a repeatable process.",
      },
      {
        type: "heading",
        text: "What Should a Trading Plan Include?",
      },
      {
        type: "list",
        items: [
          "Markets and instruments you trade.",
          "Trading sessions you focus on.",
          "Entry conditions.",
          "Stop-loss rules.",
          "Take-profit rules.",
          "Risk per trade.",
          "Conditions for staying out of the market.",
        ],
      },
      {
        type: "heading",
        text: "Your Trading Rules",
      },
      {
        type: "paragraph",
        text:
          "Your rules should be clear enough that you can determine whether a trade meets your criteria before entering the market.",
      },
      {
        type: "heading",
        text: "Consistency Over Prediction",
      },
      {
        type: "paragraph",
        text:
          "A trading plan is not designed to predict every market movement. Its purpose is to provide a consistent framework for making decisions.",
      },
    ],
  },

  {
    id: "trade-management",
    courseId: "forex",
    title: "Trade Management",
    description:
      "Understand how to manage an open position from entry to exit.",

    content: [
      {
        type: "paragraph",
        text:
          "Trade management is the process of managing a position after entry while following the rules defined in your trading plan.",
      },
      {
        type: "heading",
        text: "Before Entering",
      },
      {
        type: "paragraph",
        text:
          "Before entering a trade, you should understand the entry price, invalidation level, target, position size, and maximum acceptable risk.",
      },
      {
        type: "heading",
        text: "Managing an Open Trade",
      },
      {
        type: "list",
        items: [
          "Monitor the trade according to your plan.",
          "Avoid changing your rules because of temporary emotions.",
          "Respect your stop-loss.",
          "Allow the trade to reach its planned outcome when conditions remain valid.",
        ],
      },
      {
        type: "heading",
        text: "Exiting a Trade",
      },
      {
        type: "paragraph",
        text:
          "A position may be closed because the target has been reached, the trade idea has been invalidated, or another predefined exit condition has occurred.",
      },
      {
        type: "heading",
        text: "Review",
      },
      {
        type: "paragraph",
        text:
          "After the trade, reviewing what happened can help you determine whether you followed your process and where improvements may be needed.",
      },
    ],
  },

  {
    id: "your-first-trading-framework",
    courseId: "forex",
    title: "Your First Trading Framework",
    description:
      "Bring the fundamentals together into a simple structured framework.",

    content: [
      {
        type: "paragraph",
        text:
          "You now have the fundamental concepts needed to begin developing a structured approach to Forex trading. The next step is to bring these concepts together into a repeatable framework.",
      },
      {
        type: "heading",
        text: "Step 1 — Define Your Market",
      },
      {
        type: "paragraph",
        text:
          "Choose the currency pairs or instruments you intend to study and trade. Avoid trying to follow everything at once.",
      },
      {
        type: "heading",
        text: "Step 2 — Define Your Context",
      },
      {
        type: "paragraph",
        text:
          "Use market structure, price action, important levels, and the broader market environment to establish context before looking for an entry.",
      },
      {
        type: "heading",
        text: "Step 3 — Define Your Risk",
      },
      {
        type: "paragraph",
        text:
          "Determine your acceptable risk before entering the trade and calculate an appropriate position size.",
      },
      {
        type: "heading",
        text: "Step 4 — Execute Your Plan",
      },
      {
        type: "paragraph",
        text:
          "Only take trades that meet your predefined conditions. Once in a trade, manage it according to your rules.",
      },
      {
        type: "heading",
        text: "Step 5 — Review and Improve",
      },
      {
        type: "paragraph",
        text:
          "Record your trades, review your decisions, and look for patterns in your execution. Improvement comes from consistently reviewing and refining your process.",
      },
      {
        type: "heading",
        text: "The Bigger Picture",
      },
      {
        type: "paragraph",
        text:
          "Successful trading is not about finding a perfect prediction. It is about developing a repeatable process, controlling risk, managing decisions, and continually improving your execution.",
      },
    ],
  },
];