export type GlossaryCategory =
  | "Forex"
  | "Technical Analysis"
  | "Risk"
  | "Crypto";

export type GlossaryTerm = {
  id: string;
  term: string;
  abbreviation?: string;
  category: GlossaryCategory;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  // ============================================================
  // FOREX
  // ============================================================

  {
    id: "pip",
    term: "Pip",
    category: "Forex",
    definition:
      "A pip is a standard unit used to measure price movement in a currency pair. For many major currency pairs, one pip represents a movement of 0.0001.",
  },
  {
    id: "lot",
    term: "Lot",
    category: "Forex",
    definition:
      "A lot represents the size of a Forex position. Common position sizes include standard, mini, and micro lots.",
  },
  {
    id: "spread",
    term: "Spread",
    category: "Forex",
    definition:
      "The spread is the difference between the bid price and the ask price of a financial instrument.",
  },
  {
    id: "swap",
    term: "Swap",
    category: "Forex",
    definition:
      "Swap is a financing adjustment that may be applied when a Forex position is held overnight. The amount depends on the instrument, broker, and position.",
  },
  {
    id: "margin",
    term: "Margin",
    category: "Forex",
    definition:
      "Margin is the amount of capital required by a broker to open and maintain a leveraged position.",
  },
  {
    id: "leverage",
    term: "Leverage",
    category: "Forex",
    definition:
      "Leverage allows a trader to control a larger position with a smaller amount of capital. It can increase both potential gains and potential losses.",
  },

  // ============================================================
  // TECHNICAL ANALYSIS
  // ============================================================

  {
    id: "fair-value-gap",
    term: "Fair Value Gap",
    abbreviation: "FVG",
    category: "Technical Analysis",
    definition:
      "A fair value gap is an area on a price chart where price moved rapidly, leaving an imbalance between buying and selling activity across a sequence of candles.",
  },
  {
    id: "liquidity",
    term: "Liquidity",
    category: "Technical Analysis",
    definition:
      "Liquidity refers to the availability of buyers and sellers in a market. In technical analysis, traders may also use the term to describe areas where orders or stops are concentrated.",
  },
  {
    id: "support",
    term: "Support",
    category: "Technical Analysis",
    definition:
      "Support is a price area where buying interest has historically been strong enough to slow or temporarily stop downward movement.",
  },
  {
    id: "resistance",
    term: "Resistance",
    category: "Technical Analysis",
    definition:
      "Resistance is a price area where selling interest has historically been strong enough to slow or temporarily stop upward movement.",
  },
  {
    id: "break-of-structure",
    term: "Break of Structure",
    abbreviation: "BOS",
    category: "Technical Analysis",
    definition:
      "A break of structure describes price breaking an important previous swing point, potentially indicating continuation or a change in market behaviour.",
  },
  {
    id: "change-of-character",
    term: "Change of Character",
    abbreviation: "CHOCH",
    category: "Technical Analysis",
    definition:
      "Change of Character is a term used by some traders to describe a potential shift in the current market structure or directional behaviour.",
  },

  // ============================================================
  // RISK
  // ============================================================

  {
    id: "risk-to-reward",
    term: "Risk-to-Reward Ratio",
    abbreviation: "R:R",
    category: "Risk",
    definition:
      "Risk-to-reward compares the amount a trader is willing to risk with the potential amount they are targeting. A 1:2 ratio means risking one unit to potentially make two.",
  },
  {
    id: "drawdown",
    term: "Drawdown",
    category: "Risk",
    definition:
      "Drawdown measures the decline in an account or portfolio from a previous peak to a subsequent low.",
  },
  {
    id: "position-size",
    term: "Position Size",
    category: "Risk",
    definition:
      "Position size is the amount of an asset or financial instrument held in a trade. It should be determined in relation to capital, risk, and the trade setup.",
  },
  {
    id: "stacking",
    term: "Stacking",
    category: "Risk",
    definition:
      "Stacking generally refers to adding multiple positions or entries in the same market direction. The combined exposure should be considered when managing risk.",
  },
  {
    id: "scaling",
    term: "Scaling",
    category: "Risk",
    definition:
      "Scaling refers to gradually increasing or reducing a position rather than entering or exiting the entire position at once.",
  },
  {
    id: "stop-loss",
    term: "Stop Loss",
    abbreviation: "SL",
    category: "Risk",
    definition:
      "A stop loss is an order or predefined exit level intended to limit the loss on a trade if price moves against the position.",
  },
  {
    id: "break-even",
    term: "Break Even",
    abbreviation: "BE",
    category: "Risk",
    definition:
      "Break even refers to a trade reaching approximately its entry price after accounting for relevant trading costs, resulting in little or no net gain or loss.",
  },

  // ============================================================
  // CRYPTO
  // ============================================================

  {
    id: "blockchain",
    term: "Blockchain",
    category: "Crypto",
    definition:
      "A blockchain is a distributed digital ledger that records transactions across a network using cryptographic techniques and a shared consensus process.",
  },
  {
    id: "gas",
    term: "Gas",
    category: "Crypto",
    definition:
      "Gas refers to the computational fees required to perform transactions or execute operations on certain blockchain networks.",
  },
  {
    id: "wallet",
    term: "Wallet",
    category: "Crypto",
    definition:
      "A crypto wallet is a tool that allows users to manage the cryptographic keys used to access and interact with digital assets.",
  },
  {
    id: "staking",
    term: "Staking",
    category: "Crypto",
    definition:
      "Staking generally involves committing certain crypto assets to support the operation or security of a blockchain network, potentially receiving rewards in return.",
  },
  {
    id: "market-cap",
    term: "Market Capitalization",
    abbreviation: "Market Cap",
    category: "Crypto",
    definition:
      "Market capitalization is the total market value assigned to an asset. For a cryptocurrency, it is commonly calculated by multiplying the current price by the circulating supply.",
  },
];

export const glossaryCategories: GlossaryCategory[] = [
  "Forex",
  "Technical Analysis",
  "Risk",
  "Crypto",
];