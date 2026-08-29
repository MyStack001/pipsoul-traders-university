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
          "Forex trading involves exchanging one currency for another. Unlike buying a stock, you are always dealing with a pair of currencies because one currency is being exchanged against another.",
      },

      {
        type: "heading",
        text: "How Currency Pairs Work",
      },

      {
        type: "paragraph",
        text:
          "A currency pair shows the relationship between two currencies. The first currency is called the base currency, while the second is called the quote currency.",
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
        text: "Why Do Prices Move?",
      },

      {
        type: "paragraph",
        text:
          "Currency prices move because of changes in supply and demand. Economic data, interest rates, central bank decisions, geopolitical events, market sentiment, and expectations can all influence the demand for a currency.",
      },

      {
        type: "heading",
        text: "The Goal of This Course",
      },

      {
        type: "paragraph",
        text:
          "The goal is not simply to teach you how to place trades. You will progressively learn how markets work, how to analyze price, how to manage risk, and how to develop a disciplined approach to decision-making.",
      },
    ],
  },
];