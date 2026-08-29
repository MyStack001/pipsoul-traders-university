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
  // ============================================================
  // FOREX — 12 LESSONS
  // ============================================================

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
        type: "list",
        items: [
          "Previous highs",
          "Previous lows",
          "Repeated reaction zones",
          "Major psychological price levels",
        ],
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
          "Price action focuses on the behaviour of price itself. Traders may study swings, momentum, rejection, breakouts, and other forms of market behaviour.",
      },
      {
        type: "heading",
        text: "Timeframes",
      },
      {
        type: "paragraph",
        text:
          "Different timeframes provide different perspectives. Higher timeframes can provide broader context while lower timeframes can show more detailed price behaviour.",
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
          "You now have the fundamental concepts needed to begin developing a structured approach to Forex trading.",
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
          "Record your trades, review your decisions, and look for patterns in your execution.",
      },
    ],
  },

  // ============================================================
  // CRYPTO — 10 LESSONS
  // ============================================================

  {
    id: "introduction-to-crypto-markets",
    courseId: "crypto",
    title: "Introduction to Crypto Markets",
    description:
      "Understand cryptocurrency markets and how digital assets are traded.",
    content: [
      {
        type: "paragraph",
        text:
          "Cryptocurrency markets are digital financial markets where blockchain-based assets can be bought and sold. Unlike traditional currencies issued by central banks, many cryptocurrencies operate through decentralized networks.",
      },
      {
        type: "heading",
        text: "What is Cryptocurrency?",
      },
      {
        type: "paragraph",
        text:
          "A cryptocurrency is a digital asset that uses cryptographic technology and blockchain networks to record and verify transactions.",
      },
      {
        type: "heading",
        text: "How Crypto Markets Work",
      },
      {
        type: "paragraph",
        text:
          "Crypto assets are traded on exchanges where buyers and sellers interact. Prices change as market participants place orders and respond to changing information and expectations.",
      },
      {
        type: "list",
        items: [
          "Digital-native assets",
          "Blockchain-based infrastructure",
          "Markets that can operate around the clock",
          "Different levels of liquidity and volatility",
        ],
      },
    ],
  },

  {
    id: "bitcoin-and-major-assets",
    courseId: "crypto",
    title: "Bitcoin & Major Assets",
    description:
      "Explore Bitcoin and the role of major cryptocurrencies.",
    content: [
      {
        type: "paragraph",
        text:
          "Bitcoin is the first widely adopted cryptocurrency and remains one of the most important assets in the crypto market.",
      },
      {
        type: "heading",
        text: "Bitcoin",
      },
      {
        type: "paragraph",
        text:
          "Bitcoin operates on a decentralized blockchain network and uses proof-of-work to secure its network and validate transactions.",
      },
      {
        type: "heading",
        text: "Other Major Assets",
      },
      {
        type: "list",
        items: [
          "Bitcoin (BTC)",
          "Ethereum (ETH)",
          "Stablecoins",
          "Other blockchain-based assets and tokens",
        ],
      },
      {
        type: "paragraph",
        text:
          "Not all cryptocurrencies behave in the same way. Liquidity, market capitalization, adoption, technology, and market sentiment can all influence an asset.",
      },
    ],
  },

  {
    id: "crypto-market-structure",
    courseId: "crypto",
    title: "Crypto Market Structure",
    description:
      "Learn how price moves through different market conditions.",
    content: [
      {
        type: "paragraph",
        text:
          "Market structure describes how price develops over time through highs, lows, ranges, trends, and changes in momentum.",
      },
      {
        type: "heading",
        text: "Trending Markets",
      },
      {
        type: "paragraph",
        text:
          "A trending market generally moves in a directional manner, producing a sequence of higher or lower swing points.",
      },
      {
        type: "heading",
        text: "Ranging Markets",
      },
      {
        type: "paragraph",
        text:
          "A ranging market moves between areas of support and resistance without establishing a clear sustained direction.",
      },
      {
        type: "list",
        items: [
          "Uptrends",
          "Downtrends",
          "Ranges",
          "Breakouts",
          "Potential trend transitions",
        ],
      },
    ],
  },

  {
    id: "volatility-and-risk",
    courseId: "crypto",
    title: "Volatility & Risk",
    description:
      "Understand crypto volatility and why risk management matters.",
    content: [
      {
        type: "paragraph",
        text:
          "Crypto markets can experience substantial price movements over relatively short periods. This creates both opportunities and significant risks.",
      },
      {
        type: "heading",
        text: "What is Volatility?",
      },
      {
        type: "paragraph",
        text:
          "Volatility describes how much and how quickly an asset's price changes.",
      },
      {
        type: "heading",
        text: "Why Risk Management Matters",
      },
      {
        type: "paragraph",
        text:
          "Large price movements can quickly turn a poorly sized position into a significant loss.",
      },
      {
        type: "list",
        items: [
          "Use appropriate position sizes.",
          "Define acceptable losses before entering.",
          "Avoid excessive leverage.",
          "Understand the volatility of the asset.",
        ],
      },
    ],
  },

  {
    id: "reading-crypto-charts",
    courseId: "crypto",
    title: "Reading Crypto Charts",
    description:
      "Learn the foundations of technical analysis for crypto markets.",
    content: [
      {
        type: "paragraph",
        text:
          "Charts provide a visual representation of price behaviour. Learning to read them is an important foundation for technical analysis.",
      },
      {
        type: "heading",
        text: "Candlestick Charts",
      },
      {
        type: "paragraph",
        text:
          "Candlesticks show the opening, closing, high, and low prices for a specific period.",
      },
      {
        type: "heading",
        text: "Timeframes",
      },
      {
        type: "paragraph",
        text:
          "Different timeframes provide different perspectives. Higher timeframes can reveal broader structure while lower timeframes provide more detailed price information.",
      },
      {
        type: "heading",
        text: "Important Chart Elements",
      },
      {
        type: "list",
        items: [
          "Price structure",
          "Support and resistance",
          "Trends",
          "Ranges",
          "Volume",
        ],
      },
    ],
  },

  {
    id: "market-cycles",
    courseId: "crypto",
    title: "Market Cycles",
    description:
      "Understand accumulation, expansion, distribution, and contraction.",
    content: [
      {
        type: "paragraph",
        text:
          "Markets can move through recurring phases of activity. Understanding these phases can help traders place current price behaviour into a broader context.",
      },
      {
        type: "heading",
        text: "Accumulation",
      },
      {
        type: "paragraph",
        text:
          "Accumulation describes a period where price may consolidate after a decline while longer-term participants gradually build positions.",
      },
      {
        type: "heading",
        text: "Expansion",
      },
      {
        type: "paragraph",
        text:
          "Expansion occurs when price moves away from a consolidation area and momentum may increase.",
      },
      {
        type: "heading",
        text: "Distribution",
      },
      {
        type: "paragraph",
        text:
          "Distribution describes a period where price may consolidate after an advance while selling pressure can begin to increase.",
      },
      {
        type: "heading",
        text: "Contraction",
      },
      {
        type: "paragraph",
        text:
          "Contraction describes a period of declining momentum or activity that can precede another change in market conditions.",
      },
    ],
  },

  {
    id: "trading-psychology",
    courseId: "crypto",
    title: "Trading Psychology",
    description:
      "Develop discipline when trading highly volatile markets.",
    content: [
      {
        type: "paragraph",
        text:
          "Crypto volatility can create strong emotional reactions. Developing discipline is essential when market movements are fast and unpredictable.",
      },
      {
        type: "heading",
        text: "Common Emotional Challenges",
      },
      {
        type: "list",
        items: [
          "Fear of missing out",
          "Fear after large price movements",
          "Revenge trading",
          "Overconfidence",
          "Impatience",
        ],
      },
      {
        type: "heading",
        text: "Avoid Chasing Price",
      },
      {
        type: "paragraph",
        text:
          "Large price movements can create pressure to enter a trade simply because price is moving quickly. A structured process helps prevent emotional entries.",
      },
      {
        type: "heading",
        text: "Discipline",
      },
      {
        type: "paragraph",
        text:
          "A disciplined trader focuses on following a defined process rather than reacting emotionally to every market movement.",
      },
    ],
  },

  {
    id: "risk-management",
    courseId: "crypto",
    title: "Risk Management",
    description:
      "Learn practical principles for managing risk in crypto trading.",
    content: [
      {
        type: "paragraph",
        text:
          "Risk management is the foundation of sustainable trading. The objective is not to eliminate losses, but to control them.",
      },
      {
        type: "heading",
        text: "Define Risk Before Entry",
      },
      {
        type: "paragraph",
        text:
          "Before entering a trade, determine how much capital you are prepared to risk if the trade moves against you.",
      },
      {
        type: "heading",
        text: "Position Size",
      },
      {
        type: "paragraph",
        text:
          "Position size should reflect the amount of risk you are willing to take and the distance to your invalidation level.",
      },
      {
        type: "list",
        items: [
          "Control position size.",
          "Use predefined risk limits.",
          "Be cautious with leverage.",
          "Avoid risking capital you cannot afford to lose.",
        ],
      },
    ],
  },

  {
    id: "building-a-crypto-trading-plan",
    courseId: "crypto",
    title: "Building a Crypto Trading Plan",
    description:
      "Create a structured framework for making crypto trading decisions.",
    content: [
      {
        type: "paragraph",
        text:
          "A crypto trading plan defines how you will approach the market before emotions and market movements influence your decisions.",
      },
      {
        type: "heading",
        text: "Define Your Market",
      },
      {
        type: "paragraph",
        text:
          "Choose the assets and markets you intend to study. Focus allows you to become familiar with the behaviour and characteristics of those markets.",
      },
      {
        type: "heading",
        text: "Define Your Setup",
      },
      {
        type: "paragraph",
        text:
          "Write down the conditions that must be present before you consider entering a trade.",
      },
      {
        type: "heading",
        text: "Define Your Risk",
      },
      {
        type: "paragraph",
        text:
          "Determine your maximum acceptable risk and position-sizing rules before entering the market.",
      },
      {
        type: "list",
        items: [
          "Entry conditions",
          "Stop-loss conditions",
          "Profit-taking conditions",
          "Position management rules",
          "Conditions for staying out of the market",
        ],
      },
    ],
  },

  {
    id: "putting-it-all-together",
    courseId: "crypto",
    title: "Putting It All Together",
    description:
      "Combine the fundamentals into a simple crypto trading framework.",
    content: [
      {
        type: "paragraph",
        text:
          "The concepts covered throughout this course provide a foundation for approaching crypto markets with greater structure and awareness.",
      },
      {
        type: "heading",
        text: "1. Understand the Market",
      },
      {
        type: "paragraph",
        text:
          "Know what you are trading, how the asset behaves, and what market conditions are currently present.",
      },
      {
        type: "heading",
        text: "2. Analyze Context",
      },
      {
        type: "paragraph",
        text:
          "Use market structure, price behaviour, charts, and broader market information to establish context.",
      },
      {
        type: "heading",
        text: "3. Control Risk",
      },
      {
        type: "paragraph",
        text:
          "Determine your risk and position size before entering the trade.",
      },
      {
        type: "heading",
        text: "4. Execute With Discipline",
      },
      {
        type: "paragraph",
        text:
          "Take only trades that satisfy your predefined conditions and manage them according to your plan.",
      },
      {
        type: "heading",
        text: "5. Review Your Decisions",
      },
      {
        type: "paragraph",
        text:
          "Review your trades and identify what you did well, what went wrong, and what can be improved.",
      },
    ],
  },
];